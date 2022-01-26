#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
[env]
# you have created a env with all the required packages
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_bert_streamlit/examples_eda_2/


[file]
streamlit run 007_all_streamlit_webapp_for_data_science.py

# installation required
streamlit_pandas_profiling
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling

https://geekyturtles.com/blogs/exploratory-data-analysis-using-pandas-profiling/
https://www.kaggle.com/sootersaalu/amazon-top-50-bestselling-books-2009-2019

+ LOTTIE FILES
https://assets9.lottiefiles.com/private_files/lf30_imyUMa.json
https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json
https://assets9.lottiefiles.com/private_files/lf30_5KCvlo.json
https://assets9.lottiefiles.com/private_files/lf30_erzifhq5.json
https://assets9.lottiefiles.com/private_files/lf30_hzafnofa.json
https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json


"""

# additional requirements
from pandas_profiling import ProfileReport
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
import numpy as np
import time
from itertools import accumulate
from datetime import datetime
from datetime import time
import re
import urllib.request

from numpy.lib.utils import info

# personal configuration
import config_values.values_conf as conf

# from dash
from streamlit_autorefresh import st_autorefresh
from streamlit_pandas_profiling import st_profile_report
import plotly.graph_objects as go
from unicodedata import lookup
import pandas as pd
import os
import plotly.express as px
gapminder = px.data.gapminder()

# from streamlit
import streamlit as st
from streamlit_lottie import st_lottie
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


# from dash
gapminder = px.data.gapminder()

# from streamlit

### 1. VALUES ###
SOURCE_PATH = conf.SOURCE_PATH
LABEL_EXPANDER = conf.LABEL_EXPANDER
TITLE_APP_WORLD = conf.TITLE_APP_WORLD
APP_BASELINE_WORLD = conf.APP_BASELINE_WORLD

TAB_1_LABEL = conf.TAB_1_LABEL
TAB_2_LABEL = conf.TAB_2_LABEL


    
### 2. APPEARANCE ###
# Use the full page instead of a narrow central column
# st.beta_set_page_config(layout="wide")
st.set_page_config(page_title=None, page_icon=None,
                initial_sidebar_state="auto", layout="wide")

### 3. FUNCTIONS ###
def detectVersion():
        st.markdown('* * *')
        st.markdown('**VERSIONS**')
        st.write("streamlit ::", st.__version__)
        st.write("panda ::", pd.__version__)
        st.write("seaborn :: ", sns.__version__)
        
def greatExpender(text):
    with st.expander(LABEL_EXPANDER):
        st.markdown(f"{text}")



@st.cache
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()


def ShowLottie(lottie_name, s, w, h):
    # lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json'
    
    if lottie_name == "penguin":
        # st.write('penguin')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_lntyk83o.json'
    
    elif lottie_name == "dash":
        # st.write('dash')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_imyUMa.json'
        
    elif lottie_name == "gmail":
        # st.write('gmail')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json'
    
    elif lottie_name == "marriot":
        # st.write('marriot')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json'
    

    elif lottie_name == "shake":
        # st.write('shake')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_erzifhq5.json'
    
    elif lottie_name == "pirate":
        # st.write('pirate')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_hzafnofa.json'

    elif lottie_name == "light":
        # st.write('light')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json'
    

    lottie_icon = load_lottieurl(lottie_lot)
    st_lottie(lottie_icon, speed=1.5, width=400, height=200)



### 4. APP ###
def main():

    ### RESOURCES
    # SOURCES
    poverty_data = pd.read_csv('data/PovStatsData.csv')
    poverty = pd.read_csv('data/poverty.csv', low_memory=False)
    series = pd.read_csv('data/PovStatsSeries.csv')

    # EXTRACT_1
    gini = 'GINI index (World Bank estimate)'
    gini_df = poverty[poverty[gini].notna()]

    regions = ['East Asia & Pacific', 'Europe & Central Asia',
            'Fragile and conflict affected situations', 'High income',
            'IDA countries classified as fragile situations', 'IDA total',
            'Latin America & Caribbean', 'Low & middle income', 'Low income',
            'Lower middle income', 'Middle East & North Africa',
            'Middle income', 'South Asia', 'Sub-Saharan Africa',
            'Upper middle income', 'World']

    population_df = poverty_data[~poverty_data['Country Name'].isin(regions) &
                                (poverty_data['Indicator Name'] == 'Population, total')]

    # income_share_df = poverty.filter(regex='Country Name|^year$|Income share.*?20').dropna()

    # income_share_df = poverty.filter(regex='Country Name')
    # income_share_df = poverty.filter(regex='Country Name').dropna()
    # income_share_df = poverty.filter(regex='Country Name|^year$').dropna()

    income_share_df = poverty.filter(
        regex='Country Name|^year$|Income share.*?20').dropna()

    # [8287 rows x 7 columns]
    # st.code(income_share_df.describe)
    # st.code(income_share_df.columns)
    # st.write(income_share_df)

    ## NOTE
    # st.write(income_share_df)
    # st.code(income_share_df.describe)
    # st.code(income_share_df.columns)

    ## NOTE
    # show in the console
    # print(income_share_df.describe)

    ## NOTE columns for income_share_df
    # 'Country Name', 'year', 'Income share held by fourth 20%', 'Income share held by highest 20%', 'Income share held by lowest 20%', 'Income share held by second 20%', 'Income share held by third 20%'

    # st.write(income_share_df)

    income_share_df = income_share_df.rename(columns={
        'Income share held by lowest 20%': '1 Income share held by lowest 20%',
        'Income share held by second 20%': '2 Income share held by second 20%',
        'Income share held by third 20%': '3 Income share held by third 20%',
        'Income share held by fourth 20%': '4 Income share held by fourth 20%',
        'Income share held by highest 20%': '5 Income share held by highest 20%'
        # 'Country Name':'Country',
        # 'year':'Year'
    }).sort_index(axis=1)

    # st.code(income_share_df.describe)
    # st.code(income_share_df.columns)
    # st.write(income_share_df)


    income_share_df.columns = [re.sub('\d Income share held by ', ' ', col).title()
                            for col in income_share_df.columns]

    # st.code(income_share_df.columns)
    # st.write(income_share_df)

    ## [3:-1] the 6 first columns starting from the end and 3 first rows from the point
    ## [2:-2] the 5 first columns starting from the end and 2 first rows from the point
    ## [1:-2] the 5 first columns and 4 first rows from the point
    ## [0:-2] the 5 first columns starting from the end and 5 first rows from the point
    ## [:-2] the 5 first columns starting from the end and 5 first rows from the point


    income_share_cols = income_share_df.columns[:-2]
    # st.write(income_share_cols)
    # st.code(income_share_df.describe)


    perc_pov_cols = poverty.filter(regex='Poverty gap').columns
    # st.code(perc_pov_cols)
    # st.write(perc_pov_cols)
    perc_pov_df = poverty[poverty['is_country']].dropna(subset=perc_pov_cols)
    perc_pov_df.sort_values(by=['year'], inplace=True, ascending=True)
    # st.write(perc_pov_df)


    ## NOTE increment filters
    # perc_pov_df = poverty['is_country']
    # perc_pov_df = poverty[poverty['is_country']]
    # perc_pov_df = poverty[poverty['is_country']].dropna()
    # perc_pov_df = poverty[poverty['is_country']].dropna(subset=perc_pov_cols)
    # st.write(perc_pov_df)

    ## V1
    # perc_pov_years = perc_pov_df['year'].unique()
    # perc_pov_years = (set(perc_pov_df['year']))

    ## V2
    perc_pov_years = sorted(set(perc_pov_df['year']))
    # st.code(perc_pov_years)


    cividis0 = px.colors.sequential.Cividis[0]


    def make_empty_fig():
        fig = go.Figure()
        fig.layout.paper_bgcolor = '#E5ECF6'
        fig.layout.plot_bgcolor = '#E5ECF6'
        return fig


    def multiline_indicator(indicator):
        final = []
        split = indicator.split()
        for i in range(0, len(split), 3):
            final.append(' '.join(split[i:i+3]))
        return '<br>'.join(final)

    ### RESOURCES
    ShowLottie('light', 1.5, 400, 200)

    ###  APP LAYOUT
    st.title(TITLE_APP_WORLD)
    st.subheader(APP_BASELINE_WORLD)



    ###  CASE_1 ###
    showCase1 = st.checkbox('CASE_1', help="Help message CASE_1")
    greatExpender('Info on CASE_1')
    if showCase1:
        st.markdown('**CASE_1**')

        ## just to let you know the version
        for p in [st, requests, pd, sns, np]:
            # st.code(f'{p.__name__:-<30}v{p.__version__}')
            st.write(f'{p.__name__:-<30}v{p.__version__}')

    ##  CASE_2 ###
    showCase2 = st.checkbox('CASE_2', help="Help message CASE_2")
    greatExpender('Info on CASE_2')
    if showCase2:
        st.markdown('**CASE_2**')
        
        # NOTE MODEL
        year_slider = st.slider('slider', 1974, 2018, 1998, 1)
        st.write("year_slider :", year_slider)
        df = poverty[poverty['is_country'] & poverty['year'].eq(year_slider)]
        st.write(df)


        # year_slider = st.slider('slider', 1974, 2018, 1998, 5)
        year_cluster_slider = st.slider('Select the year:', 1974, 2018, 1998, 5)
        st.write("year_cluster_slider :", year_cluster_slider)

        ncluster_cluster_slider = st.slider(
        'Select the number of clusters:', 1, 16, 2, 1)
        st.write("ncluster_cluster_slider :", ncluster_cluster_slider)



    ###  CASE_3 ###
    showCase3 = st.checkbox('CASE_3', help="Help message CASE_3")
    greatExpender('Info on CASE_3')
    if showCase3:
        st.markdown('**CASE_3**')

        ## HACK 0
        years = range(1974, 2019, 5)
        for year in (range(1974, 2019, 5)):
            st.write(year)

        ## HACK 1
        map_zoom = st.selectbox('Zoom level',['<select>', 12, 11, 10, 9, 8, 7], 0)  # default value = index 0
        if map_zoom != '<select>':
            # st.map(data, zoom=map_zoom)
            st.write(map_zoom)

        ## HACK 2
        options = ("male", "female")
        index = st.selectbox("selectbox", range(len(options)), format_func=lambda x: options[x])

        st.write("option:", options[index])
        st.write("index:", index)

        ## HACK 3
        indicator = st.checkbox('indicator')
        if not indicator:
                st.warning('You must choose an indicator')
        else:
                st.info('You  choose an indicator')

        ## HACK 4

        # DataFrame.isnull Alias of isna.
        # DataFrame.isna() :: Detect missing values.

        # DataFrame.all() :: Return whether all elements are True, potentially over an axis. Returns True unless there at least one element within a series or along a Dataframe axis that is False or equivalent(e.g. zero or empty).

        # DataFrame.any() :: Return whether any element is True, potentially over an axis. Returns False unless there is at least one element within a series or along a Dataframe axis that is True or equivalent (e.g. non-zero or non-empty).


        batman_df = pd.DataFrame(
            dict(
            age=[5, 6, np.NaN],
            born=[pd.NaT, pd.Timestamp('1939-05-27'), pd.Timestamp('1940-04-25')],
            name=['Alfred', 'Batman', ''],
            toy=[None, 'Batmobile', 'Joker']
                )
            )

        st.write(batman_df)
        st.write(batman_df.isna())
        st.write(batman_df.isna().all())
        st.write(batman_df.isna().all().any())

        ## https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.isna.html


        
        


# below
if __name__ == '__main__':
    main()
    
    # indicators
    detectVersion()
