from asyncio import tasks
from django.urls import reverse
from django.shortcuts import render
from django import forms 
from django.http import HttpResponse, HttpResponseRedirect

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    priority = forms.IntegerField(label="priority",min_value=1,max_value=5)
# Create your views here.
def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []
    return render(request,"tasks/index.html",{
        "tasks":request.session["tasks"]
    })
    
def addtask(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request,"tasks/add.html",{
                "from":form
            })
    return render(request,"tasks/add.html",{
        "form":NewTaskForm
    })