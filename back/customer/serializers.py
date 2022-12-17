from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Customer
from rest_framework.authentication import TokenAuthentication


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name',
                  'last_name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }


class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Customer
        fields = ['id', 'image', 'user']
        authentication_classes = [TokenAuthentication]

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        customer = Customer.objects.create(**validated_data)
        for data in user_data:
            User.objects.create(album=customer, **data)
        return customer

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        instance = super().update(instance, user_data)
        Customer.objects.filter(user=instance).update(**validated_data)
        return instance
