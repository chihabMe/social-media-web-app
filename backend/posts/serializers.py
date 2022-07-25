from rest_framework import serializers
from .models import Post,Comment,Image

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields=('title','body','author_username','id','created','updated','slug','get_total_likes','get_total_comments')
    
    def create(self, validated_data,commit=True):
        post  = Post(**validated_data)
        post.save()
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