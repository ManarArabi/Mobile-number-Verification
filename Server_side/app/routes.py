from app import app, mysql
from flask import request, jsonify, json
from flask_cors import cross_origin
import json

@app.route('/numbers/add', methods=['POST'])
@cross_origin()
def add():
	connection = None
	cursor = None
	try:
		connection = mysql.connect()
		cursor = connection.cursor()
		data = json.loads(request.get_data())

		_num = data['number']
		_valid = data['valid']

		data = (_num, _valid)
		query = "INSERT INTO numbers_status (number, valid) VALUES (%s, %s)"
		cursor.execute(query, data)
		connection.commit()

		result = {
			'number': _num,
			'valid': _valid
		}

		return jsonify({'result': result})
	except Exception as e:
		print(e)
	finally:
		cursor.close()
		connection.close()

@app.route('/numbers', methods=['GET'])
def numbers():
	connection = None
	cursor = None
	try:
		connection = mysql.connect()
		cursor = connection.cursor()
		query = "SELECT * FROM numbers_status"
		cursor.execute(query)
		res = cursor.fetchall()
		return jsonify(res)
	except Exception as e:
		print(e)
	finally:
		cursor.close()
		connection.close()

