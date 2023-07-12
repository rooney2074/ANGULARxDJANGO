from django.shortcuts import render
from .models import User
from .serializers import UserSertilizer
from rest_framework import viewsets

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSertilizer
    queryset = User.objects.all()
