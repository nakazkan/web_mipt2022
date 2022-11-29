from rest_framework import serializers
from .models import Blog
from customer.serializers import CustomerSerializer

class BlogSerializer(serializers.ModelSerializer):
    user = CustomerSerializer(read_only=True)
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'user']
