from django.shortcuts import render, HttpResponse
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
def index(request):
    if request.method == 'POST':
        message = "Заявка на звонок " + request.POST['name'] + " " + request.POST['email'] + " " + request.POST['phone']
        send_mail('Contact Form', message, settings.EMAIL_HOST_USER, ['_@mail.ru'], fail_silently=False)


    return render(request, 'core/index.html')
