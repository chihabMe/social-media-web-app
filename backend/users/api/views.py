from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .serializers import MyTokenObtainSerializer,RegistrationSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework import generics 

User = get_user_model()
class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=(AllowAny,)
    serializer_class=MyTokenObtainSerializer

class MyTokenRefreshView(TokenRefreshView):

    permission_classes=(AllowAny,)

class Registration(generics.CreateAPIView):
    queryset= User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class = RegistrationSerializer