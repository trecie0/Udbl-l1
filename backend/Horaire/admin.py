from django.contrib import admin
from .models import Cours, seance, Semaine, Jours, Jour, HeureSeance

# Register your models here.

admin.site.register(Cours)
admin.site.register(seance)
admin.site.register(Semaine)
admin.site.register(Jours)
admin.site.register(Jour)
admin.site.register(HeureSeance)