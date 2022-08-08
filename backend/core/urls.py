from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/users/",include('users.api.urls')),
    path("api/v1/posts/",include('posts.urls')),
    path("api/v1/groups/",include('groups.urls')),
]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)