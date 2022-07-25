from django.urls import path 
from .views import posts_list,post_details,comment_list,comment_details

app_name ='posts'

urlpatterns=[
    path('',posts_list,name='posts_list'),
    path('<slug:slug>/',post_details,name='posts_details'),
    path("<slug:post_slug>/comments/",comment_list,name='comment_list'),
    path("<slug:post_slug>/comments/<int:comment_id>/",comment_details,name='comment_details')
]