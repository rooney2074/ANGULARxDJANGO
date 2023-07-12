from django.contrib import admin


from .models import User
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('id,''name','email','phone','address')

    admin.site.register(User)
