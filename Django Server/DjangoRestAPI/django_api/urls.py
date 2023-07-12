from django_api.views import UserViewSet
from rest_framework.routers import DefaultRouter
from django_api import views

router = DefaultRouter()
router.register(r'users',views.UserViewSet, basename='users')
urlpatterns = router.urls