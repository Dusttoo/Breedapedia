import datetime
from app.models import db, Breed


# Adds a demo user, you can add other users here if you want
def seed_breeds():
    breeds = [
        Breed(name='American Bully'),
        Breed(name='French Bulldog')
        ]

    db.session.add_all(breeds)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_breeds():
    db.session.execute('TRUNCATE breeds RESTART IDENTITY CASCADE;')
    db.session.commit()
