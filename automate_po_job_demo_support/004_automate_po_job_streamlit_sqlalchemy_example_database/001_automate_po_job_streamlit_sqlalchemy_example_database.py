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
python 001_automate_po_job_streamlit_sqlalchemy_example_database.py


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

import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import insert



URI_SQLITE_DB = "../sqlalchemy_data/km_user_support_3.sqlite3"

Base = declarative_base()

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
print(f'DB DONE :: {URI_SQLITE_DB}')






