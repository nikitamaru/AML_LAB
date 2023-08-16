from django.db import models
from django.conf import settings
from django.utils import timezone

search_choices= (
        ('Hotel','Hotel'),
        ('Restaurant','Restaurant'),
        ('Places','Places')
    )
class TripSearch(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    search_title = models.CharField(max_length=200)
    text = models.TextField(blank=True)
    search_mode = models.CharField(max_length=25, choices=search_choices,default="Hotel")
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.search_title
