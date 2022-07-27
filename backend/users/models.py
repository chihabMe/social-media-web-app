from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save
from django.conf import settings


User = get_user_model()
def profile_image_namer(instance,filename):
    name = instance.user.username+"/"+"profile"+"/"+ filename
    return name
class Profile(models.Model):
    avatar = models.ImageField(upload_to=profile_image_namer,default="default/avatar.png",blank=True)
    user = models.OneToOneField(User,related_name='profile',on_delete=models.CASCADE)
    following = models.ManyToManyField('self',blank=True,related_name="followers")
    blocked = models.ManyToManyField('self',blank=True,related_name='blocked_by')

    def get_total_followers(self):
        return self.followers.count()
    def get_total_following(self):
        return self.following.count()
    def get_absolute_avatar_url(self):
        if self.avatar:
            return self.avatar.url
        return None
    def __str__(self) -> str:
        return self.user.username

def profile_creator(sender,instance,**kwargs):
    profile = Profile(user=instance)
    profile.save()


post_save.connect(receiver=profile_creator,sender=User)