from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class HomeView(APIView):
    permission_classes = (IsAuthenticated,)
    
    def get(self, request):
        return Response({"message":"Welcome!"}, status.HTTP_202_ACCEPTED)