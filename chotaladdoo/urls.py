from django.contrib import admin
from django.urls import path
from chotaladdoo import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name='index'),
  
    path("gallery", views.gallery, name='gallery'),
  
    path("codes", views.codes, name='codes'),
  
    path("about", views.about, name='about')
  
]