from rest_framework import serializers
from .models import DetailsCOE

class all_Crtf_Serializer(serializers.ModelSerializer):
    class Meta:
        model = DetailsCOE
        fields = '__all__'

class Other_Crtf_Serializer(serializers.ModelSerializer):
    class Meta:
        model = DetailsCOE
        fields = ['id','studentName','fatherName','rollnumber','programme','department','branch','mobilenumber','email','address','aadharnumber','nodues_copy','aadharcopy','status','created_at','Certificate','verified_by','updated_at']