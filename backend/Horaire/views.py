from django.shortcuts import render, get_object_or_404
from .models import Semaine

# Create your views here.

def Horaire(request):

    semaine = Semaine.objects.all()

    return render(request, 'index.html', {"semaine" : semaine})