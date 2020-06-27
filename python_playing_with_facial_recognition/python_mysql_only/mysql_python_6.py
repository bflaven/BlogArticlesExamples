
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_6.py

import mysql.connector as mysql

db = mysql.connect(
    host = "localhost",
    user = "root",
   	passwd = "your-root-password",
    database = "node_countries"
)

cursor = db.cursor()

## defining the Query
query = "DELETE FROM node_countries WHERE id = 17"

## executing the query
cursor.execute(query)

## final step to tell the database that we have changed the table data
db.commit()

print("The record was deleted.")