from django.contrib import admin
from .models import Group

# Register your models here.
@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display  = ('name','created','active','public','updated','admin')
    list_filter = ('active','public','admin')
    search_fields = ('name',)
    prepopulated_fields={'slug':('name',)}
    date_hierarchy= 'created'
        
