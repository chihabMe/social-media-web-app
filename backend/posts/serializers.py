from requests import request
from rest_framework import serializers
from .models import Post,Comment,Image

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.CharField(source='get_total_likes',read_only=True)
    comments = serializers.CharField(source='get_total_comments',read_only=True)
    author = serializers.CharField(source='author_username',read_only=True)
    avatar  = serializers.CharField(source="get_author_avatar",read_only=True)
    avatar_image = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields=('title','body','image','author','avatar_image','id','avatar','created','updated','slug','likes','comments')
        
    
    def get_image(self,post):
        image = post.get_image()
        request = self.context.get("request")
        if image:
            return request.build_absolute_uri(image)
        return None
    def get_avatar_image(self,post):
        request  = self.context.get("request")
        avatar_full_url = request.build_absolute_uri(post.get_author_avatar())
        return avatar_full_url
    
    def create(self, validated_data):
        request = self.context.get('request')
        print("data-----------------")
        print(request.data)
        print("validated data-----------------")
        print(validated_data)
        print("-----------------")
        post  = Post(**validated_data)
        post.save()
        image = Image(post=post,author=request.user,image=request.data.get('image'))
        image.save()
        return post  

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title",instance.title)
        instance.body = validated_data.get("body",instance.body)
        instance.save()

        return instance


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields=('body','created','updated','id','get_total_likes','get_total_replies')
    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment
    def update(self, instance, validated_data):
        instance.body = validated_data.get("body",instance.body)
        instance.save()
        return instance
