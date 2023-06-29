# Create your views here.
import string
import random
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def password_generator(request):
    length = int(request.GET.get("length", 12))
    chars = string.ascii_letters + string.digits + string.punctuation
    password = "".join(random.choice(chars) for _ in range(length))
    print(password)
    return Response({"password": password})
