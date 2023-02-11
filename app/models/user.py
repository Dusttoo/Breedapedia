import os
import jwt
from time import time
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .dog import user_dog

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    profile_img = db.Column(db.String(255), nullable=False)
    google_user = db.Column(db.Boolean, nullable=False)
    registered_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    dogs = db.relationship('Dog', back_populates='owners')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)
        db.session.commit()

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def get_reset_token(self, expires=500):
        return jwt.encode(
            {'reset_password': self.username, 
            'exp': time() + expires},
            key=os.getenv('SECRET_KEY'))

    @staticmethod
    def verify_reset_token(token):
        try:
            username = jwt.decode(token, key=os.getenv(
                'SECRET_KEY'), algorithms=['HS256'])['reset_password']
        except Exception as e:
            print(e)
            return
        return User.query.filter_by(username=username).first()




    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'profile_img': self.profile_img,
            'google_user': self.google_user,
            'registered_at': self.registered_at,
            'updated_at': self.updated_at,
            'dogs': [dog.to_dict() for dog in self.dogs]
        }
