from rest_framework import serializers
from .models import Friend
from customer.serializers import CustomerSerializer

class FriendSerializer(serializers.ModelSerializer):
    userId = CustomerSerializer(read_only=True)
    friendId = CustomerSerializer(read_only=True)
    class Meta:
        model = Friend
        fields = ['userId', 'friendId']
