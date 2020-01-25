from flask import Flask
from config import Config
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)

app.config.from_object(Config)

mysql = MySQL() 

mysql.init_app(app)

CORS(app)

from app import routes