#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /path-to/your/directory/

[file]
python python_mysql_1.py

"""


import mysql.connector as mysql

# Insert in database
db = mysql.connect(
    # host="127.0.0.1",
    host="localhost",
    user = "root",
    passwd="put-your-mysql-password",
    database="yolo_images"
)


# -- MySQL ROOT Password local
# root: A*lmT8DePan08Wdiqg
# 127.0.0.1

cursor = db.cursor()

## defining the Query
query = "INSERT INTO yolo_advanced_images (id, file, keywords) VALUES (NULL, 'image2.jpg', 'keyword_1_img_2')"



## executing the query
cursor.execute(query)

## final step to tell the database that we have changed the table data
db.commit()

print("The record has been made.")
