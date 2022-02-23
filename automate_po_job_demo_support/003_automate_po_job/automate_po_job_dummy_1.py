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
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/003_automate_po_job/

[file]
python automate_po_job_dummy_1.py


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
# required schema for the bd see automate_po_job_tabledef.py
from automate_po_job_tabledef import *

# required personal configuration
import config_values.values_conf as conf

### 2. VALUES ###
URI_SQLITE_DB_SUPPORT_PYTHONSPOT = conf.URI_SQLITE_DB_SUPPORT_PYTHONSPOT


engine = create_engine(
    f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT}', echo=True)
# engine = create_engine(f'sqlite:///{URI_SQLITE_DB_SUPPORT_PYTHONSPOT}', echo=False)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()


        
            
# Create objects
template = Mails("filename_1", "recipients_1", "mail_object_1",
                 "mail_body_1", "mail_search_tags_1_a, mail_search_tags_1_b, mail_search_tags_1_c")
session.add(template)

template = Mails("filename_2", "recipients_2", "mail_object_2",
                 "mail_body_2", "mail_search_tags_2_a, mail_search_tags_2_b, mail_search_tags_2_c")
session.add(template)

template = Mails("filename_3", "recipients_3", "mail_object_3",
                 "mail_body_3", "mail_search_tags_3_a, mail_search_tags_3_b, mail_search_tags_3_c")
session.add(template)

# commit the record the database
session.commit()

# DEBUG
print(f'2. ROWS INSERTED IN ::  {URI_SQLITE_DB_SUPPORT_PYTHONSPOT}')
