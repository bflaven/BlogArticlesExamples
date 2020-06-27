
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_4.py

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

## defining the Query

# OK
# query = "INSERT INTO node_countries (id, name, tld, cca2, capital, callingCode)  VALUES (%s, %s, %s, %s, %s, %s)"
# values = (15,"Virgin Islands", ".vg", "VG", "Road Town", 284)

# OK
# query = "INSERT INTO node_countries (id, name, tld, cca2, capital, callingCode)  VALUES (%s, %s, %s, %s, %s, %s)"
# values = (0,"Zambia", ".zm", "ZM", "Lusaka", 260)


"""
INSERT INTO node_countries VALUES (NULL, 'Virgin Islands (British)', '.vg', 'VG', 'Road Town', '1-284');
INSERT INTO node_countries VALUES (NULL, 'Virgin Islands (USA)', '.vi', 'VI', 'Charlotte Amalie', '1-340');
INSERT INTO node_countries VALUES (NULL, 'Wallis and Futuna Islands', '.wf', 'WF', 'Mata-Utu', '681');
INSERT INTO node_countries VALUES (NULL, 'Western Sahara', '.eh', 'EH', 'El Aaiun', '');
INSERT INTO node_countries VALUES (NULL, 'Yemen', '.ye', 'YE', 'San\'a', '967');
INSERT INTO node_countries VALUES (NULL, 'Zambia', '.zm', 'ZM', 'Lusaka', '260');
INSERT INTO node_countries VALUES (NULL, 'Zimbabwe', '.zw', 'ZW', 'Harare', '263');
"""



## executing the query with values
cursor.execute(query, values)

## to make final output we have to run the 'commit()' method of the database object
db.commit()

print ("\n\n ---  \/ result --- ")
print ("\n")

print(cursor.rowcount, "record inserted")

print ("\n\n ---  /\ result --- ")
    