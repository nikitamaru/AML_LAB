from django import template

register = template.Library()

@register.filter(name='rating_stars')
def rating_stars(rating):
    full_stars = int(rating)
    half_star = rating - full_stars
    empty_stars = 5 - full_stars - (1 if half_star > 0 else 0)

    stars_html = ''
    for i in range(full_stars):
        stars_html += '<i class="fa fa-star rating-color"></i>'
    if half_star > 0:
        stars_html += '<i class="fa fa-star-half-alt rating-color"></i>'
    for i in range(empty_stars):
        stars_html += '<i class="fa fa-star"></i>'

    return stars_html
# <i class="fa fa-star rating-color"></i>
# <i class="fa fa-star rating-color"></i>
# <i class="fa fa-star rating-color"></i>
# <i class="fa fa-star"></i>
# <i class="fa fa-star"></i>
