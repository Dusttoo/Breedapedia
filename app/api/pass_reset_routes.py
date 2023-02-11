import os
import app
from app.forms import PassResetForm, UpdatePassForm
from app.models import db, User
from app.utils.validation import validation_errors_to_error_messages
from flask import request, redirect, url_for, render_template, Blueprint
import flask_login
from flask_mail import Message

password_routes = Blueprint('password', __name__)

def send_email(user):

    token = user.get_reset_token()
    url = url_for('password.reset_verified',
                  user=user, token=token, _external=True)
    msg = Message()
    msg.subject = "Breedapedia Password Reset"
    msg.sender = os.getenv('MAIL_USERNAME')
    msg.recipients = [user.email]
    msg.html = """
        <p >
            To reset your password
            <a href = "%s" >
            click here
            </a > .
        </p >
    """ % (url)

    app.mail.send(msg)

@password_routes.route('/', methods=['POST'])
def reset():
    form = PassResetForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    email = form.data['email']
    user = User.query.filter_by(email=email).first()
    if user:
        send_email(user)
    return {"status": "If a user with this email exists, a password reset email will be sent"}





@password_routes.route('/<token>', methods=['POST'])
def reset_verified(token):

    user = User.verify_reset_token(token)
    if not user:
        return {"errors": "User not found"}

    form = UpdatePassForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    password = form.data['password']

    if password:
        user.set_password(password)

    return user.to_dict()