from django.shortcuts import render, HttpResponse, get_object_or_404, HttpResponseRedirect
from django.http import Http404
from .models import Blog
from .forms import PostForm
from django.contrib.auth.models import User
from rest_framework import viewsets
from back.urls import router
from .serializers import BlogSerializer

def index(request):
    return render(request, 'index.html')


def react(request):
    return render(request, 'react.html')


def detail(request, blog_id):
    blog = get_object_or_404(Blog, id=blog_id)
    return render(request, 'index.html', {'blog': blog})


def list(request):
    blogs = Blog.objects.all()
    return render(request, 'list.html', {'blogs': blogs})


def create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)

        if form.is_valid():
            title = form.cleaned_data.get('title')
            description = form.cleaned_data.get('description')
            blog = Blog.objects.create(user=request.user.customer   , title=title, description=description)
            blog.save()
            return  HttpResponseRedirect('/blog/list')
    else:
        form = PostForm()
    return render(request, 'create.html', {'form': form})

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

router.register(r'blogs', BlogViewSet)