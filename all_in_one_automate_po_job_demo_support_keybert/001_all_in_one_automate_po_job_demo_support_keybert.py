#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
# Conda Environment
conda create --name all_in_one_automate_po_job python=3.9.7
conda info --envs
source activate all_in_one_automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/all_in_one_automate_po_job_demo_support_keybert/

[file]
streamlit run 001_all_in_one_automate_po_job_demo_support_keybert.py

[required]
# install streamlit
pip install streamlit
pip install watchdog

# install sqlalchemy
pip install sqlalchemy

# install keybert
pip install pytorch-pretrained-bert
pip install spacy ftfy==4.4.3
python -m spacy download en

pip install keybert
pip install keybert[flair]
pip install keybert[gensim]
pip install keybert[spacy]
pip install keybert[use]

# -U, --upgrade Upgrade all packages to the newest available version
pip install -U sentence-transformers

# to export requirements
pip freeze > all_in_one_automate_po_job_1.txt


# to install
pip install -r automate_po_job_streamlit_sqlalchemy_1.txt
pip install -r bert_flair_1.txt


# update conda if needed by running
conda update -n base -c defaults conda

"""

# require for keybert
from texts_examples_intl import samples
from keybert import KeyBERT

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
  
    

# it imports the table that you need
# from db_scheme_support_mail import *
from db_scheme_support_mail import Mails

# personal configuration
import config_values.values_conf as conf


### IMPORT FOR KEYBERT FUNCTIONS ###
# import keybert_functions.required_keybert_functions
from keybert_functions.required_keybert_functions import *


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


def UpdateGetSingleResult(filename_selected):
    
    meta_data = db.MetaData(bind=engine)
    db.MetaData.reflect(meta_data)

    TEMPLATES = meta_data.tables['user_support_mail_templates']



    query = db.select([
            TEMPLATES.c.id_filename,
            TEMPLATES.c.filename,
            TEMPLATES.c.recipients,
            TEMPLATES.c.mail_object,
            TEMPLATES.c.mail_body,
            TEMPLATES.c.mail_search_tags
        ]).filter(
            # TEMPLATES.c.id_filename.like(f"{filename_selected}")
            # TEMPLATES.c.id_filename == (f"{filename_selected}")
            TEMPLATES.c.id_filename == f"{filename_selected}"
            
        )
    # Fetch all the records
    results = engine.execute(query).fetchall()
    # View the records
    # st.code(results)
    for item in results:
            st.markdown("- Template_"f"{item.id_filename}")  
            
            filename = st.text_input('Update the mail\'s filename',
                                     value=f'{item.filename}',
                                    placeholder='001_com_mep_exp_po',
                                     help='Type here a mail\'s filename')
            st.markdown('`001_support_filename`')

            recipients = st.text_input('Update the mail\'s recipients',
                                       value=f'{item.recipients}',
                                placeholder='info@flaven.fr;test@gmail.com',
                                       help='Type here the mail\'s recipients')
            st.markdown('`info@flaven.fr;test@gmail.com`')

            mail_object = st.text_input('Update the mail\'s object',
                                        value=f'{item.mail_object}',
                                    placeholder='',
                                    help='Type here the mail\'s object')
            st.markdown('`[OBJECT] 001_support_filename`')

            mail_body = st.text_area('Enter the mail\'s Body',
                                     value=f'{item.mail_body}',
                                    placeholder='',
                                    help='Type here the mail\'s body')
            st.markdown('`the mail text with all words`')

            mail_search_tags = st.text_input('Enter the mail\'s tags',
                                    value=f'{item.mail_search_tags}',
                                    placeholder='',
                                    help='Type here the mail\'s tags')
            st.markdown(
                '`External, Support, Users, Account, Creation, External, Access, Activation`')

            # se.close()
            
            submit = st.button('Update the DB')

            if submit and filename and recipients and mail_object:
                    try:
                        
                        # initialize the Metadata Object                       
                        meta_data = db.MetaData(bind=engine)
                        db.MetaData.reflect(meta_data)

                        # Get the `user_support_mail_templates` table from the Metadata object
                        TEMPLATES = meta_data.tables['user_support_mail_templates']

                        # DEBUG
                        # st.code(f"{filename_selected}")
                        # st.code(f"{filename}")
                        
                        
                        # update
                        u = update(TEMPLATES)
                        u = u.values({
                                "filename": f"{filename}",
                                "recipients": f"{recipients}",
                                "mail_object": f"{mail_object}",
                                "mail_body": f"{mail_body}",
                                "mail_search_tags": f"{mail_search_tags}"
                                })
                        u = u.where(TEMPLATES.c.id_filename ==
                                    f"{filename_selected}")
                        # DEBUG
                        # st.code(f"{u}")
                        
                        
                        engine.execute(u)                            
                            
                        st.success("The data has been updated into the database")

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
            

def SearchGetResults(search_term, search_choice):

                meta_data = db.MetaData(bind=engine)
                db.MetaData.reflect(meta_data)

                TEMPLATES = meta_data.tables['user_support_mail_templates']


                if search_choice == "filename":
                    
                    query = db.select([
                        TEMPLATES.c.id_filename,
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                    ]).filter(
                        TEMPLATES.c.filename.contains(f"{search_term}")
                    )
                    
                elif search_choice == "object":
                    
                    query = db.select([
                        TEMPLATES.c.id_filename,
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                    ]).filter(
                        TEMPLATES.c.mail_object.contains(f"{search_term}")
                    )
                elif search_choice == "tags":
                    
                    query = db.select([
                        TEMPLATES.c.id_filename,
                        TEMPLATES.c.filename,
                        TEMPLATES.c.recipients,
                        TEMPLATES.c.mail_object,
                        TEMPLATES.c.mail_body,
                        TEMPLATES.c.mail_search_tags
                    ]).filter(
                        TEMPLATES.c.mail_search_tags.contains(f"{search_term}")
                    )
               
                results = engine.execute(query).fetchall()

                # st.code(results)
                for item in results:
                        st.markdown("- Template_"f"{item.id_filename}")
                        st.code(f"{item.filename}")
                        st.code(f"{item.mail_search_tags}")
                
                se.close()

def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)
    st.sidebar.write("numpy :: ", np.__version__)
    st.sidebar.write("sqlalchemy :: ", db.__version__)


### 2. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP
BERT_TEXT_HELP_1 = conf.BERT_TEXT_HELP_1
BERT_TEXT_HELP_2 = conf.BERT_TEXT_HELP_2
BERT_TEXT_HELP_3 = conf.BERT_TEXT_HELP_3
BERT_TEXT_HELP_4 = conf.BERT_TEXT_HELP_4
BERT_TEXT_HELP_5 = conf.BERT_TEXT_HELP_5
BERT_TEXT_HELP_6 = conf.BERT_TEXT_HELP_6
BERT_TEXT_HELP_7 = conf.BERT_TEXT_HELP_7
BERT_TEXT_HELP_8 = conf.BERT_TEXT_HELP_8
BERT_TEXT_HELP_9 = conf.BERT_TEXT_HELP_9
BERT_TEXT_HELP_10 = conf.BERT_TEXT_HELP_10
BERT_TEXT_HELP_11 = conf.BERT_TEXT_HELP_11
BERT_TEXT_HELP_12 = conf.BERT_TEXT_HELP_12




LABEL_EXPANDER = conf.LABEL_EXPANDER
GREAT_EXPENDER_TEXT_1 = conf.GREAT_EXPENDER_TEXT_1


def main():
    """ A simple attempt for to outsource to an app some dummy jobs"""

    
    ### 2. INTRO ###
    st.title(f'{TEXT_TITLE_APP}')
    st.warning(f'{TEXT_SUBHEADER_APP}')

    menu = ["Send", "Create", "Update", "Search", "Analyze"]
    choice = st.sidebar.selectbox("Menu", menu)

    # SCREEN_1
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
        
        if (num_results) > 0:
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
                
        else:
            st.write(
                'There is job to do at least writte one mail\'s templates :smirk:')
            # https://github.com/markdown-templates/markdown-emojis
        
    # SCREEN_2
    elif choice == "Create":
        st.subheader("Create")
        
        filename = st.text_input('Enter an filename',
                                '',
                                 placeholder='001_com_mep_exp_po',
                                 help='Type here a filename')
        st.markdown('`001_com_mep_exp_po`')

        recipients = st.text_input('Enter the recipients',
                               '',
                               placeholder='info@flaven.fr;test@gmail.com',
                                   help='Type here the recipients')
        st.markdown('`info@flaven.fr;test@gmail.com`')
        
        
        mail_object = st.text_input('Enter the object',
                                   '',
                                   placeholder='',
                                    help='Type here the mail\'s object')
        st.markdown('`[BACH] GO MEP pour la version vx.xx.x`')
        
        mail_body = st.text_area('Enter the Body',
                                   '',
                                   placeholder='',
                                    help='Type here the mail\'s body')
        st.markdown('`the mail text with all words`')
        
        mail_search_tags = st.text_input('Enter the tags',
                                    '',
                                    placeholder='',
                                    help='Type here the mail\'s tags')
        st.markdown('`MEP, Bach, comunication, exp, annonce`')
        
        
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
                    st.success("The data has been added into the database")
                    

                except Exception as e:
                    st.error(f"some error occurred: {e}")
        
        st.warning('By clicking on "View Data", you can check below if the record has been made...')
                
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

    # SCREEN_3
    elif choice == "Update":
        st.subheader("Update")
        
        num_results = se.query(Mails).count()
        if (num_results) > 0:
            
            results = se.query(Mails).all()
            templates = [item.filename for item in results]
            options = list(range(len(templates)))

            # st.code(options)

            def format_func(option):
                return templates[option]

            filename_selected = st.selectbox(
                'Select your template', options, format_func=format_func, help='Select a template')

            UpdateGetSingleResult(filename_selected)
            
        else:
            st.write('There is job to do at least writte one mail\'s templates :smirk:')
            # https://github.com/markdown-templates/markdown-emojis
            # https://www.merriam-webster.com/dictionary/smirk
            
    # SCREEN_4
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
                    
                    SearchGetResults(search_term, search_choice)
                    
                elif search_choice == "object":
                    st.markdown('**Your search is on `object`**')
                    st.code(search_term)
                    
                    SearchGetResults(search_term, search_choice)

                    
                elif search_choice == "tags":
                    st.markdown('**Your search is on `tags`**')
                    st.code(search_term)

                    SearchGetResults(search_term, search_choice)
    # SCREEN_5
    elif choice == "Analyze":
        st.subheader("Analyze")

        greatExpender(LABEL_EXPANDER, GREAT_EXPENDER_TEXT_1)
        ### 3. LANGUAGES
        languages = ('en', 'it', 'fr', 'es', 'ru')
        language_selected = st.selectbox(
            'Pick a language', languages,  help=BERT_TEXT_HELP_1)
        st.write('You selected:', language_selected)

        ### 4. TEXT SAMPLES
        placeholder = st.empty()
        text_input = placeholder.text_area(
            "Type in some text you want to analyze", height=300, help=BERT_TEXT_HELP_2)

        sample_text = st.selectbox(
            "Or pick some sample texts", [
                f"sample  {i+1}" for i in range(len(samples))], help=BERT_TEXT_HELP_3
        )

        sample_id = int(sample_text.split(" ")[-1])
        # st.code(sample_id)
        text_input = placeholder.text_area(
            "Type in some text you want to analyze", value=samples[sample_id - 1], height=300, help=BERT_TEXT_HELP_4
        )

        ### 5. PARAMETERS

        #2 — Keywords and expressions (n-grams) are extracted from the same document using Bag Of Words techniques (such as a TfidfVectorizer or CountVectorizer). This is a classical step that you may be familiar with if you’ve performed keywords extraction in the past
        # https://kavita-ganesan.com/what-are-n-grams/

        number_kw_extracted = st.sidebar.slider(
            "Select number of keywords to extract", 5, 20, 10, 2, help=BERT_TEXT_HELP_5)
        number_min_ngram = st.sidebar.number_input(
            "Min ngram", 1, 5, 1, 1, help=BERT_TEXT_HELP_6)
        number_max_ngram = st.sidebar.number_input(
            "Max ngram", number_min_ngram, 5, 3, step=1, help=BERT_TEXT_HELP_7)
        st.sidebar.code(f"ngram_range = ({number_min_ngram}, {number_max_ngram})")

        # DIVERSITY

        params = {
            "docs": text_input,
            "top_n": number_kw_extracted,
            "keyphrase_ngram_range": (number_min_ngram, number_max_ngram)
        }

        add_diversity = st.sidebar.checkbox(
                    "Add diversity to the results", help=BERT_TEXT_HELP_8)
        if add_diversity:
                    method = st.sidebar.selectbox(
                        "Select a method", ("Max Sum Similarity",
                                            "Maximal Marginal Relevance"), help=BERT_TEXT_HELP_9
                    )

                    # source: https://github.com/MaartenGr/KeyBERT/
                    # Max Sum Similarity
                    # EXAMPLE : kw_model.extract_keywords(doc, keyphrase_ngram_range=(3, 3), stop_words='english', use_maxsum=True, nr_candidates=20, top_n=5)

                    # To diversify the results, we take the 2 x top_n most similar words/phrases to the document. Then, we take all top_n combinations from the 2 x top_n words and extract the combination that are the least similar to each other by cosine similarity.

                    if method == "Max Sum Similarity":
                        nr_candidates_selected = st.sidebar.slider(
                            "nr_candidates_selected", 20, 50, 20, 2, help=BERT_TEXT_HELP_10)
                        use_maxsum_selected = True

                    # Maximal Marginal Relevance
                    # EXAMPLE : kw_model.extract_keywords(doc, keyphrase_ngram_range=(3, 3), stop_words='english', use_mmr = True, diversity = 0.2)

                    # To diversify the results, we can use Maximal Margin Relevance (MMR) to create keywords / keyphrases which is also based on cosine similarity.

                    elif method == "Maximal Marginal Relevance":
                        diversity_selected = st.sidebar.slider(
                            "diversity_selected", 0.1, 1.0, 0.6, 0.01, help=BERT_TEXT_HELP_11)
                        use_mmr_selected = True

                    # DEBUG
                    # st.code(params)

                ### 6. KEYWORDS OUTPUT 'en', 'it', 'fr', 'es'

        if st.checkbox("Show keywords extracted)", help=BERT_TEXT_HELP_12):
                    if language_selected == 'en':
                        st.markdown(f'#### KWs for: {language_selected} ')

                        if(add_diversity):

                                if method == "Max Sum Similarity":

                                        DoKeywordsExtendedMaxSumSimilarity(language_selected, text_input, number_kw_extracted, number_min_ngram,
                                                                        number_max_ngram, add_diversity, method, nr_candidates_selected, use_maxsum_selected)

                                elif method == "Maximal Marginal Relevance":

                                        DoKeywordsExtendedMaximalMarginalRelevance(
                                            language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram, add_diversity, method, diversity_selected, use_mmr_selected)

                        else:
                            DoKeywords(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram)

                    elif language_selected == 'it':
                        st.markdown(f'#### KWs for: {language_selected} ')

                        DoKeywords(language_selected, text_input,
                                number_kw_extracted, number_min_ngram, number_max_ngram)

                    elif language_selected == 'fr':
                        st.markdown(f'#### KWs for: {language_selected} ')

                        DoKeywords(language_selected, text_input,
                                number_kw_extracted, number_min_ngram, number_max_ngram)

                    elif language_selected == 'es':
                        st.markdown(f'#### KWs for: {language_selected} ')

                        DoKeywords(language_selected, text_input,
                                number_kw_extracted, number_min_ngram, number_max_ngram)

                    elif language_selected == 'ru':
                        st.markdown(f'#### KWs for: {language_selected} ')

                        DoKeywords(language_selected, text_input,
                                number_kw_extracted, number_min_ngram, number_max_ngram)

if __name__ == "__main__":
    main()
    detectVersion()
    

