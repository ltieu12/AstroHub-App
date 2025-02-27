from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from django.contrib.auth import authenticate, get_user_model
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from .serializer import RegisterSerializer, UserListSerializer
from .models import CustomUser

User = get_user_model()

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registered user successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            refresh_token = RefreshToken.for_user(user)

            return Response({
                "refresh": str(refresh_token),
                "access": str(refresh_token.access_token),
                "username": user.username,
                "email": user.email
            }, status=status.HTTP_200_OK)
        
        else:
            return Response({"Error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        
# Get all users
class UserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserListSerializer
    permission_classes = [AllowAny]


# Delete a user (only if user is logged in)
class DeleteUserView(APIView):
    def delete(self, request):
        user = request.user 
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)