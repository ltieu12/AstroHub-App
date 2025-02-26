from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from .models import CustomUser


User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all(), message="This username is already taken.")])
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all(), message="This email is already taken.")])
    name = serializers.CharField(required=True)


    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'name']

        def create(self, validated_data):
            user = User.objects.create_user(
                username=validated_data["username"],
                email=validated_data["email"],
                password=validated_data["password"],
                name=validated_data.get("name", "")
            )

            return user


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'bio', 'profile_pic']