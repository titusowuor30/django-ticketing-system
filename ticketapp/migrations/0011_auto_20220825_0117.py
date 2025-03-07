# Generated by Django 3.2.13 on 2022-08-24 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticketapp', '0010_imapsettings_auto_import_mails_as_tickets'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Tags',
            },
        ),
        migrations.AddField(
            model_name='ticket',
            name='tags',
            field=models.ManyToManyField(to='ticketapp.Tags'),
        ),
    ]
