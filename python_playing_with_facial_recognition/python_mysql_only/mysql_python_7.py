
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_7.py

import mysql.connector as mysql

db = mysql.connect(
    host = "localhost",
    user = "root",
    passwd = "your-root-password",
    database = "node_countries"
)

cursor = db.cursor()

## defining the Query
query = "SELECT * FROM node_countries"

## getting records from the table
cursor.execute(query)

## fetching all records from the 'cursor' object
records = cursor.fetchall()

## Showing the data
for record in records:
    print(record)