# Generated by Django 4.0.4 on 2022-05-12 14:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0002_ticket_resolved_by_ticket_resolved_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='ticket',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ticketapp.ticket'),
        ),
    ]
