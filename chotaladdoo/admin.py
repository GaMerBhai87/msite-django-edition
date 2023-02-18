from django.contrib import admin
from .models import *
from .forms import *
# Register your models here.

@admin.register(Profile)

class AdminProfile(admin.ModelAdmin):
  list_display = ['image', 'name', 'designation']


