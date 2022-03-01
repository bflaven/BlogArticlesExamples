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
python automate_po_job_dummy_5.py


[source]
https://pythonspot.com/orm-with-sqlalchemy/

[required]
# install
pip install streamlit
pip install watchdog
pip install sqlalchemy

pip install -r requirements.txt


CREATE TABLE student (
	id_filename INTEGER NOT NULL, 
	filename VARCHAR, 
	recipients VARCHAR, 
	mail_object VARCHAR, 
	mail_body VARCHAR, 
    mail_search_tags VARCHAR, 
	PRIMARY KEY (id_filename)
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
URI_SQLITE_DB_SUPPORT_PYTHONSPOT_TWO = conf.URI_SQLITE_DB_SUPPORT_PYTHONSPOT_TWO


# engine = create_engine(f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT}', echo=True)
engine = create_engine(
    f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT_TWO}', echo=True)
Base = declarative_base()

########################################################################


class Mails(Base):
    """"""
    __tablename__ = "user_support_mail_templates"

    id_filename = Column(Integer, primary_key=True)
    filename = Column(String)
    recipients = Column(String)
    mail_object = Column(String)
    mail_body = Column(String)
    mail_search_tags = Column(String)

    #----------------------------------------------------------------------
    def __init__(self, filename, recipients, mail_object, mail_body, mail_search_tags):
        """"""
        self.filename = filename
        self.recipients = recipients
        self.mail_object = mail_object
        self.mail_body = mail_body
        self.mail_search_tags = mail_search_tags
        


# create tables
Base.metadata.create_all(engine)

# DEBUG
# print(f'1. DB DONE :: {URI_SQLITE_DB_SUPPORT_PYTHONSPOT_TWO}')

