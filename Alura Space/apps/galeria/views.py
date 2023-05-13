from django.shortcuts import render, redirect
from apps.galeria.models import Fotografia
from django.contrib import messages

def index(request):

    if not request.user.is_authenticated:
        messages.warning(request, 'Voce precisa estar logado para acessar essa pagina.')
        return redirect('Login')

    fotografia = Fotografia.objects.order_by('data').filter(publicado = True)
    return render(request, 'galeria/base.html', {"cards": fotografia})
def imagem(request, id):

    if not request.user.is_authenticated:
        messages.warning(request, 'Voce precisa estar logado para acessar essa pagina.')
        return redirect('Login')

    fotografia = Fotografia.objects.get(pk = id)
    return render(request, 'galeria/imagem.html', {"card": fotografia})
        