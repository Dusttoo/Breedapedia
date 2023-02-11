from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class PassResetForm(FlaskForm):
    email = StringField('email', validators=[DataRequired()])

class UpdatePassForm(FlaskForm):
    password = StringField('email', validators=[DataRequired()])
