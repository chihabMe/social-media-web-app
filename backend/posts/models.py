from distutils.command.upload import upload
from django.db import models
from django.contrib.auth import get_user_model
from random import randint
from django.utils.text import slugify

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User,related_name='posts',on_delete=models.CASCADE)
    body = models.TextField()
    slug = models.SlugField(max_length=350,null=True,blank=True,unique=True)
    likes = models.ManyToManyField(User,related_name='liked_posts',blank=True,null=True)
    created  = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created',)

    def save(self,*args,**kwargs):
        title_=self.title
        safe = False
        while not safe:
            lookup = Post.objects.filter(title=title_)
            if lookup.exists():
                title_+="-"+str(randint(1,10000))
            else:
                safe=True
        self.slug=slugify(title_)
        super(Post,self).save(*args,**kwargs)
    def get_total_likes(self)->int:
        return self.likes.count()
    def get_total_comments(self)->int:
        return self.comments.count()
    def get_total_images(self)->int:
        return self.images.count()

    def __str__(self) -> str:
        return self.title

def image_path_namer(instance,filename):
    name = instance.author.username+"/"+filename
    return name
class Image(models.Model):
    author = models.ForeignKey(User,related_name='post_images',on_delete=models.CASCADE)
    post = models.ForeignKey(Post,related_name='images',on_delete=models.CASCADE)
    image = models.ImageField(upload_to=image_path_namer)
    created  = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return "post "+self.post.title+" user " +self.author.username


class Comment(models.Model):
    author = models.ForeignKey(User,related_name='user_post_comments',on_delete=models.CASCADE)
    post = models.ForeignKey(Post,related_name='post_comments',on_delete=models.CASCADE)
    body = models.TextField()
    likes = models.ManyToManyField(User,related_name='comment_likes')
    parents = models.ForeignKey('self',null=True,blank=True,related_name='replies',on_delete=models.CASCADE)
    created  = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created',)
    def get_total_replays(self)->int:
        return self.replays.count()
    def get_total_likes(self)->int:
        return self.likes.count()

    def __str__(self) -> str:
        return "comment by "+self.author.username+" post "+self.post.title
