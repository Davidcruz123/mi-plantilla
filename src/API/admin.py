from flask_admin import Admin

from flask_admin.contrib.sqla import ModelView
from models import db,User

def setup_admin(app):
    app.config['SECRET_KEY']='mysecret'
    admin=Admin(app)

    admin.add_view(ModelView(User,db.session))
   