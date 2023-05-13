from django.urls import path
from apps.galeria import views

urlpatterns = [
    path('', views.index, name='Galeria'),
    path('imagem/<int:id>', views.imagem, name='Imagem')
]