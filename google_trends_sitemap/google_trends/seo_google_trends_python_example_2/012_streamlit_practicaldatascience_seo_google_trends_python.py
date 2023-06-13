#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name google_trends python=3.9.13
conda info --envs
source activate google_trends
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_google_trends.txt


# to install
pip install -r requirements_google_trends.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/seo_google_trends_python_example_2/

[file]
streamlit run 012_streamlit_practicaldatascience_seo_google_trends_python.py



# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

# show graphs
pip install plotly

# for jupyter
pip install matplotlib
pip install seaborn

[INFOS]

Objective: The pytrends queries are extracted from 011_practicaldatascience_seo_google_trends_python.py and ported code into Streamlit to make them easy to use

Source: https://practicaldatascience.co.uk/data-science/how-to-analyse-search-traffic-using-the-google-trends-api

Model: https://github.com/daniellewisDL/streamlit-cheat-sheet

Streamlit documentation to design apps: https://docs.streamlit.io/


"""

# import the TrendReq method from the pytrends request module
import pytrends
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt
import seaborn as sns
from pytrends.request import TrendReq
import uuid

# import datetime as dt
from datetime import date
from datetime import datetime as dt

# basic imports
import streamlit as st

# check values_conf.py for credentials file
import config_values.values_conf as conf

### 1. VALUES ###
TITLE_APP = conf.TITLE_APP
DEST_PATH = conf.DEST_PATH

APP_HEAD_LABEL_1 = conf.APP_HEAD_LABEL_1
APP_HEAD_DESCRIPTION_1 = conf.APP_HEAD_DESCRIPTION_1

LABEL_EXPANDER = conf.LABEL_EXPANDER

EXAMPLE_TAB_HEAD_LABEL_1 = conf.EXAMPLE_TAB_HEAD_LABEL_1
EXAMPLE_TAB_HEAD_LABEL_2 = conf.EXAMPLE_TAB_HEAD_LABEL_2
EXAMPLE_TAB_HEAD_LABEL_3 = conf.EXAMPLE_TAB_HEAD_LABEL_3



# EXPLANATIONS
GREAT_EXPANDER_TEXT_1 = conf.GREAT_EXPANDER_TEXT_1
GREAT_EXPANDER_TEXT_2 = conf.GREAT_EXPANDER_TEXT_2
GREAT_EXPANDER_TEXT_3 = conf.GREAT_EXPANDER_TEXT_3
GREAT_EXPANDER_TEXT_4 = conf.GREAT_EXPANDER_TEXT_4
GREAT_EXPANDER_TEXT_5 = conf.GREAT_EXPANDER_TEXT_5
GREAT_EXPANDER_TEXT_6 = conf.GREAT_EXPANDER_TEXT_6
GREAT_EXPANDER_TEXT_7 = conf.GREAT_EXPANDER_TEXT_7
GREAT_EXPANDER_TEXT_8 = conf.GREAT_EXPANDER_TEXT_8
GREAT_EXPANDER_TEXT_9 = conf.GREAT_EXPANDER_TEXT_9



### 2. FUNCTIONS ###
def greatExpander(label, text):
    with st.expander(label):
        st.markdown(f"{text}")
        
        
def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)
    st.sidebar.write("numpy :: ", np.__version__)
    st.sidebar.write("seaborn :: ", sns.__version__)
    st.sidebar.write('and ... pytrends')
    

def main():
    """ A simple attempt for google trend """

    ### APP INTRO ###
    st.title(TITLE_APP)
    
    ### APP NAV ###
    menu = ["PRESENTATION", "EXAMPLE_1", "EXAMPLE_2",
            "EXAMPLE_3", "EXAMPLE_4", "EXAMPLE_5", "EXAMPLE_6", "EXAMPLE_7", "EXAMPLE_8", "EXAMPLE_9"]
    choice = st.sidebar.selectbox("Select an example", menu)
    
    ### APP MAIN ###
    if choice == "PRESENTATION":
        st.subheader(APP_HEAD_LABEL_1)
        st.info(APP_HEAD_DESCRIPTION_1)

    elif choice == "EXAMPLE_1":
        # st.subheader("EXAMPLE_1")
        st.markdown('**Top Searches `trending_searches()`**')
        
        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_1)
        
        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_1
                pt = TrendReq()
                df = pt.trending_searches()
                # st.dataframe(df.head(5))
                # st.code(df)
                # st.code(df.values)
                keywords = df.values
                # keywords = df.to_numpy()
                # enumerate kws
                keywords_count = len(keywords)
                # enumerate kws and print in a list
                keywords_only = [item[0] for item in keywords]
                result = ', '.join(keywords_only[:-1]) + ', ' + keywords_only[-1]
                st.write(result)
                
                # cut and paste easier to CMS if needed
                # st.code(result)
            
            ''')
        
        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")
        if st.checkbox("**View the code output (result)**"):
            # EXAMPLE_1
            pt = TrendReq()
            df = pt.trending_searches()
            # st.dataframe(df.head(5))
            # st.code(df)
            # st.code(df.values)
            keywords = df.values
            # keywords = df.to_numpy()
            # enumerate kws
            keywords_count = len(keywords)
            # enumerate kws and print in a list
            keywords_only = [item[0] for item in keywords]
            result = ', '.join(keywords_only[:-1]) + ', ' + keywords_only[-1]
            st.write(result)
            
            # cut and paste easier to CMS
            # st.code(result)

        
    elif choice == "EXAMPLE_2":
        st.subheader("EXAMPLE_2")
        st.markdown(
            '**Interest over time `interest_over_time()`**')
        
        # EXPLANATION
        st.warning('EXPLANATION', icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_2)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_2
                # The keywords are selected from the text_input 
                # st.write(keywords)
                st.write(keywords.split())

                pt.build_payload(keywords.split())
                df = pt.interest_over_time()
                # df.head()
                # st.dataframe(df)
                df.plot()

                # filename
                today = dt.now()
                getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
                getdate = getdate+'_'
                filename = str(uuid.uuid4())
                new_name = f'google_trends_{getdate}{filename}'
                # st.code(f'new_name :: {new_name}')

                # save                    
                plt.savefig(f'{DEST_PATH}{new_name}.png')
                plt.savefig(f'{DEST_PATH}{new_name}.pdf')
                # plt.show() 
                st.success(f'Files {new_name} both in .png and in .pdf have been saved in {DEST_PATH}...')
            
            ''')

        # RESULT ou OUTPUT
        st.subheader('Keywords')
        keywords = st.text_input('**Type a list of keywords separated by commer e.g `streamlit, pandas, numpy, matplotlib`**',
                             '',
                                 placeholder='streamlit, pandas, numpy, matplotlib',
                                 help='Type a list of keywords separated by commer e.g `streamlit, pandas, numpy, matplotlib`')
        
        st.code(
            'streamlit, pandas, numpy, matplotlib')
        st.caption(
            '*A list of keywords is give as example above and as placeholder.*')
        if st.checkbox("**View the code output (result)**"):
            # EXAMPLE_3
            # Interest over time
            pt = TrendReq()

            # st.write(keywords)
            st.write(keywords.split())
            
            pt.build_payload(keywords.split())
            df = pt.interest_over_time()
            # df.head()
            # st.dataframe(df)
            df.plot()
            
            # filename
            today = dt.now()
            getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
            getdate = getdate+'_'
            filename = str(uuid.uuid4())
            new_name = f'google_trends_{getdate}{filename}'
            # st.code(f'new_name :: {new_name}')

            # save
            plt.savefig(f'{DEST_PATH}{new_name}.png')
            plt.savefig(f'{DEST_PATH}{new_name}.pdf')
            # plt.show() 
            st.success(f'Files {new_name} both in .png and in .pdf have been saved in {DEST_PATH}...')

    elif choice == "EXAMPLE_3":
        st.subheader("EXAMPLE_3")
        st.markdown(
            '**YouTube trends `build_payload()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_3)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_4
                # YouTube trends
                pt = TrendReq()
                pt.build_payload(['IA', 'journalism'], gprop='youtube')
                df = pt.interest_over_time()
                # df.head()
                st.dataframe(df)
                df.plot()
                plt.show()
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

        st.subheader('Keywords')
        keywords = st.text_input('**Type a list of keywords separated by commer e.g `IA, journalism`**',
                                 '',
                                 placeholder='IA, journalism',
                                 help='Type a list of keywords separated by commer e.g `IA, journalism`')

        st.code(
            'IA, journalism')
        st.caption(
            '*A list of keywords is give as example above and as placeholder.*')
        if st.checkbox("**View the code output (result)**"):
            
            # YouTube trends
            pt = TrendReq()
            # st.write(keywords)
            st.write(keywords.split())

            pt.build_payload(keywords.split(), gprop='youtube')
            df = pt.interest_over_time()
            # df.head()
            # st.dataframe(df)
            
            df.plot()
            # filename
            today = dt.now()
            getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
            getdate = getdate+'_'
            filename = str(uuid.uuid4())
            new_name = f'google_trends_{getdate}{filename}'
            # st.code(f'new_name :: {new_name}')

            # save
            plt.savefig(f'{DEST_PATH}{new_name}.png')
            plt.savefig(f'{DEST_PATH}{new_name}.pdf')
            # plt.show()
            st.success(
                f'Files {new_name} both in .png and in .pdf have been saved in {DEST_PATH}...')
            
            
        
    elif choice == "EXAMPLE_4":
        st.subheader("EXAMPLE_4")
        st.markdown(
            '**Text for EXAMPLE_4 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_4)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_4
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

    elif choice == "EXAMPLE_5":
        st.subheader("EXAMPLE_5")
        st.markdown(
            '**Text for EXAMPLE_5 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_5)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_5
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

    elif choice == "EXAMPLE_6":
        st.subheader("EXAMPLE_6")
        st.markdown(
            '**Text for EXAMPLE_6 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_6)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_6
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

    elif choice == "EXAMPLE_7":
        st.subheader("EXAMPLE_7")
        st.markdown(
            '**Text for EXAMPLE_7 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_7)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_7
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

    elif choice == "EXAMPLE_8":
        st.subheader("EXAMPLE_8")
        st.markdown(
            '**Text for EXAMPLE_8 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_8)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_8
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

    elif choice == "EXAMPLE_9":
        
        st.subheader("EXAMPLE_9")
        st.markdown(
            '**Text for EXAMPLE_9 `xxx()`**')

        # EXPLANATION
        st.warning(EXAMPLE_TAB_HEAD_LABEL_1, icon="👍")
        greatExpander(LABEL_EXPANDER, GREAT_EXPANDER_TEXT_9)

        # CODE
        st.info(EXAMPLE_TAB_HEAD_LABEL_2, icon="👽")
        with st.expander("View the code"):
            st.code('''
                    
                # EXAMPLE_9
                
            
            ''')

        # RESULT ou OUTPUT
        st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")

if __name__ == '__main__':
    main()
    detectVersion()
    

