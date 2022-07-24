from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path("token/",MyTokenObtainPairView.as_view(),name='token_obtain'),
    path("token/refresh/",TokenRefreshView.as_view,name='refresh_token')
]


