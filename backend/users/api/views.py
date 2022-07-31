from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .serializers import MyTokenObtainSerializer,RegistrationSerializer,UserSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework import generics 
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from users.models import Profile

User = get_user_model()
@api_view(['get'])
def get_user(request,username):
    user = get_object_or_404(User,username=username)
    profile = Profile.objects.get(user=user)
    serializer = UserSerializer(profile,context={"request":request})
    return Response(serializer.data,status=status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=(AllowAny,)
    serializer_class=MyTokenObtainSerializer

class MyTokenRefreshView(TokenRefreshView):

    permission_classes=(AllowAny,)

class Registration(generics.CreateAPIView):
    queryset= User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class = RegistrationSerializer
