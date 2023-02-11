import datetime
from app.models import db, Dog


# Adds a demo user, you can add other users here if you want
def seed_dogs():
    dogs = [
        Dog(
            owner_id=1,
            reg_name='ABC Test Sire',
            reg_number='A123456',
            call_name='Test',
            birth_date=datetime.datetime.now(),
            breed_id=1,
            weight='56lbs',
            height='18in',
            color_id=4,
            gender='Male',
            titles='Ch',
            img_url='https://images.pexels.com/photos/2208743/pexels-photo-2208743.jpeg'
        ),
        Dog(
            owner_id=1,
            reg_name='ABC Test Dam',
            reg_number='B123456',
            call_name='Test',
            birth_date=datetime.datetime.now(),
            breed_id=1,
            weight='56lbs',
            height='18in',
            color_id=3,
            gender='Female',
            titles='Ch',
            img_url='https://images.pexels.com/photos/103536/pexels-photo-103536.jpeg'
        ),
        Dog(
            owner_id=1,
            sire_id=1,
            dam_id=2,
            reg_name='ABC Test Pup',
            reg_number='C123456',
            call_name='Test',
            birth_date=datetime.datetime.now(),
            breed_id=1,
            weight='56lbs',
            height='18in',
            color_id=1,
            gender='Male',
            titles='Ch',
            img_url='https://images.pexels.com/photos/11556918/pexels-photo-11556918.jpeg'
        ),
        Dog(
            owner_id=2,
            reg_name='ABC Jaugernat',
            reg_number='C123457',
            call_name='Test',
            birth_date=datetime.datetime.now(),
            breed_id=1,
            weight='56lbs',
            height='18in',
            color_id=1,
            gender='Female',
            titles='Ch',
            img_url='https://images.pexels.com/photos/11556918/pexels-photo-11556918.jpeg'
        ),
        Dog(
            owner_id=2,
            sire_id=3,
            dam_id=4,
            reg_name='ABC Tally',
            reg_number='C123458',
            call_name='Test',
            birth_date=datetime.datetime.now(),
            breed_id=1,
            weight='56lbs',
            height='18in',
            color_id=1,
            gender='Male',
            titles='Ch',
            img_url='https://images.pexels.com/photos/11556918/pexels-photo-11556918.jpeg'
        ),
        ]

    db.session.add_all(dogs)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_dogs():
    db.session.execute('TRUNCATE dogs RESTART IDENTITY CASCADE;')
    db.session.commit()
