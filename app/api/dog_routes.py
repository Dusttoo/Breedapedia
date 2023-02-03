from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Dog, Breed, Color

dog_routes = Blueprint('dogs', __name__)


@dog_routes.route('/')
@login_required
def dogs():
    dogs = Dog.query.all()
    return {'users': [dog.to_dict() for dog in dogs]}


@dog_routes.route('/<int:id>/dogs')
@login_required
def user(id):
    dog = User.query.get(id)
    return user.to_dict()
