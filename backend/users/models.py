from distutils.command.upload import upload
from sysconfig import get_scheme_names
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
def profile_image_namer(instance,filename):
    name = instance.user.username+"/"+"profile"+"/"+ filename
    return name
class Profile(models.Model):
    avatar = models.ImageField(upload_to=profile_image_namer)
    user = models.OneToOneField(User,related_name='profile',on_delete=models.CASCADE)
    following = models.ManyToManyField('self',related_name="followers")
    blocked = models.ManyToManyField('self',related_name='blocked_by')

    def get_total_followers(self):
        return self.followers.count()
    def get_total_following(self):
        return self.following.count()
    def get_absolute_url(self):
        return self.avatar.url
    def __str__(self) -> str:
        return self.user.username


