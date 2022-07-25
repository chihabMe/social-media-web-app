from ctypes.wintypes import POINT
from itertools import tee
from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Post,Comment,Image

User = get_user_model()

class PostTestCase(TestCase):
    post_title = 'post title '
    post_body = 'post body'
    username='test_user'
    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(username=cls.username)
        user.save()
        post = Post.objects.create(title=cls.post_title,body=cls.post_body,author=user)
        post.save()
    def test_post_count(self):
        self.assertTrue(Post.objects.all().count()==1)

    def test_comments_count(self):
        post = Post.objects.get(id=1)
        self.assertEqual(post.post_comments.count(),0)

    def test_images_count(self):
        post = Post.objects.get(id=1)
        self.assertEqual(post.post_images.count(),0)
    def test_post_title(self):
        post = Post.objects.get(id=1)
        self.assertEqual(post.title,self.post_title)
    def test_post_body(self):
        post = Post.objects.get(id=1)
        self.assertEqual(post.body,self.post_body)
    def test_post_author(self):
        post = Post.objects.get(id=1)
        user = User.objects.get(id=1)
        self.assertEqual(post.author,user)

class CommentTestCase(TestCase) :
    comment_body = 'comment body'
    @classmethod
    def setUpTestData(cls)  :
        user = User.objects.create(username="chihab")
        post = Post.objects.create(body="body",title="title",author=user)
        comment = Comment.objects.create(body=cls.comment_body,author=user,post=post)

    def test_comment_count(self):
        self.assertEqual(Comment.objects.all().count(),1)
    def test_comment_body(self):
        comment = Comment.objects.get(id=1)
        self.assertTrue(comment.body,self.comment_body)


