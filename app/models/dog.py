from .db import db

user_dog = db.Table('user_dog',
                    db.Column('user_id', db.Integer,
                              db.ForeignKey('users.id')),
                    db.Column('dog_id', db.Integer, db.ForeignKey('dogs.id'))
                    )

class Dog(db.Model):
    __tablename__ = 'dogs'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    sire_id = db.Column(db.Integer, db.ForeignKey('dogs.id'))
    dam_id = db.Column(db.Integer, db.ForeignKey('dogs.id'))
    reg_name = db.Column(db.String(255), nullable=False, unique=True)
    reg_number = db.Column(db.String(255), unique=True)
    call_name = db.Column(db.String(255), nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    death_date = db.Column(db.DateTime)
    breed_id = db.Column(db.Integer, db.ForeignKey('breeds.id'))
    weight = db.Column(db.String(50))
    height = db.Column(db.String(50))
    head_size = db.Column(db.Integer)
    color_id = db.Column(db.Integer, db.ForeignKey('colors.id'))
    gender = db.Column(db.String(6), nullable=False)
    titles = db.Column(db.String(255))


    sire = db.relationship('Dog', remote_side=[id], foreign_keys=[sire_id])
    dam = db.relationship('Dog', remote_side=[id], foreign_keys=[dam_id])
    owners = db.relationship('User', secondary=user_dog, back_populates='dogs')
    colors = db.relationship('Color', back_populates='dogs')
    breed = db.relationship('Breed', back_populates='dogs')

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'owners': self.owners,
            'sire_id': self.sire_id,
            'sire': self.sire,
            'dam_id': self.dam_id,
            'dam': self.dam,
            'reg_name': self.reg_name,
            'reg_number': self.reg_number,
            'call_name': self.call_name,
            'birthdate': self.birth_date,
            'deathdate': self.death_date,
            'breed_id': self.breed_id,
            'breed': self.breed,
            'weight': self.weight,
            'height': self.height,
            'head_size': self.head_size,
            'color_id': self.color_id,
            'color': self.colors,
            'gender': self.gender,
            'titles': self.titles
        }
