import datetime
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', 
        email='demo@aa.io', 
        password='password',
        first_name = 'Demo',
        last_name = 'Smith',
        profile_img='https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        google_user=False,
        registered_at= datetime.datetime.now(),
        updated_at= datetime.datetime.now())

    demo2 = User(
        username='Dusty',
        email='dusty.mumphrey@gmail.com',
        password='password',
        first_name='Dusty',
        last_name='Mumphrey',
        profile_img='https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        google_user=True,
        registered_at=datetime.datetime.now(),
        updated_at=datetime.datetime.now())


    db.session.add(demo)
    db.session.add(demo2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
