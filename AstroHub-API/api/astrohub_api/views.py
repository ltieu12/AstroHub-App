from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import RegisterSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registered user successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            refresh_token = RefreshToken.for_user(user)

            return Response({
                "refresh": str(refresh_token),
                "access": str(refresh_token.access_token),
                "username": user.username,
                "email": user.email
            }, status=status.HTTP_200_OK)
        
        return Response({"Error: Invalid username or password!"}, status=status.HTTP_401_UNAUTHORIZED)