from django.db import models
from customer.models import Customer


class Friend(models.Model): 
    userId = models.ForeignKey(
        Customer, related_name='userId', on_delete=models.CASCADE)
    friendId = models.ForeignKey(
        Customer, related_name='friendId', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('userId', 'friendId',)

    def __str__(self) -> str:
        return 'friend of ' + self.userId.__str__()
