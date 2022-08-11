from requests import request
from rest_framework import serializers
from taggit.serializers import TaggitSerializer,TagListSerializerField
from .models import Post,Comment,Image

class PostSerializer(TaggitSerializer,serializers.ModelSerializer):
    likes = serializers.CharField(source='get_total_likes',read_only=True)
    comments = serializers.CharField(source='get_total_comments',read_only=True)
    author = serializers.CharField(source='author_username',read_only=True)
    avatar  = serializers.CharField(source="get_author_avatar",read_only=True)
    avatar_image = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField(read_only=True)
    followed = serializers.SerializerMethodField(read_only=True)
    tags = TagListSerializerField(read_only=True)
    class Meta:
        model = Post
        fields=('title','tags','body','image','liked','followed','author','avatar_image','id','avatar','created','updated','slug','likes','comments')
        
    def get_tag_list(self,post):
        return post.tags.all()
    def get_followed(self,post):
        user = self.context.get("request").user
        return post.author.profile in user.profile.following.all()
    def get_liked(self,post):
        user  = self.context.get("request").user
        return user in post.likes.all()
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
        post  = Post(**validated_data)
        post.save()
        body = post.body 
        word_list = body.split(" ")
        tag_list= []
        for word in word_list:
            if "#" in word:
                tag_list.append(word.replace("#",""))
        for tag in tag_list:
            post.tags.add(tag)
        if request.data.get('image'):
            image = Image(post=post,author=request.user,image=request.data.get('image'))
            image.save()

        return post

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title",instance.title)
        instance.body = validated_data.get("body",instance.body)
        instance.save()

        return instance


class CommentSerializer(serializers.ModelSerializer):
    likes   = serializers.CharField(read_only=True,source='get_total_likes')
    replies   = serializers.CharField(read_only=True,source='get_total_replies')
    avatar = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields=('body','created','updated','id','likes','replies','avatar')
    def get_avatar(self,comment):
        request = self.context.get("request")
        avatar_image = comment.author.profile.get_absolute_avatar_url()
        return request.build_absolute_uri(avatar_image)
    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment
    def update(self, instance, validated_data):
        instance.body = validated_data.get("body",instance.body)
        instance.save()
        return instance
