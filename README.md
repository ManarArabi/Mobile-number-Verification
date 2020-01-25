# Mobile-number-Verification
This website is made using flask as backend framework, angular 2+ as frontend framework and [numverify api](https://numverify.com/).

## Demo

![demo](https://github.com/ManarArabi/Mobile-number-Verification/blob/master/demo.gif)

## Server side:

### MYSQL

1. Download [mysql server](https://dev.mysql.com/downloads/mysql/).
2. prepare mysql database.
```
CREATE DATABASE numbers;
USE numbers;
CREATE TABLE numbers_status(Id INT NOT NULL AUTO_INCREMENT, number VARCHAR(30) NOT NULL UNIQUE, valid BOOL NOT NULL, PRIMARY KEY(Id));
```
Note: if you decide to change database name, table name or columns name, remember to change them in the code.

### FLASK

#### Prerequisites:

1. Installing [python](https://www.python.org/downloads/release/python-360/).
2. Installing virtual environments using pip. 

> pip install virtualenv


#### Steps:

1. After cloning the repo, open cmd in /Server_side.
2. Enable virtual environment by executing:

> virtualenv venv

> venv\Scripts\activate

3. Installing (flask, flask-cors, flask-mysql, flask-mysqldb).

> pip install flask flask_cors flask_mysql flask_mysqldb

4. Now server side is ready to run.

> flask run

## Client side

### Prerequisites:

1. [Node.js & NPM](https://nodejs.org/en/download/).
2. Angular cli.
 > npm install -g @angular/cli
 
### Steps:

1. Open cmd in ./Client_side.
> npm install

> ng serve --open

