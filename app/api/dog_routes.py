from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Dog, Breed, Color

dog_routes = Blueprint('dogs', __name__)


@dog_routes.route('/')
def dogs():
    dogs = Dog.query.all()
    return {'dogs': [dog.to_dict() for dog in dogs]}


@dog_routes.route('/<int:id>')
def user(id):
    dog = Dog.query.get(id)
    print(f'\n\n\n{dog}\n\n\n')

    return dog.to_dict()
