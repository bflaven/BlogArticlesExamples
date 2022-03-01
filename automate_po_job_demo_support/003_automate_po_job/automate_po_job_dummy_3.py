#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
# Conda Environment
conda create --name automate_po_job python=3.9.7
conda info --envs
source activate automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/automate_po_job_demo_support/003_automate_po_job/

[file]
python automate_po_job_dummy_3.py


[source]
https://pythonspot.com/orm-with-sqlalchemy/
https://www.freecodecamp.org/news/python-tuple-vs-list-what-is-the-difference/
https://pythonguides.com/python-convert-tuple-to-list/

[required]
# install
pip install streamlit
pip install watchdog
pip install sqlalchemy

pip install -r requirements.txt


CREATE TABLE student (
	id INTEGER NOT NULL, 
	username VARCHAR, 
	firstname VARCHAR, 
	lastname VARCHAR, 
	university VARCHAR, 
	PRIMARY KEY (id)
)





"""

import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# required schema for the bd see automate_po_job_tabledef.py
from automate_po_job_tabledef import *

# required personal configuration
import config_values.values_conf as conf

### 1. DB ###
mail_filenames = conf.mail_filenames
mail_recipients = conf.mail_recipients
mail_objects = conf.mail_objects
mail_bodies = conf.mail_bodies
mail_tags = conf.mail_tags



### 2. VALUES ###
URI_SQLITE_DB_SUPPORT_PYTHONSPOT = conf.URI_SQLITE_DB_SUPPORT_PYTHONSPOT



engine = create_engine(
    f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT}', echo=True)
# engine = create_engine(f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT}', echo=False)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()


        
            
# Create objects
# template = Mails("filename_1", "recipients_1", "mail_object_1",
#                  "mail_body_1", "mail_search_tags_1_a, mail_search_tags_1_b, mail_search_tags_1_c")
# session.add(template)

# template = Mails("filename_2", "recipients_2", "mail_object_2",
#                  "mail_body_2", "mail_search_tags_2_a, mail_search_tags_2_b, mail_search_tags_2_c")
# session.add(template)

# template = Mails("filename_3", "recipients_3", "mail_object_3",
#                  "mail_body_3", "mail_search_tags_3_a, mail_search_tags_3_b, mail_search_tags_3_c")
# session.add(template)


# javascript like
for i in range(len(mail_filenames)):
    # print(i)
    print(f'\n--- row_{i}')
    # print(mail_filenames[i])
    # print(mail_recipients[i])
    # print(mail_objects[i])
    # print(mail_bodies[i])
    # print(mail_tags[i])

    # INSERT V1
    # mail = Mails(f"{mail_filenames[i]}", f"{mail_recipients[i]}", f"{mail_objects[i]}", f"{mail_bodies[i]}", f"{mail_tags[i]}")
    
    # INSERT V2
    mail = Mails(''f'{mail_filenames[i]}', f'{mail_recipients[i]}',
                 f'{mail_objects[i]}', f'{mail_bodies[i]}', f'{mail_tags[i]}')
    
    # COMMIT
    session.add(mail)
    session.commit()
    

print(f'DONE in {URI_SQLITE_DB_SUPPORT_PYTHONSPOT}')

# row = ("filename_4", "recipients_4", "mail_object_4", "mail_body_4", "mail_search_tags_4_a, mail_search_tags_4_b, mail_search_tags_4_c")

# row = ["filename_4", "recipients_4", "mail_object_4",
#        "mail_body_4", "mail_search_tags_4_a, mail_search_tags_4_b, mail_search_tags_4_c"]

# The only difference is in the syntax: you create tuples by surrounding the items inside them with opening and closing round brackets, (), whereas lists are denoted and defined by the presence of opening and closing square brackets,[].

# print(row)
# print(type(row))

# for i, var in enumerate(row):
    # print(i) # 0
    # print(var) #1
    
    # print(var)



  # template = Mails(var)
  # print(template)
  # session.add(template) 

# my_row = list(row)
# print(my_row)
# print(type(my_row))


# value = ((20, 'Ahana'), (21, 'Tom'))
# my_dictionary = dict(value)
# print(my_dictionary)

# template = Mails(my_row)
# session.add(template)

# value = ('s', 't', 'r', 'i', 'n', 'g')
# my_string = ''.join(value)
# print(my_string)


# my_tuple = (101, 102, 103)
# value = list(my_tuple)
# print(value)



# for i, row in enumerate(zip(mail_filenames, mail_recipients, mail_objects, mail_bodies, mail_tags)):
#            print('\n\n')
#            print(f'{i} row :: {row}')



# commit the record the database
# session.commit()

# DEBUG
# print(f'2. ROWS INSERTED IN ::  {URI_SQLITE_DB_SUPPORT_PYTHONSPOT}')
