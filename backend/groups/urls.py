from django.urls import path
from .views import group_list

app_name = 'groups'

urlpatterns = [
    path('',group_list,name='group_list'),
]
