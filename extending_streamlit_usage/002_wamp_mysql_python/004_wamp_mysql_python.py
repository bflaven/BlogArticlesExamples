#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/002_wamp_mysql_python/

[file]
python 004_wamp_mysql_python.py



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
import spacy

nlp = spacy.load("en_core_web_sm")


def debug_text_enumerate(doc):
    for i, token in enumerate(doc):
        # DEBUG
        print(i, token, token.pos_, token.dep_)
        # print(i, token.text, token.pos_, token.dep_)
        # print(i, token.text, token.ent_type)
        # print(i, token.text, token.ent_type_)
        # print(i, token.text, token.ent_type, token.ent_type_)
        # print(i, token.text, token.head)

        # print(doc[i].text)
        # print(doc[i])
        # print(i, doc[i], doc[i].pos_, doc[i].dep_)
        # and so on...


def debug_text_loop(doc):
    for token in doc:
        # print(token, token.pos_, token.dep_)
        # print(token.text, token.pos_, token.dep_)
        # print(token.text, token.ent_type)
        # print(token.text, token.ent_type_)
        # print(token.text, token.ent_type, token.ent_type_)
        print(token.text, token.head)

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
    

# token = token.text

doc = nlp(str(record))


# print("\n--- debug with debug_text_enumerate ")
# print(debug_text_enumerate(doc))

print("\n--- debug with debug_text_loop ")
print(debug_text_loop(doc)) 
