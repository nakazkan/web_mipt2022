from django.db import models 
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
   # user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField()
    lastname = models.TextField() 
    image = models.ImageField(upload_to="Customer", null=True)


    def __str__(self) -> str: 
        return self.name + ' ' + self.lastname


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Customer.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.customer.save()