# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-03-14 12:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('measure_mate', '0019_auto_20160314_1153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attribute',
            name='desc_class',
            field=models.CharField(blank=True, default=b'', max_length=256),
        ),
        migrations.AlterField(
            model_name='rating',
            name='desc_class',
            field=models.CharField(blank=True, default=b'', max_length=256),
        ),
    ]
