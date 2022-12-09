from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Customer
from rest_framework.authentication import TokenAuthentication


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name',
                  'last_name', 'email', 'password']
        # write_only_fields = ('password',)
    #    read_only_fields = ('id',)
        extra_kwargs = {
            'password': {'write_only': True}
        }
        # def create(self, validated_data):
        #     user = User.objects.create(
        #     username=validated_data['username'],
        #     email=validated_data['email'])

        #     user.set_password(validated_data['password'])
        #     user.save()

        #     return user


class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Customer
        fields = ['id', 'image', 'user']
        authentication_classes = [TokenAuthentication]
        #extra_kwargs = {'id': {'required': False}}
        # extra_kwargs = {
        #     'user': {'write_only': True}
        # }
        # fields = ['id','email',
        #           'password', 'name', 'lastname', 'image']
        #extra_kwargs = {'image': {'required': False}}

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

    # def create(self, validated_data):

    #     user_data = validated_data.pop('user')
    #     user = UserSerializer.create(
    #         UserSerializer(), validated_data=user_data)
    #     customer, created = Customer.objects.update_or_create(
    #         id=validated_data.pop('id'), name=validated_data.pop('name'), lastname=validated_data.pop('lastname'), image=validated_data.pop('image'), user=user,)
    #     return customer
