from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

#from back.urls import router
from .serializers import CustomerSerializer
from .serializers import UserSerializer
from .models import Customer
from rest_framework import viewsets
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required   
from rest_framework.decorators import api_view

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def perform_create(self, serializer):
        user = User.objects.create_user(**serializer.validated_data)
        user.set_password(serializer.validated_data['password'])
        return user


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    # def perform_create(self, serializer):
    #     # print('!!!!!!!!!!')
    #     # print(serializer.get_fields())
    #     # print('!!!!!!!!!!')
    #   ##  customer = serializer.save(commit=False)
    #  ##   customer.user = queryset.user
    #     customer = Customer.objects.create(**serializer.validated_data)

    #     customer.set_password(serializer.validated_data['password'])
    #     return customer

    def perform_create(self, serializer):
        # customer = Customer.objects.create(self.request)
        # customer.user = self.request.user
        # serializer.save(user=self.request.user)

        user_relationship = serializer.validated_data.pop('user')
       # ab =  User.objects.create()
        User.objects.create_user(**user_relationship)
    #     cust= Customer.objects.get(id=ab.id)
    #     cust.user.email = "123@mail.ru"
    #     print(cust.user.email)
    #     print(ab.id)
    #     print(serializer.validated_data)
    #     print(example_relationship)
    #     print('@@@@@@@@@@@@@@@@@@@@@@@@')
    #  #   customer = Customer.objects.update(user=ab)
    #     # customer.user = ab# example_relationship
    #     return cust

        # print('++++++++++++++++++++++++++++++')
        # aaa = serializer.validated_data.pop('name')
        # print(aaa)
        # print('++++++++++++++++++++++++++++++')
        # #customer = Customer.objects.create()
        # serializer.validated_data['user'] = self.request.user.customer
        # return super().perform_create(serializer)

    def perform_update(self, serializer):
        return super().perform_update(serializer)


class CurrentUser(APIView):
    def get(self, request):
      serializer = CustomerSerializer(request.user.customer)
      return Response(serializer.data) 