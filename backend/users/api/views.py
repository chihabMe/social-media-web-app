from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

from posts.serializers import CommentSerializer, PostSerializer
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


@api_view(['GET'])
def search_users(request):
    q=request.GET.get('q')
    if q:
        users = Profile.objects.filter(user__username__icontains=q)
        paginator = PageNumberPagination()
        paginator.page_size=5
        result_page = paginator.paginate_queryset(users,request)
        serializer = UserSerializer(result_page,context={'request':request},many=True)
        return paginator.get_paginated_response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)
    

class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes=(AllowAny,)

    serializer_class=MyTokenObtainSerializer

class MyTokenRefreshView(TokenRefreshView):

    permission_classes=(AllowAny,)

class Registration(generics.CreateAPIView):
    queryset= User.objects.all()
    permission_classes=(AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
def get_resent_comments(request,username):
    user = get_object_or_404(User,username=username)
    comments  = user.user_post_comments.all().order_by("-created")[:6]
    serializer = CommentSerializer(comments,context={"request":request},many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)
@api_view(['GET'])
def get_user_posts(request,username):
    user = get_object_or_404(User,username=username)
    posts =  user.posts.all().order_by('-created')
    paginator = PageNumberPagination() 
    paginator.page_size=5
    result_page  = paginator.paginate_queryset(posts,request)
    serializer = PostSerializer(result_page,many=True,context={"request":request})
    return paginator.get_paginated_response(serializer.data)

