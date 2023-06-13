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
streamlit run 010_streamlit_seo_google_trends_python.py



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



Source: https://www.holisticseo.digital/python-seo/google-trends/

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


# basic imports
import streamlit as st

# check values_conf.py for credentials file
import config_values.values_conf as conf


# values
TITLE_APP = conf.TITLE_APP

SOURCE_PATH = conf.SOURCE_PATH

HEAD_KEY_FIGURES_1 = conf.HEAD_KEY_FIGURES_1
HEAD_KEY_FIGURES_2 = conf.HEAD_KEY_FIGURES_2
HEAD_KEY_FIGURES_3 = conf.HEAD_KEY_FIGURES_3


###############################################################################

# file_path = 'world_en_full.csv'
file_path = 'world_en_full_google_trends.csv'

# @st.cache


@st.cache_data
def load_data(file_path):
    df = pd.read_csv(file_path)
    return df


def main():
    

    # The code below is for the layout of the page
    if "widen" not in st.session_state:
        layout = "centered"
    else:
        layout = "wide" if st.session_state.widen else "centered"

    st.set_page_config(
        layout=layout, page_title=TITLE_APP, page_icon="🔌"
    )

    # main layout
    st.header(f'{TITLE_APP}')



    st.title("Countries from a csv")
    file_path = st.text_input("Enter the path to the .csv file:")
    st.code('world_en_full_google_trends.csv')
    if file_path:
            df = load_data(file_path)
            # st.write("Data Preview:")
            # st.write(df.head())
            # st.dataframe(df)
            
            
            code = df['code']
            country = df['country']
            country_google_trend = df['country_google_trend']
            
            # st.write(country_google_trend)
            
            
            country_trending_searches = st.selectbox('Choose an indicator', range(len(
                country_google_trend)), format_func=lambda x: country[x], help="This dropdown menu show a list of indicators")
            
            # DEBUG
            # st.code(df['country_google_trend'][country_trending_searches])
            
            country_trending_searches_selected = df['country_google_trend'][country_trending_searches]
            
            st.write("You selected this option", country_trending_searches_selected)

            st.write("The country is : ", country_trending_searches_selected)
            
            if st.button('Submit_2'):

                st.success(country_trending_searches_selected)
                trend_show = TrendReq(hl='en-US', tz=360)
                dp_df = trend_show.trending_searches(
                    pn=country_trending_searches_selected)
                dp_df = pd.DataFrame(dp_df)
                st.write(dp_df)
            
            else:
                    st.warning("How-to: Select a single country...")


        
            if st.checkbox("Show Columns"):
                st.write(df.columns)
            if st.checkbox("Show Shape"):
                st.write("Number of rows:", df.shape[0])
                st.write("Number of columns:", df.shape[1])


if __name__ == "__main__":
    main()

