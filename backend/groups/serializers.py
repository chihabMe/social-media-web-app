from requests import request
from rest_framework import serializers
from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    group_image = serializers.SerializerMethodField()
    entered  = serializers.SerializerMethodField()
    class Meta:
        model = Group
        fields = ('name','entered','created','updated','admin','group_image','slug')
    def get_group_image(self,group):
        request  = self.context.get('request')
        if group.image:
            image_url = request.build_absolute_uri(group.get_image_url())
            return image_url
        return None
    def get_entered(self,group):
        request  = self.context.get('request')
        return request.user in group.users.all()
    def create(self,validate_data) :
        request = self.context.get('request')
        group = Group(**validate_data)
        if request.data.get('image'):
            group.image = request.data.get('image')
        group.save()
        return group
