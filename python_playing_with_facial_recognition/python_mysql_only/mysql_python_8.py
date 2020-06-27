
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_8.py

import mysql.connector as mysql

db = mysql.connect(
    host = "localhost",
    user = "root",
   	passwd = "your-root-password",
    database = "node_countries"
)

cursor = db.cursor()

## defining the Query
# INSERT INTO node_countries VALUES (NULL, 'Tunisia', '.tn', 'TN', 'Tunis', '216');
# query = "UPDATE node_countries SET name = 'Tunisiaaaa' WHERE id = 19"
query = "UPDATE node_countries SET name = 'Tunisia' WHERE id = 19"

## executing the query
cursor.execute(query)

## final step to tell the database that we have changed the table data
db.commit()

print("The record has been updated.")