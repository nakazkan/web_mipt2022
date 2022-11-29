from django.db import models 
from customer.models import Customer


class Blog(models.Model):
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self) -> str:
        return self.title 