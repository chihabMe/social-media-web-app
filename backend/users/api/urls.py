from django.urls import path
from .views import MyTokenObtainPairView,Registration,MyTokenRefreshView,get_user

urlpatterns = [
    path("token/",MyTokenObtainPairView.as_view(),name='token_obtain'),
    path("token/refresh/",MyTokenRefreshView.as_view(),name='refresh_token'),
    path("registration/",Registration.as_view(),name='registration'),
    path('<str:username>/',get_user,name='get_user'),
]


