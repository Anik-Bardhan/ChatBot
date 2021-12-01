from django.shortcuts import render
from django.http import HttpResponse
from .train import bot


# Create your views here.
def index(request):
    return render(request, 'bot/index.html')

def getResponse(request):
    response = request.GET.get('response')
    return HttpResponse(str(bot.get_response(response)))