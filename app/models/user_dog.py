from .db import db

user_dog = db.Table('user_dog',
                    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
                    db.Column('dog_id', db.Integer, db.ForeignKey('dogs.id'))
                    )
