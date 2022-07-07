from django.http import HttpResponse

def homePageView(reqest):
	return HttpResponse('Hello, World')

# Create your views here.
