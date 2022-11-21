from django.db import models 
from django.contrib.auth.models import User

class Friend(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    friendId = models.BigIntegerField(default=0)

    def __str__(self) -> str:
        return self.userId