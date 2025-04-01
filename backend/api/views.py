from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import DetailsCOE
from .serializers import all_Crtf_Serializer,Other_Crtf_Serializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


#for students... get by rollnumber

class StudentListCreate(ListCreateAPIView):
    queryset = DetailsCOE.objects.all()
    serializer_class = all_Crtf_Serializer

class StudentRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = DetailsCOE.objects.all()
    serializer_class = all_Crtf_Serializer
    lookup_field = 'rollnumber'

    def retrieve(self, request, *args, **kwargs):
        rollnumber = kwargs.get('rollnumber')
        queryset = self.get_queryset().filter(rollnumber=rollnumber)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class facultyViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = DetailsCOE.objects.all()
    serializer_class = all_Crtf_Serializer
    def get_queryset(self):
        user = self.request.user
        return DetailsCOE.objects.filter(verified_by = user)
    

class LoginView(APIView):
    def post(self, request):
        # Assuming these are the usernames and passwords of the two users you've added in the admin portal
        usernames = ['COE', 'DAA']
        passwords = ['controllerofexam', 'deanHBTU']

        username = request.data.get('username')
        password = request.data.get('password')

        if username in usernames and password == passwords[usernames.index(username)]:
            # If the provided credentials match one of the users, authenticate the user
            user = User.objects.get(username=username)
            if user is not None:
                # If authentication is successful, generate JWT tokens
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })

        # If authentication fails, return an error response
        return Response({'error': 'Invalid credentials'}, status=400)