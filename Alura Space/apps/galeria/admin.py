from django.contrib import admin
from apps.galeria.models import Fotografia

class admin_config(admin.ModelAdmin):
    list_display = ('id', 'nome', 'legenda', 'publicado', 'usuario')
    list_editable = ('publicado',)
    list_display_links = ('id', 'nome',)
    list_per_page = 10
    list_filter = ('categoria',)
    search_fields = ('nome', )

admin.site.register(Fotografia, admin_config)
