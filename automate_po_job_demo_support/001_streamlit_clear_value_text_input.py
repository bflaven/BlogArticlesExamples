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
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/

[file]
streamlit run 001_streamlit_clear_value_text_input.py


[source]
Simpler, effective method to clear value of text_input
https://github.com/streamlit/streamlit/issues/4195


[required]
# install
pip install streamlit
pip install watchdog
pip install sqlalchemy
pip install matplotlib
pip install panda

# or pip install requirements.txt
pip install -r requirements.txt

CREATE TABLE user_support_mail_templates (
	id_filename INTEGER NOT NULL, 
	filename VARCHAR, 
	recipients VARCHAR, 
	mail_object VARCHAR, 
	mail_body VARCHAR, 
	mail_search_tags VARCHAR, 
	PRIMARY KEY (id_filename)
);


"""

# require in this file
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
# require in this file
from os.path import isfile, join
import glob
# import datetime as dt
from datetime import date
from datetime import datetime as dt

import time
import sqlite3
import pandas as pd


# Database using sqlalchemy
# import sqlalchemy
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import result
from sqlalchemy import create_engine, Column, String, Integer, Float, MetaData, Table, Column, Numeric, Integer, VARCHAR, update
  
# personal configuration
import config_values.values_conf as conf

### 1. DB ###
# mail_filenames = conf.mail_filenames
# mail_recipients = conf.mail_recipients
# mail_objects = conf.mail_objects
# mail_body = conf.mail_body
# mail_tags = conf.mail_tags


### 2. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP
URI_SQLITE_DB = conf.URI_SQLITE_DB



def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)
    st.sidebar.write("numpy :: ", np.__version__)
    st.sidebar.write("sqlalchemy :: ", db.__version__)

def clear_form():
    st.session_state["firstname"] = ""
    st.session_state["lastname"] = ""
    
    
def main():
    """ Simpler, effective method to clear value of text_input """

with st.form("my_form"):
    f1, f2 = st.columns([1, 1])
    with f1:
        st.text_input("Firstname", key="firstname")
    with f2:
        st.text_input("Lastname", key="lastname")
    f3, f4 = st.columns([1, 1])
    with f3:
        submit = st.form_submit_button(label="Submit")
    with f4:
        clear = st.form_submit_button(label="Clear", on_click=clear_form)

if submit:
    st.write('Submitted')

if clear:
    st.write('Cleared')

st.write(st.session_state.firstname)
st.write(st.session_state.lastname)
    
    
    
if __name__ == "__main__":
    main()
    detectVersion()
    

