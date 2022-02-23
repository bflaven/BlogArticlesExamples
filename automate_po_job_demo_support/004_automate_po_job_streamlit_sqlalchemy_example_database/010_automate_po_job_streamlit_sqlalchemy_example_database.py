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
streamlit run 010_automate_po_job_streamlit_sqlalchemy_example_database.py


[source]
No source

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

# Database using sqlalchemy
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Column, String, Integer, Float
import pandas as pd

# it imports the table that you need
# from db_scheme_support_mail import *
from db_scheme_support_mail import Mails

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


# create a session
# engine = create_engine(f'sqlite:///{URI_SQLITE_DB}', connect_args={'check_same_thread': False}, echo=True)
engine = create_engine(f'sqlite:///{URI_SQLITE_DB}', connect_args={'check_same_thread': False}, echo=False)


Session = sessionmaker(bind=engine)
se = Session()


def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)
    st.sidebar.write("numpy :: ", np.__version__)
    st.sidebar.write("sqlalchemy :: ", db.__version__)


def choosing_asset():
    results = se.query(mail_filenames).all()
    with results as item:
        data = list(item)
        option = st.selectbox('Select your asset', data)
        id = option[0]
        return(id)

def main():
    """ A simple attempt for to outsource to an app some dummy jobs"""

    
    ### 2. INTRO ###
    st.title(f'{TEXT_TITLE_APP}')
    st.warning(f'{TEXT_SUBHEADER_APP}')

    menu = ["Send", "Create", "Update", "Search"]
    choice = st.sidebar.selectbox("Menu", menu)

    if choice == "Send":
        st.subheader("Send")
        
        # CASE_1
        # Create objects
        # for mail in se.query(Mails).order_by(Mails.id_filename):
        #     st.write(f'filename :: {mail.filename}')
        #     st.write(f'recipients :: {mail.recipients}')
        
        # session.close()
        
        # CASE_2
        num_results = se.query(Mails).count()
        st.info(f"Mails templates number in database: {num_results}")
        
        results = se.query(Mails).all()
        ids = [item.id_filename for item in results]
        templates = [item.filename for item in results]
        recipients = ([item.recipients for item in results])
        mail_objects = ([item.mail_object for item in results])
        mail_bodies = ([item.mail_body for item in results])
        mail_search_tags = ([item.mail_search_tags for item in results])
        options = list(range(len(templates)))
        
        def format_func(option):
            return templates[option]

        filename_selected = st.selectbox(
            'Select your template', options, format_func=format_func, help='Select a template')
        def format_func(option):
            return templates[option]
    
        recipient = recipients[filename_selected]
        object = mail_objects[filename_selected]
        body = mail_bodies[filename_selected]
        tags = mail_search_tags[filename_selected]
        
        # DEBUG
        # st.code(f"{recipient}")
        # st.code(f"{object}")
        # st.code(f"{body}")
        # st.code(f"{tags}")

    
        # V1 JUST FOR THE BEAUTY OF THE FORM
        # recipient = st.text_input(
        #     'Tags:', ''f'{recipient}''', help="See the recipients")
        # object = st.text_area('Object: ', ''f'{object}''', help="See the object")
        # body = st.text_area('Body: ', ''f'{body}''', help="See the body")
        
        
        # tags = st.text_input(
        #     'Tags:', ''f'{tags}''', help="See the tags") # useless for this screen

        # V2 with st.code, there
        recipient = st.code(f'{recipient}', language='bash')
        object = st.code(f'{object}', language='bash')
        body = st.code(f'{body}', language='bash')
        # tags = st.code(f'{tags}', language='bash') # useless for this screen
        
        se.close()

    elif choice == "Create":
        st.subheader("Create")
        
        filename = st.text_input('Enter an filename',
                                '',
                                 placeholder='001_support_filename',
                                 help='Type here a filename')
        st.markdown('`001_support_filename`')

        recipients = st.text_input('Enter the recipients',
                               '',
                               placeholder='info@flaven.fr;test@gmail.com',
                                   help='Type here the recipients')
        st.markdown('`info@flaven.fr;test@gmail.com`')
        
        
        mail_object = st.text_input('Enter the object',
                                   '',
                                   placeholder='',
                                    help='Type here the mail\'s object')
        st.markdown('`[OBJECT] 001_support_filename`')
        
        mail_body = st.text_area('Enter the Body',
                                   '',
                                   placeholder='',
                                    help='Type here the mail\'s body')
        st.markdown('`the mail text with all words`')
        
        mail_search_tags = st.text_input('Enter the tags',
                                    '',
                                    placeholder='',
                                    help='Type here the mail\'s tags')
        st.markdown('`External, Support, Users, Account, Creation, External, Access, Activation`')
        
        
    # id_filename
    # filename
    # recipients
    # mail_object
    # mail_body
    # mail_search_tags
        
        


        submit = st.button('Insert into DB')

        if submit and filename and recipients and mail_object:
                try:
                    entry = Mails(filename=filename,
                                  recipients=recipients, mail_object=mail_object, mail_body=mail_body, mail_search_tags=mail_search_tags)
                    se.add(entry)
                    se.commit()
                    se.close()
                    st.success("The data added to the database")

                except Exception as e:
                    st.error(f"some error occurred: {e}")

        if st.checkbox("View data"):
                results = se.query(Mails).all()
                for item in results:
                 
                    st.markdown("- Template_"f"{item.id_filename}")
                    st.code(f"{item.filename}")
                    # st.code(f"{item.filename}")
                    # st.code(f"{item.recipients}")
                    # st.code(f"{item.mail_object}")
                    # st.code(f"{item.mail_body}")
                    # st.code(f"{item.mail_search_tags}")
                    se.close()


    elif choice == "Update":
        st.subheader("Update")
        
        
    
    elif choice == "Search":
        st.subheader("Search")
    
        search_term = st.text_input(
            "Enter Term", help='Type a tag or a word')
        st.markdown('`Type a tag or a word`')
        
        search_choice = st.radio(
            "Field to Search", ("filename", "object", "tags"), help='Select the type of Search')
        st.markdown('`Select the type of Search`')
        
        if st.button('Search', help='Launch the Search'):
                if search_choice == "filename":
                    st.markdown('**Your search is on `filename`**')
                    st.code(search_term)
                    
                    # Create the Metadata Object
                    meta_data = db.MetaData(bind=engine)
                    db.MetaData.reflect(meta_data)
                    
                    # Get the `students` table from the Metadata object
                    TEMPLATES = meta_data.tables['user_support_mail_templates']

                    # SQLAlchemy Query to SELECT specific column
                    # query = db.select([TEMPLATES.c.id_filename, TEMPLATES.c.filename])
                    query = db.select([
                        TEMPLATES.c.id_filename, 
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                        ]).filter(
                        TEMPLATES.c.filename.contains(f"{search_term}"))

                    # Fetch all the records
                    results = engine.execute(query).fetchall()

                    # View the records
                    # st.code(results)
                    for item in results:
                        st.markdown("- Template_"f"{item.id_filename}")
                        st.code(f"{item.filename}")
                        st.code(f"{item.mail_search_tags}")
                    
                    se.close()
                    
                elif search_choice == "object":
                    st.markdown('**Your search is on `object`**')
                    st.code(search_term)
                    
                    # Create the Metadata Object
                    meta_data = db.MetaData(bind=engine)
                    db.MetaData.reflect(meta_data)

                    # Get the `students` table from the Metadata object
                    TEMPLATES = meta_data.tables['user_support_mail_templates']

                    # SQLAlchemy Query to SELECT specific column
                    # query = db.select([TEMPLATES.c.id_filename, TEMPLATES.c.filename])
                    query = db.select([
                        TEMPLATES.c.id_filename,
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                    ]).filter(
                        TEMPLATES.c.mail_object.contains(f"{search_term}"))

                    # Fetch all the records
                    results = engine.execute(query).fetchall()

                    # View the records
                    # st.code(results)
                    for item in results:
                        st.markdown("- Template_"f"{item.id_filename}")
                        st.code(f"{item.filename}")
                        st.code(f"{item.mail_search_tags}")

                    se.close()
                    
                    
                elif search_choice == "tags":
                    st.markdown('**Your search is on `tags`**')
                    st.code(search_term)
                    
                    # Create the Metadata Object
                    meta_data = db.MetaData(bind=engine)
                    db.MetaData.reflect(meta_data)

                    # Get the `students` table from the Metadata object
                    TEMPLATES = meta_data.tables['user_support_mail_templates']

                    # SQLAlchemy Query to SELECT specific column
                    query = db.select([
                        TEMPLATES.c.id_filename,
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                    ]).filter(
                        TEMPLATES.c.mail_search_tags.contains(f"{search_term}"))

                    # Fetch all the records
                    results = engine.execute(query).fetchall()

                    # View the records
                    # st.code(results)
                    for item in results:
                        st.markdown("- Template_"f"{item.id_filename}")
                        st.code(f"{item.filename}")
                        st.code(f"{item.mail_search_tags}")

                    se.close()


if __name__ == "__main__":
    main()
    detectVersion()
    

