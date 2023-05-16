"""
URL configuration for headhunter project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path("", TemplateView.as_view(template_name="index.html")),
    path("", include("allauth.urls")),
]

# TODO: REMOVE THIS TEST SENDING MAIL
# from django.core.mail import send_mail
# from django.conf import settings
# send_mail("Test", "Verify your email address you scammaz 🤖🤖🤖🤖", settings.EMAIL_HOST_USER, ["mykhailo.ovcharenko1@nure.ua"])
