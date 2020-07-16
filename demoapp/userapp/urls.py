from django.urls import path, re_path
from .views import (
    # HomeView,
    FeatureView,
    CustomAuthToken,
    AdminMessageView,
    UserMessageView,
)
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('user-auth/', CustomAuthToken.as_view(), name='user-auth'),
    path('feature/', FeatureView.as_view(), name='feature'),
    path('admin-message/', AdminMessageView.as_view(), name='admin-message'),
    path('user-message/', UserMessageView.as_view(), name='user-message'),

]
