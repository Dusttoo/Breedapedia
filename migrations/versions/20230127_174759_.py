"""empty message

Revision ID: 2ff479367415
Revises: ffdc0a98111c
Create Date: 2023-01-27 17:47:59.903660

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2ff479367415'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('first_name', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('last_name', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('profile_img', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('registered_at', sa.DateTime(), nullable=False))
    op.add_column('users', sa.Column('updated_at', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'updated_at')
    op.drop_column('users', 'registered_at')
    op.drop_column('users', 'profile_img')
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'first_name')
    # ### end Alembic commands ###
