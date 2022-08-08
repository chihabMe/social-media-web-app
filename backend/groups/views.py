from django.shortcuts import render
from rest_framework.decorators import api_view,parser_classes,permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from rest_framework import status

from .serializers import GroupSerializer
from .models import Group
# Create your views here.
@api_view(['GET',"POST"])
@parser_classes([FormParser,MultiPartParser])
def group_list(request):
    if request.method=='GET':
        group_list = Group.activated.all()
        serializer = GroupSerializer(group_list,context={'request':request},many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    if request.method =='POST' :
        serializer = GroupSerializer(data=request.data,context={"request":request})
        if serializer.is_valid():
            serializer.validated_data.user = request.user
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)