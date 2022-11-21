from django.db import models 
from django.contrib.auth.models import User

class User(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField()
    lastname = models.TextField() 
    image = models.ImageField(upload_to="user", null=True)


    def __str__(self) -> str:
        return self.name + ' ' + self.lastname