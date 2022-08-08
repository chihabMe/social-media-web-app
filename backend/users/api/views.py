from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .serializers import MyTokenObtainSerializer,RegistrationSerializer,UserSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework import generics 
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from users.models import Profile
from rest_framework.pagination import PageNumberPagination


User = get_user_model()


@api_view(['GET'])
def get_user(request,username):
    user = get_object_or_404(User,username=username)
    profile = Profile.objects.get(user=user)
    serializer = UserSerializer(profile,context={"request":request})
    return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['POST'])
def follow_user(request,username):
    user = get_object_or_404(User,username=username)
    my_profile =request.user.profile
    data={}
    if user.profile in my_profile.following.all():
        my_profile.following.remove(user.profile)
        data['action']='remove'
    else:
        my_profile.following.add(user.profile)
        data['action']='add'
    return Response(data,status=status.HTTP_200_OK)


@api_view(['POST'])
def search_users(request):
    q=request.data.get('q')
    if q:
        users = Profile.objects.filter(user__username__icontains=q)
        paginator = PageNumberPagination()
        paginator.page_size=5
        result_page = paginator.paginate_queryset(users,request)
        serializer = UserSerializer(result_page,context={'request':request},many=True)
        return paginator.get_paginated_response(serializer.data)
    

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=(AllowAny,)

    serializer_class=MyTokenObtainSerializer

class MyTokenRefreshView(TokenRefreshView):

    permission_classes=(AllowAny,)

class Registration(generics.CreateAPIView):
    queryset= User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class = RegistrationSerializer
