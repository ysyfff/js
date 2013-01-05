from django.http import HttpResponse
from django.template import Context, loader, RequestContext
from django.shortcuts import render_to_response, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import datetime
import time
from django.utils import timezone

def home(request):
    return render_to_response('sq/home.html',
        locals(),
        context_instance=RequestContext(request)
    )