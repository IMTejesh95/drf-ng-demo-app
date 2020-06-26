from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.permissions import IsAuthenticated


class FeatureView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request ):
        return Response({"message":"Hello, This mesasage is from DjangoRestFramework."})