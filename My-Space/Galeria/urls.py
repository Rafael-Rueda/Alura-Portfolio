from django.urls import path
from Galeria.views import index

urlpatterns = [
    path('', index)
]