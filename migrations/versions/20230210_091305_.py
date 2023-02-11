"""empty message

Revision ID: d2a8fdb428d5
Revises: 0cfe011120be
Create Date: 2023-02-10 09:13:05.938034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd2a8fdb428d5'
down_revision = '0cfe011120be'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('google_user', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'google_user')
    # ### end Alembic commands ###