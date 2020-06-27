
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_1.py

## Connecting to the database

## importing 'mysql.connector' as mysql for convenient
import mysql.connector as mysql

## connecting to the database using 'connect()' method
## it takes 3 required parameters 'host', 'user', 'passwd'
db = mysql.connect(
    host = "localhost",
    user = "root",
    passwd = "your-root-password"
)

print(db) # it will print a connection object if everything is fine
print("connection made to MySQL server") # it will print the msg