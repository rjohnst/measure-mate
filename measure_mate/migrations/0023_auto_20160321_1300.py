# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-21 13:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('measure_mate', '0022_action'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='key_metric',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='action',
            name='review_date',
            field=models.DateTimeField(null=True),
        ),
    ]