from django.shortcuts import render
from .models import *
from .forms import *

# Create your views here.

def index(request):
  return render(request, "index.html")

#def gallery(request):
#  return render(request, "gallery.html")

def codes(request):
  return render(request, "codes.html")

def about(request):
  return render(request, "about.html")

def ImageView(request):
  if request.method == 'POST':
    profile_form = ProfileForm(data=request.POST, files=request.FILES)
    
    if profile_form.is_valid():
      profile_form.save()

  else:
    profile_form = Profile_Form()

  return render(request, 'upload.html', {'profile_form': profile_form})

def Display_gallery(request):
  if request.method == 'GET':
    img = Profile.objects.all()
  
  return render(request, 'gallery.html', {'profile_img': img})


