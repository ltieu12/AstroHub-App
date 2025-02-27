from django.urls import path
from .views import RegisterView, LoginView, UserListView, DeleteUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('users/', UserListView.as_view(), name='users'),
    path('delete-user/', DeleteUserView.as_view(), name='delete-user')
]