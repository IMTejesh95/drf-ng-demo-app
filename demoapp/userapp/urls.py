from django.urls import path, re_path
from .views import HomeView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('api-token-auth/', obtain_auth_token, name='api_auth_token')
]
