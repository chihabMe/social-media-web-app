from django.urls import path
from .views import MyTokenObtainPairView,Registration,MyTokenRefreshView, follow_user, get_resent_comments,get_user, get_user_posts, search_users

urlpatterns = [
    path("token/",MyTokenObtainPairView.as_view(),name='token_obtain'),
    path("token/refresh/",MyTokenRefreshView.as_view(),name='refresh_token'),
    path('search/',search_users,name='search_users'),
    path("registration/",Registration.as_view(),name='registration'),
    path('<str:username>/',get_user,name='get_user'),
    path("<str:username>/follow/",follow_user,name='follow_user'),
    path("<str:username>/recent-comments/",get_resent_comments,name='resent_comments'),
    path("<str:username>/posts/",get_user_posts,name='user_posts'),
]


