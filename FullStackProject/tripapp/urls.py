from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from .forms import CustomAuthenticationForm

urlpatterns = [
    # path('login/', views.user_login, name='login'),
    path('login/',auth_views.LoginView.as_view(authentication_form=CustomAuthenticationForm,template_name='tripapp/login.html',redirect_authenticated_user=True), name='login'),

    path('signup/', views.user_signup, name='signup'),
    path('logout/', views.user_logout, name='logout'),
    path('', views.index, name='index'),
    path('restaurants/', views.restaurants, name='restaurants'),

]
