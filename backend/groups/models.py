from multiprocessing.managers import BaseManager
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse
from taggit.managers import TaggableManager
User  = get_user_model()
# Create your models here.
class GroupManager(models.Manager):
    def get_queryset(self):
        return super(GroupManager,self).get_queryset().filter(active=True)

def groupNamer(instance,filename):
    return 'group/'+instance.admin.username+"/"+instance.name+filename
class Group(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(max_length=200)
    image = models.ImageField(upload_to=groupNamer,blank=True,null=True)
    admin = models.ForeignKey(User,related_name='owned_groups',on_delete=models.CASCADE)
    users = models.ManyToManyField(User,related_name='user_groups',blank=True,null=True)
    public = models.BooleanField(default=True)
    active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    tags = TaggableManager()

    activated = GroupManager() 
    objects = models.Manager()

    def __str__(self) -> str:
        return self.name 

    def get_image_url(self):
        if self.image:
            return self.image.url
    def get_absolute_url(self):
        return reverse("groups:group",args=[self.slug])
    
    def get_users_count(self):
        return self.users.count()
