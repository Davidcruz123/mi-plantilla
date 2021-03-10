# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import Column, ForeignKey, Integer, String,Date

# db=SQLAlchemy() 

# class LogIn(db.Model):
#     __tablename__ = 'log_In'
#     id = Column(Integer, primary_key=True,nullable=False)
#     name = Column(String(250),nullable=False)
#     last_name = Column(String(250),nullable=False)
#     user_name = Column(String(250),unique=True,nullable=False)
#     email=Column(String(250),unique=True,nullable=False)
#     password=Column(String(100),nullable=False)

#     def __repr__(self):
#         return '<Username %r>' %self.user_name
#     def serialize_users(self):
#         return{"id":self.id,
#         "name":self.name,
#             "last_name":self.last_name,
#             "user_name":self.user_name,
#             "email":self.email
#             # do not serialize the password
#         }




# class Characters(db.Model):
#     __tablename__ = 'characters'
#     id = Column(Integer, primary_key=True)
#     description = Column(String(550))
#     hair_color = Column(String(30))
#     skin_color = Column(String(30))
#     eye_color = Column(String(30))
#     gender = Column(String(30))
#     name = Column(String(30))
#     planet_origin = Column(String(30))
#     picture_url = Column(String(200))
#     height=Column(Integer)
#     mass=Column(Integer)
#     birth_year=Column(String(20))
#     data_type=Column(String(30))

#     def __repr__(self):
#         return 'Personaje %r' %self.name                   #esta funcion es predeterminada para que devuelva un string

#     def serialize_people(self):
#         return{                                           #al usar esos corchetes, le estamos diciendo, ud me va a devolver un diccionario..
#             "id":self.id,                                   # esto es para extraer la info de la db
#             "description":self.description,
#             "hair_color":self.hair_color,
#             "skin_color":self.skin_color,
#             "eye_color":self.eye_color,
#            "gender":self.gender,
#            "name":self.name,
#            "planet_origin":self.planet_origin,
#            "picture_url":self.picture_url,
#            "height":self.height,
#            "mass":self.mass,
#            "birth_year":self.birth_year,
#            "data_type":self.data_type
#         }


# class Planets(db.Model):
#     __tablename__ = 'planets'
#     id = Column(Integer, primary_key=True)
#     description = Column(String(550))
#     climate = Column(String(30))
#     gravity = Column(String(30))
#     name = Column(String(30))
#     terrain = Column(String(30))
#     picture_url = Column(String(200))
#     diameter=Column(Integer)
#     rotation_period=Column(Integer)
#     orbital_period=Column(Integer)
#     population=Column(String(20))
#     surface_water=Column(Integer)
#     data_type=Column(String(30))

#     def __repr__(self):
#         return 'Planeta %r' %self.name 
#     def serialize_planets(self):
#         return{
#             "id":self.id,
#             "description":self.description,
#             "climate":self.climate,
#             "gravity":self.gravity,
#             "name":self.name,
#            "terrain":self.terrain,
#            "picture_url":self.picture_url,
#            "diameter":self.diameter,
#            "rotation_period":self.rotation_period,
#            "orbital_period":self.orbital_period,
#            "population":self.population,
#            "surface_water":self.surface_water,
#            "data_type":self.data_type
#         }




# class Favorites(db.Model):
#     __tablename__ = 'favorites'
#     id = Column(Integer, primary_key=True)
#     data_type = Column(String(250))
#     planets_id = Column(Integer, ForeignKey('planets.id'),nullable=True)
#     characters_id = Column(Integer, ForeignKey('characters.id'),nullable=True)
#     user_id = Column(Integer, ForeignKey('log_In.id'),nullable=False)
 
#     planets = db.relationship(Planets, foreign_keys=planets_id)
#     characters = db.relationship(Characters, foreign_keys=characters_id)
#     user = db.relationship(LogIn, foreign_keys=user_id)

#     def __repr__(self):
#         return 'Favorite %r' %self.id                   #esta funcion es predeterminada para que devuelva un string

#     def serialize_favorites(self):
#         return{
#             "id":self.id,
#             "data_type":self.data_type,
#             "planet_id":self.planets_id,
#             "characters_id":self.characters_id,
#             "user_id":self.user_id
#         }



from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    code = db.Column(db.Integer)

    Cedula = db.Column(db.String(120), unique=True)
    Edad = db.Column(db.Integer)
    Fecha_Nacimiento = db.Column(db.String(120)) 
    Telefono_Usuario = db.Column(db.String(120))
    Nombre_Cuidador = db.Column(db.String(120))
    Telefono_Cuidador = db.Column(db.String(120))
    Peso_Usuario = db.Column(db.String(120))
    Altura_Usuario = db.Column(db.String(120))
    Profesion = db.Column(db.String(120))
    Medicamentos_Actuales = db.Column(db.String(240))
    Enfermedades = db.Column(db.String(120))
    Alergias_Medicamentosas_Alimenticias =  db.Column(db.String(240))
    

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "email": self.email,
            "code":self.code,
            "Cedula":self.Cedula,
            "Edad":self.Edad,
            "Fecha Nacimiento":self.Fecha_Nacimiento,
            "Telefono Usuario ":self.Telefono_Usuario,
            "Nombre Cuidador ":self.Nombre_Cuidador,
            "Telefono Cuidador ":self.Telefono_Cuidador,
            "Peso Usuario ":self.Peso_Usuario,
            "Altura Usuario":self.Altura_Usuario,
            "Profesion":self.Profesion,
            "Medicamentos Actuales":self.Medicamentos_Actuales,
            "Enfermedades":self.Enfermedades,
            "Alergias Medicamentosas/Alimenticias":self.Alergias_Medicamentosas_Alimenticias
            # do not serialize the password, its a security breach
        }
