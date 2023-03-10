from flask.cli import AppGroup
from .users import seed_users, undo_users
from .breeds import seed_breeds, undo_breeds
from .colors import seed_colors, undo_colors
from .dogs import seed_dogs, undo_dogs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_breeds()
    seed_colors()
    seed_dogs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_dogs()
    undo_colors()
    undo_breeds()
    undo_users()
    # Add other undo functions here
