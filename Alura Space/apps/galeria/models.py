from django.db import models
from datetime import datetime

from django.contrib.auth.models import User

class Fotografia(models.Model):

    categoria_choices = [
        ("Galaxia", "Galaxia"),
        ("Estrela", "Estrela"),
        ("Nebulosa", "Nebulosa"),
        ("Lua", "Lua"),
        ("Planeta", "Planeta")
    ]
    

    nome = models.CharField(max_length=100, null=False, blank=False)
    legenda = models.CharField(max_length=100, null=False, blank=False)
    descricao = models.TextField(max_length=150)
    categoria = models.CharField(max_length=20, choices=categoria_choices, default='Galaxia')
    publicado = models.BooleanField(default=True, blank=False, null=False)
    foto = models.ImageField(blank=True, upload_to='fotos/%Y/%m/%d/')
    data = models.DateTimeField(default=datetime.now, blank=False)
    usuario = models.ForeignKey(
        to= User,
        on_delete= models.SET_NULL,
        null=True,
        blank=False,
    )

    def __str__(self):
        return f'{self.nome}'