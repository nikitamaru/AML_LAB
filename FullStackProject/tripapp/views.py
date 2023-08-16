from django.shortcuts import render, get_object_or_404,redirect
from django.contrib.auth.models import User
from .models import TripSearch
from django.utils import timezone
from .forms import SearchForm
from django.contrib.auth import authenticate, login, logout
from .forms import SignUpForm, LoginForm
from django.contrib.auth.decorators import login_required
# Create your views here.
import pandas as pd

def user_signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            user = User.objects.get(email =form.cleaned_data['email'])
            user.is_active = True
            user.first_name = form.cleaned_data['name']
            user.save()
            if email_sent_status:
                return render(request, 'tripapp/signup.html', {'form': form,'message':"You have succsfully signed up!! Try login Now!!"})
            return redirect('login')
    else:
        form = SignUpForm()
    return render(request, 'tripapp/signup.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('login')

@login_required
def index(request):
    if request.method == "POST":
        data = request.POST
        city_name = data["City_name"]
        search = TripSearch.objects.filter().order_by('created_date')
        df = pd.read_csv('df_to_visualize_tourist_places.csv')
        data_df = list(df.T.to_dict().values())
        final_data = []
        for item in data_df:
            kk = str(item["city"])
            print(type(kk),type(str(kk)))
            if city_name.lower() in kk.lower():
                final_data.append(item)
        print(data)
        return render(request, 'tripapp/index.html', {'search':final_data})
    else:
        search = TripSearch.objects.filter().order_by('created_date')
        df = pd.read_csv('df_to_visualize_tourist_places.csv')
        df = df[df['city'] == "New York City"]
        data = list(df.T.to_dict().values())
        print(data)
    return render(request, 'tripapp/index.html', {'search':data})

def restaurants(request):
    return render(request, 'tripapp/restaurants.html')

# def search_detail(request, pk):
#     search = get_object_or_404(TripSearch, pk=pk)
#     return render(request, 'tripapp/search_detail.html', {'search': search})
#
# def search_new(request):
#     if request.method == "POST":
#         form = SearchForm(request.POST)
#         if form.is_valid():
#             search = form.save(commit=False)
#             search.author = request.user
#             search.created_date = timezone.now()
#             search.save()
#             return redirect('search_detail', pk=search.pk)
#     else:
#         form = SearchForm()
#     return render(request, 'tripapp/search_edit.html', {'form': form})
#
# def search_edit(request, pk):
#     search = get_object_or_404(TripSearch, pk=pk)
#     if request.method == "POST":
#         form = SearchForm(request.POST, instance=search)
#         if form.is_valid():
#             search = form.save(commit=False)
#             search.author = request.user
#             search.published_date = timezone.now()
#             search.save()
#             return redirect('search_detail', pk=search.pk)
#     else:
#         form = SearchForm(instance=search)
#     return render(request, 'tripapp/search_edit.html', {'form': form})
