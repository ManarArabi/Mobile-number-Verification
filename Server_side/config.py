import os

class Config(object):
	SECRET_KEY = os.environ.get('SEKRET_KEY') or 'Now you see me!'
	MYSQL_DATABASE_USER = 'root'
	MYSQL_DATABASE_PASSWORD = 'root'
	MYSQL_DATABASE_DB = 'numbers'
	MYSQL_DATABASE_HOST = 'localhost'
	MYSQL_DATABASE_SOCKET = None
	CORS_HEADERS = 'Content-Type'
