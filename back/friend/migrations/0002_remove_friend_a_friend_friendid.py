# Generated by Django 4.1.3 on 2022-11-21 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('friend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='friend',
            name='a',
        ),
        migrations.AddField(
            model_name='friend',
            name='friendId',
            field=models.BigIntegerField(default=0),
        ),
    ]
