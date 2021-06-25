#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/002_wamp_mysql_python/

[file]
python 002_wamp_mysql_python.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

# more on python and mysql
https://www.datacamp.com/community/tutorials/mysql-python

SELECT * FROM wp_posts WHERE wp_posts.post_type="post" AND wp_posts.post_status="publish" ORDER BY wp_posts.ID DESC LIMIT 33;



"""


import mysql.connector as mysql


db = mysql.connect(
    host="localhost",
    user="root",
    passwd="rooty",
    database="wp_install_local"
)

cursor = db.cursor()

## defining the Query
query = "SELECT post_title FROM wp_posts WHERE wp_posts.post_type='post' AND wp_posts.post_status='publish' ORDER BY wp_posts.ID DESC LIMIT 1"

# query = "SELECT post_content FROM wp_posts WHERE wp_posts.post_type='post' AND wp_posts.post_status='publish' ORDER BY wp_posts.ID DESC"


## getting records from the table
cursor.execute(query)

## fetching all records from the 'cursor' object
records = cursor.fetchall()

## Showing the data
for record in records:
    print("---\n")
    print(record)
