from api import views
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('facultyapi', views.facultyViewset , basename= 'faculty_val')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('studentapi/', views.StudentListCreate.as_view()),
    path('studentapi/<int:rollnumber>', views.StudentRetrieveUpdate.as_view()),
    path('', include(router.urls)),
    path('facultylogin/',views.LoginView.as_view(), name='login')
] + static(settings.MEDIA_URL , document_root = settings.MEDIA_ROOT)
