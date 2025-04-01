from django.contrib import admin
from .models import DetailsCOE

# Register your models here.

@admin.register(DetailsCOE)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id','rollnumber' , 'studentName' , 'branch' , 'Certificate']
