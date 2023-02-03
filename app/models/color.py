from .db import db


class Color(db.Model):
    __tablename__ = 'colors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    dogs = db.relationship('Dog', back_populates='colors')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
