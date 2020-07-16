from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        role = 'user'
        if user.is_superuser:
            role = 'admin'
        return Response({
            'token': token.key,
            'username': user.username,
            'firstname': user.first_name,
            'lastname': user.last_name,
            'role':role
        })


class FeatureView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    def get(self, request ):
        return Response({"message":"Hello, This is unrestricted mesasage from DRF."})

class AdminMessageView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request ):
        return Response({"message":"Hello, This is restricted message is only for ADMINISTRATOR."}, status=status.HTTP_200_OK)


class UserMessageView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = (IsAuthenticated,)
    def get(self, request ):
        return Response({"message":"Hello, This message is for USER."}, status=status.HTTP_200_OK)