from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class CustomUserManager(BaseUserManager):
    def create(self, username, email, name, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    

class CustomUser(AbstractUser):
    name = models.CharField(max_length=100)
    profile_pic = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)

    objects = CustomUserManager()

    def __str__(self):
        return self.username
