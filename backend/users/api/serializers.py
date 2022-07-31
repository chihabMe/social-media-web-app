from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from users.models import Profile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
   # followers_count = serializers.CharField(source='get_total_followers',
   #                                         read_only=True)
    following_count = serializers.CharField(source='get_total_following',
                                            read_only=True)
    posts_count = serializers.CharField(source='get_total_posts',
                                        read_only=True)
    avatar = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = ("username",  'following_count',
                  "posts_count", "avatar", "email")

    def get_username(self,profile):
        return profile.user.username
    def get_email(self,profile):
        return profile.user.email
    def get_avatar(self, profile):
        image = profile.get_absolute_avatar_url()
        request = self.context.get("request")
        return request.build_absolute_uri(image)


class MyTokenObtainSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True,
                                     required=True,
                                     validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password2": "Password fields didn't match"})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'],
                                   email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user
