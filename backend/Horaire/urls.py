from django.urls import path
from .views import Horaire

urlpatterns = [
    path('', Horaire),
]
