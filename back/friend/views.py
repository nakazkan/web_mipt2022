
from .serializers import FriendSerializer
from .models import Friend
from rest_framework import viewsets


class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

