from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.IntegerField()
    address = models.CharField(max_length=250)

class Meta:
    db_table = "user"

#to avoid error
def __str__(self):
    if self.name == None:
        return "ERROR-COUSTOMER NAME IS NULL"
    return self.name