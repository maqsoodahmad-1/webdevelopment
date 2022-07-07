from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("maqsood", views.maqsood, name="maqsood"),
    path('shabnam', views.shabnam, name="shabnam"),
    path("<str:name>", views.greet, name="greet")
]
