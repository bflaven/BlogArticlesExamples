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
python 002_automate_po_job_streamlit_sqlalchemy_example_database.py


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

### 1. VALUES ###
URI_SQLITE_DB = conf.URI_SQLITE_DB


Base = declarative_base()

e = create_engine(f'sqlite:///{URI_SQLITE_DB}')
Session = sessionmaker(bind=e)
session = Session()


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


    session.add(Mails(
        filename="filename_A",
        recipients="recipients_A",
        mail_object="mail_object_A",
        mail_body="mail_body_A",
        mail_search_tags="mail_search_tags_A"
        ))
    session.commit()

    session.add(Mails(
        filename="filename_B",
        recipients="recipients_B",
        mail_object="mail_object_B",
        mail_body="mail_body_B",
        mail_search_tags="mail_search_tags_B"
    ))
    session.commit()
    
    # DEBUG
    print(f'2. ROWS INSERTED IN ::  {URI_SQLITE_DB}')

