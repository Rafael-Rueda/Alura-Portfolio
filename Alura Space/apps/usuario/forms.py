from django import forms

class FormLogin(forms.Form):
    usuario = forms.CharField(label="Usuario:", max_length=100, required=True, widget=forms.TextInput({"placeholder": "Digite seu nome de usuario"}))
    senha = forms.CharField(label="Senha:", max_length=50, required=True, widget=forms.PasswordInput({"placeholder": "Digite sua senha"}))

class FormRegistro(forms.Form):
    usuario = forms.CharField(label="Usuario:", required=True, widget=forms.TextInput({"placeholder": "Digite seu nome de usuario"}))
    email = forms.CharField(label="Email:", required=True, widget=forms.EmailInput({"placeholder": "Digite seu email"}))
    senha = forms.CharField(label="Senha:", required=True, widget=forms.PasswordInput({"placeholder": "Digite sua senha"}))
    confirmar_senha = forms.CharField(label="Confirmar senha:", required=True, widget=forms.PasswordInput({"placeholder": "Digite sua senha novamente"}))