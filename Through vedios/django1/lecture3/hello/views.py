from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def maqsood(request):
    return HttpResponse("hello maqsood")

def shabnam(request):
    return HttpResponse("Hi Shabnam i love you")

def greet(request ,name):
    return render(request, "hello/greet.html", {
        "name": name.capitalize()
    })