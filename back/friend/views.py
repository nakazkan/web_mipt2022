from django.shortcuts import render
#from back.urls import router
from .serializers import FriendSerializer
from .models import Friend
from rest_framework import viewsets


class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

#router.register(r'friends', FriendSerializer)
