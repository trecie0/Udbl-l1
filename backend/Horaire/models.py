from enum import unique

from django.db import models
from datetime import date
# Create your models here.

class Semaine(models.Model):
    nom = models.CharField(max_length=200)
    debut = models.DateField(unique=True)
    fin = models.DateField()
    def __str__(self):
        return f'semaine du {self.debut}'


class HeureSeance(models.Model):
    nom = models.CharField()
    def __str__(self):
        return self.nom

class Jour(models.Model):
    nom = models.CharField(max_length=200)
    def __str__(self):
        return self.nom

class Jours(models.Model):
    nom = models.ForeignKey(Jour, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)
    semaine = models.ForeignKey(Semaine, on_delete=models.CASCADE)
    def __str__(self):
        return self.nom.nom

class Cours(models.Model):
    nom = models.CharField(max_length=200)
    HeureParJour = models.IntegerField(default=4)
    heureTotal = models.IntegerField(default=0)
    credit = models.DecimalField(max_digits=5, decimal_places=2)
    professeur = models.CharField(max_length=200, blank=True, null=True)
    def __str__(self):
        return self.nom


class seance(models.Model):
    nom = models.ForeignKey(HeureSeance, on_delete=models.CASCADE)
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE)
    debut = models.TimeField()
    fin = models.TimeField()
    jours = models.ForeignKey(Jours, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)
    def __str__(self):
        return self.nom.nom

    class Meta:
        ordering = ["date", "debut"]
