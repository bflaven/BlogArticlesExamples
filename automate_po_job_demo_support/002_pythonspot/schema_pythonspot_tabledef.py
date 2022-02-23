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
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/002_pythonspot/


[file]
python pythonspot_tabledef.py


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

from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

# personal configuration
import config_values.values_conf as conf

### 2. VALUES ###
URI_SQLITE_DB_PYTHONSPOT = conf.URI_SQLITE_DB_PYTHONSPOT


# engine = create_engine(f'sqlite:///{URI_SQLITE_DB_PYTHONSPOT}', echo=True)
engine = create_engine(f'sqlite:///{URI_SQLITE_DB_PYTHONSPOT}', echo=False)
Base = declarative_base()

########################################################################


class Student(Base):
    """"""
    __tablename__ = "student"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    firstname = Column(String)
    lastname = Column(String)
    university = Column(String)

    #----------------------------------------------------------------------
    def __init__(self, username, firstname, lastname, university):
        """"""
        self.username = username
        self.firstname = firstname
        self.lastname = lastname
        self.university = university


# create tables
Base.metadata.create_all(engine)

# DEBUG
# print(f'1. DB DONE :: {URI_SQLITE_DB_PYTHONSPOT}')

