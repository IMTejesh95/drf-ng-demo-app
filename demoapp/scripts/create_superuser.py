import django
django.setup()

from django.contrib.auth.models import User

def run():
    u = User(username='manager')
    u.set_password('manager')
    #u.is_superuser = True
    #u.is_staff = True
    u.save()
