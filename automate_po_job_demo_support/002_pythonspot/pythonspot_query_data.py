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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/automate_po_job_demo_support/002_pythonspot/


[file]
python pythonspot_query_data.py


[source]
https://pythonspot.com/orm-with-sqlalchemy/

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

# required check schema_pythonspot_tabledef.py
from schema_pythonspot_tabledef import *

# personal configuration
import config_values.values_conf as conf

### 2. VALUES ###
URI_SQLITE_DB_PYTHONSPOT = conf.URI_SQLITE_DB_PYTHONSPOT


# engine = create_engine(f'sqlite:///{URI_SQLITE_DB_PYTHONSPOT}', echo=True)
engine = create_engine(f'sqlite:///{URI_SQLITE_DB_PYTHONSPOT}', echo=False)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()


# CAUTION :: required that the db exists, check URI_SQLITE_DB_PYTHONSPOT and use pythonspot_dummy.py to create it if needed...

# CASE_1
# Create objects
# for student in session.query(Student).order_by(Student.id):
    # print(f'firstname :: {student.firstname} lastname :: {student.lastname}')
    # print(f'{student.firstname} {student.lastname}')


# CASE_2
# Select objects
for student in session.query(Student).filter(Student.firstname == 'Prisca'):
    print(f'firstname :: {student.firstname}')
    print(f'lastname :: {student.lastname}')
    print(f'university :: {student.university}')
    
    
