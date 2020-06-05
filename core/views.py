from django.shortcuts import render, HttpResponse
from django.core.mail import send_mail


def send_email(request):
    subject = "Заявка с сайта"
    message = request.POST.get('name', '')
    message += " " + request.POST.get('phone', '')
    message += " " + request.POST.get('email', '')
    if subject and message:
        try:
            send_mail(subject, message, ['_'], ['_'])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponseRedirect('/index')
    else:
        return HttpResponse('Make sure all fields are entered and valid.')

# Create your views here.
def index(request):
    return render(request, 'core/index.html')
