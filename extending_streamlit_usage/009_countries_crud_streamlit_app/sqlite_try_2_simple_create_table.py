#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/


[file]
python sqlite_try_2_simple_create_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/

"""

import sqlite3
#Connecting to sqlite
conn = sqlite3.connect('data/source.db')

print("\n--- connected to source.db")
print("Connection established")


#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Doping EMPLOYEE table if already exists.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")
#Creating table as per requirement
sql ='''CREATE TABLE EMPLOYEE(
   FIRST_NAME CHAR(20) NOT NULL,
   LAST_NAME CHAR(20),
   AGE INT,
   SEX CHAR(1),
   INCOME FLOAT
)'''


cursor.execute(sql)
print("Table created successfully........")

#Commit your changes in the database
conn.commit()

#Closing the connection
conn.close()






