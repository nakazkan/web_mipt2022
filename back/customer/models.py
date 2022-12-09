from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ObjectDoesNotExist


class Customer(models.Model):
    #user = models.ForeignKey(User,unique=True, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # name = models.TextField()
    # lastname = models.TextField()
    image = models.ImageField(upload_to="Customers",
                              default='/Customers/logo192.png')

    def __str__(self) -> str:
        return self.user.__str__()  # self.user #self.name + self.lastname

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Customer.objects.create(user=instance)
        else:
            instance.customer.save()
        # try:
        #     instance.customer.save()
        # except (ObjectDoesNotExist):
        #     Customer.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.customer.save()
