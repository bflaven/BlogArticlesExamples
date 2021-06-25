#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/002_wamp_mysql_python/

[file]
streamlit run 003_wamp_mysql_python.py



# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

# more on python and mysql
https://www.datacamp.com/community/tutorials/mysql-python

SELECT * FROM wp_posts WHERE wp_posts.post_type="post" AND wp_posts.post_status="publish" ORDER BY wp_posts.ID DESC LIMIT 33;



"""


import spacy_streamlit
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
    # print(record)
    
    
# streamlit_app.py
models = ["en_core_web_sm", "en_core_web_md"]
default_text = record
# default_text = "I want to place an order for a pizza."
spacy_streamlit.visualize(models, record)
