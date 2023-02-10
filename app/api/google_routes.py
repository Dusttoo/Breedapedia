import os
import pathlib
import datetime
from flask import Blueprint, request
from flask_login import login_user
from app.models import User, db

import google.auth.transport.requests
from google.oauth2 import id_token

from app.forms import GoogleAuthForm
import os

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
client_secrets_file = os.path.join(
    pathlib.Path(__file__).parent, "private/client-secret.json")
google_request = google.auth.transport.requests.Request()

google_routes = Blueprint('google', __name__)

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@google_routes.route('/')
def google():
    return {'success': True}

@google_routes.route('/login', methods=['POST'])
def google_signin():
    form = GoogleAuthForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    id_info = id_token.verify_oauth2_token(
        id_token=form.data['credential'], request=google_request,
        audience=GOOGLE_CLIENT_ID
    )

    user = User.query.filter(User.email == id_info['email']).first()
    if user:
        login_user(user)
        return user.to_dict()
    else:
        user = User(
            username=id_info['given_name'],
            email=id_info['email'],
            password=id_info['sub'],
            first_name=id_info['given_name'],
            last_name=id_info['family_name'],
            profile_img=id_info['picture'],
            registered_at=datetime.datetime.now(),
            updated_at=datetime.datetime.now()
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()