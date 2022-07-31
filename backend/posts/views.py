from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view,parser_classes
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import CommentSerializer,PostSerializer
from .models import Post,Comment,Image
from rest_framework.parsers import MultiPartParser,FormParser,JSONParser

@api_view(['GET','POST'])
@parser_classes([FormParser,MultiPartParser])
def posts_list(request,format=None):
    if request.method=='GET':
        data = Post.objects.all()
        serializer = PostSerializer(data,many=True,context={"request":request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method=='POST':
        serializer = PostSerializer(data=request.data,context={"request":request})
        if serializer.is_valid():
            serializer.validated_data['author_id']=request.user.id
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def post_details(request,slug):
    post = get_object_or_404(Post,slug=slug)
    if request.method=='GET':
        serializer = PostSerializer(post,context={"request":request})
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    elif request.method=='DELETE':
        if request.user==post.author or request.user.is_superuser:
            post.active=False
            post.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method=='PUT':
        serializer = PostSerializer(post,data=request.data)
        if request.user==post.author :
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    

    
        
@api_view(["GET","POST"])
def comment_list(request,post_slug):
    post = get_object_or_404(Post,slug=post_slug)
    if request.method=='GET':
        post_comments  = post.post_comments
        serializer = CommentSerializer(post_comments,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    elif request.method=='POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['author_id']=request.user.id
            serializer.validated_data['post_id']=post.id
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
@api_view(["DELETE","PUT"]) 
def comment_details(request,post_slug,comment_id) :
    comment = get_object_or_404(Comment,id=comment_id)
    if request.method=="DELETE":
        if request.user==comment.author:
            comment.active = False
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
    elif request.method=='PUT':
        serializer = CommentSerializer(comment,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
@api_view(["post"])
def post_like(request,post_slug):
    post = get_object_or_404(Post,slug=post_slug)
    data={}
    if request.user in post.likes.all():
        post.likes.remove(request.user)
        data['action']='disliked'
    else:
        post.likes.add(request.user)
        data['action']='liked'
    data['count']=post.likes.count()
    return Response(data=data,status=status.HTTP_201_CREATED)


