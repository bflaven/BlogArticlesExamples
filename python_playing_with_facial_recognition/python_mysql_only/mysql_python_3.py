
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_3.py

## Connecting to the database

## importing 'mysql.connector' as mysql for convenient
import mysql.connector as mysql

## connecting to the database using 'connect()' method
## it takes 3 required parameters 'host', 'user', 'passwd'
db = mysql.connect(
    host = "localhost",
    user = "root",
	passwd = "your-root-password",
    database = "node_countries"
)

cursor = db.cursor()

## getting all the tables which are present in 'datacamp' database
cursor.execute("SHOW TABLES")

tables = cursor.fetchall() ## it returns list of tables present in the database

print ("\n\n ---  \/ result --- ")
print ("\n")

## showing all the tables one by one
for table in tables:
    print(table)

print ("\n\n ---  /\ result --- ")


    