#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/002_wamp_mysql_python/

[file]
python 001_wamp_mysql_python.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

# more on python and mysql
https://www.datacamp.com/community/tutorials/mysql-python



"""


import mysql.connector as mysql

db = mysql.connect(
    host = "localhost",
    user = "root",
    passwd = "rooty"
)

cursor = db.cursor()

## executing the statement using 'execute()' method
cursor.execute("SHOW DATABASES")

## 'fetchall()' method fetches all the rows from the last executed statement
databases = cursor.fetchall() ## it returns a list of all databases present

## printing the list of databases
print(databases)

## showing one by one database
for database in databases:
    print(database)

    
