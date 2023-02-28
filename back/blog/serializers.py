from rest_framework import serializers
from .models import Blog
from customer.serializers import CustomerSerializer

class BlogSerializer(serializers.ModelSerializer):
   # user = CustomerSerializer(read_only=True)
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'user']
        extra_kwargs = {'user': {'required': False}}
    # def save(self, **kwargs):
    #     """Include default for read_only `user` field"""
    #     kwargs["user"] = self.fields["user"].get_default()
    #     return super().save(**kwargs)