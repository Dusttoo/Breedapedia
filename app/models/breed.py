from .db import db

class Breed(db.Model):
    __tablename__ = 'breeds'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    dogs = db.relationship('Dog', back_populates='breed')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
