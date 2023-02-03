import datetime
from app.models import db, Color


# Adds a demo user, you can add other users here if you want
def seed_colors():
    colors = [
        Color(name='Black'),
        Color(name='White'),
        Color(name='Blue')
        ]

    db.session.add_all(colors)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
