# Generated by Django 4.2.1 on 2023-05-08 15:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('galeria', '0003_fotografia_publicado'),
    ]

    operations = [
        migrations.AddField(
            model_name='fotografia',
            name='data',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
