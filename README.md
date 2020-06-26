### 1. Clone and follow the below steps

```bash
cd django-practice-app/
python3.7 -m venv myenv
source myenv/bin/activate
pip3 install -r requiremets.txt
pip3 demoapp/manage.py makemigrations
pip3 demoapp/manage.py migrate
pip3 demoapp/manage.py createsuperuser
pip3 demoapp/manage.py runserver
    
```

Django app is UP, Visit [http://localhost:8000](http://localhost:8000)

### 2. Now, for test-client angular app follow below steps

```bash
    
cd test-client/
npm install
ng serve
```

Angular client app is UP, Visit [http://localhost:4200](http://localhost:4200)
