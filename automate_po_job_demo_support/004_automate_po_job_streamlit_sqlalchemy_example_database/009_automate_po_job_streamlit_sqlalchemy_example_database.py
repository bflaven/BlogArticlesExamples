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
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/004_automate_po_job_streamlit_sqlalchemy_example_database/


[file]
python 009_automate_po_job_streamlit_sqlalchemy_example_database.py


[source]
No source

[required]
# install
pip install streamlit
pip install watchdog
pip install sqlalchemy

pip install -r requirements.txt


PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user_support_mail_templates (
    id_filename INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    filename VARCHAR,
    recipients VARCHAR,
    mail_object TEXT UNIQUE,
    mail_body TEXT,
    mail_search_tags VARCHAR
);
COMMIT;




"""

from datetime import date
from datetime import datetime as dt
import pandas as pd
import sqlite3
import sqlalchemy
from sqlalchemy import create_engine, Column, String, Integer, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.orm.properties import ColumnProperty
from sqlalchemy.orm.query import Query
from sqlalchemy import MetaData

# personal configuration
import config_values.values_conf as conf

### 1. DB ###
mail_filenames = conf.mail_filenames
mail_recipients = conf.mail_recipients
mail_objects = conf.mail_objects
mail_bodies = conf.mail_bodies
mail_tags = conf.mail_tags


### 2. VALUES ###
URI_SQLITE_DB = conf.URI_SQLITE_DB


Base = declarative_base()

# create a session
e = create_engine(f'sqlite:///{URI_SQLITE_DB}')
Session = sessionmaker(bind=e)
session = Session()


def main():
    class Mails(Base):

        __tablename__ = "user_support_mail_templates"

        id_filename = Column(Integer, primary_key=True)
        filename = Column(String)
        recipients = Column(String)
        mail_object = Column(String)
        mail_body = Column(String)
        mail_search_tags = Column(String)


    if __name__ == "__main__":
        engine = create_engine(f'sqlite:///{URI_SQLITE_DB}')
        Base.metadata.create_all(engine)

    # DEBUG
    print(f'1. DB DONE :: {URI_SQLITE_DB}')
        
    # javascript like
    for i in range(len(mail_filenames)):
        # print(i)
        # print(f'\n--- row_{i}')
        # print(mail_filenames[i])
        # print(mail_recipients[i])
        # print(mail_objects[i])
        # print(mail_bodies[i])
        # print(mail_tags[i])
        # DEBUG
        # print("\n")
        print(f'ROW {i} INSERTED IN :: {URI_SQLITE_DB}')
   
        query = f'INSERT INTO user_support_mail_templates (id_filename, filename, recipients, mail_object, mail_body, mail_search_tags) VALUES ({i}, \'{mail_filenames[i]}\', \'{mail_recipients[i]}\', \'{mail_objects[i]}\', \'{mail_bodies[i]}\', \'{mail_tags[i]}\');'
        
        # DEBUG
        # print(query)
        

        session.execute(query)
        session.commit()
        
        



if __name__ == "__main__":
    main()
    
    

