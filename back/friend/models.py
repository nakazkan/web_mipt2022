from django.db import models 
#from django.contrib.auth.models import User
from customer.models import Customer


class Friend(models.Model): #following
    userId = models.ForeignKey(Customer, related_name='userId', on_delete=models.CASCADE)
    friendId = models.ForeignKey(Customer, related_name='friendId', on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return 'friend'
