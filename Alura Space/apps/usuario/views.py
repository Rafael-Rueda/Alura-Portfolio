from django.shortcuts import render, redirect
from apps.usuario.forms import FormLogin, FormRegistro

from django.contrib import auth, messages
from django.contrib.auth.models import User

def login(request):
    form = FormLogin()

    if request.method == 'POST':
        form = FormLogin(request.POST)

        if not form.is_valid():
            return redirect('Login')

        usuario = form['usuario'].value()
        senha = form['senha'].value()

        user = auth.authenticate(request, username = usuario, password = senha)
        
        if user is not None:
            auth.login(request, user)
            messages.success(request, 'Usuario logado com sucesso.')
            return redirect('Galeria')
        else:
            messages.error(request, 'Falha ao logar. Campos invalidos.')
            return redirect('Login')

    return render(request, 'usuario/login.html', {'form':form})

def registro(request):
    form = FormRegistro

    if request.method == 'POST':
        form = FormRegistro(request.POST)

        if not form.is_valid():
            return redirect('Registro')
        
        usuario = form['usuario'].value()
        email = form['email'].value()
        senha = form['senha'].value()
        confirmar_senha = form['confirmar_senha'].value()

        if senha != confirmar_senha:
            messages.error(request, 'Falha ao registrar. As senhas devem ser iguais.')
            return redirect('Registro')

        if User.objects.filter(username = usuario).exists():
            messages.error(request, 'Falha ao Registrar. Usuario ja existe.')
            return redirect('Registro')
        
        user = User.objects.create_user(username=usuario, email=email, password=senha)
        user.save()
        messages.success(request, 'Usuario criado com sucesso.')
        return redirect('Galeria')

    return render(request, 'usuario/registro.html', {"form":form})

def logout(request):
    auth.logout(request)
    messages.success(request, 'Logout efetuado com sucesso.')
    return redirect('Login')