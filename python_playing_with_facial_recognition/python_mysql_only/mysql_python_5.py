
# cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_mysql_only
# python mysql_python_5.py

import mysql.connector

mydb = mysql.connector.connect(
  host = "localhost",
  user = "root",
  passwd = "your-root-password",
  database = "node_countries"
)

mycursor = mydb.cursor()

sql = "INSERT INTO node_countries (id, name, tld, cca2, capital, callingCode) VALUES (%s, %s, %s, %s, %s, %s)"
val = [
  (0,'Virgin Islands', '.vg', 'VG', 'Road Town', 284),
  (0,'Virgin Islands', '.vg', 'VG', 'Road Town', 284)
]

"""
sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
val = [
  ('Peter', 'Lowstreet 4'),
  ('Amy', 'Apple st 652'),
  ('Hannah', 'Mountain 21'),
  ('Michael', 'Valley 345'),
  ('Sandy', 'Ocean blvd 2'),
  ('Betty', 'Green Grass 1'),
  ('Richard', 'Sky st 331'),
  ('Susan', 'One way 98'),
  ('Vicky', 'Yellow Garden 2'),
  ('Ben', 'Park Lane 38'),
  ('William', 'Central st 954'),
  ('Chuck', 'Main Road 989'),
  ('Viola', 'Sideway 1633')
]
"""


mycursor.executemany(sql, val)

mydb.commit()

print(mycursor.rowcount, "was inserted.")


    