from django import forms

from .models import TripSearch
from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
User = get_user_model()
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate


class SignUpForm(UserCreationForm):
    name = forms.CharField(max_length=30, required=True)
    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'User Name'
        self.fields['username'].widget.attrs['required'] = True
        self.fields['name'].widget.attrs['placeholder'] = 'Name'
        self.fields['password1'].widget.attrs['placeholder'] = 'Password'
        self.fields['password2'].widget.attrs['placeholder'] = 'Confirm Password'
        # for fieldname in ['username', 'password1', 'password2']:
        #     self.fields[fieldname].help_text = None
    class Meta:
        model = User
        fields = ['username', 'name','password1', 'password2']

class CustomAuthenticationForm(AuthenticationForm):
    remember_me = forms.BooleanField(required=False, widget=forms.CheckboxInput())
    def __init__(self, *args, **kwargs):
        super(CustomAuthenticationForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'UserName'
        self.fields['password'].widget.attrs['placeholder'] = 'Password'

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            self.user_cache = authenticate(username=username,
                                           password=password)
            if self.user_cache is None:
                raise forms.ValidationError(
                    self.error_messages['invalid_login'],
                    code='invalid_login',
                    params={'username': self.username_field.verbose_name},
                )
            else:
                if not self.cleaned_data.get('remember_me'):
                    self.request.session.set_expiry(0)
                self.confirm_login_allowed(self.user_cache)
        return self.cleaned_data

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

class SearchForm(forms.ModelForm):
    class Meta:
        model = TripSearch
        fields = ('search_title', 'text','search_mode')
