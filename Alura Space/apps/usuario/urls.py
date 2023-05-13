from django.urls import path
from apps.usuario import views

urlpatterns = [
    path('login', views.login, name='Login'),
    path('registro', views.registro, name='Registro'),
    path('logout', views.logout, name='Logout'),
]