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
streamlit run 006_all_streamlit_webapp_for_data_science.py

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
from pandas_profiling import ProfileReport

# require in this file


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

    # NOTE
    # st.write(income_share_df)
    # st.code(income_share_df.describe)
    # st.code(income_share_df.columns)

    # NOTE
    # show in the console
    # print(income_share_df.describe)

    # NOTE columns for income_share_df
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


    # income_share_df.columns = [re.sub('\d Income share held by ', ' ', col).title()
    #                         for col in income_share_df.columns]

    # st.code(income_share_df.columns)
    # st.write(income_share_df)

    # [3:-1] the 6 first columns starting from the end and 3 first rows from the point
    # [2:-2] the 5 first columns starting from the end and 2 first rows from the point
    # [1:-2] the 5 first columns and 4 first rows from the point
    # [0:-2] the 5 first columns starting from the end and 5 first rows from the point
    # [:-2] the 5 first columns starting from the end and 5 first rows from the point


    # income_share_cols = income_share_df.columns[:-2]
    # st.write(income_share_cols)
    # st.code(income_share_df.describe)


    perc_pov_cols = poverty.filter(regex='Poverty gap').columns
    # st.code(perc_pov_cols)
    # st.write(perc_pov_cols)
    # perc_pov_df = poverty[poverty['is_country']].dropna(subset=perc_pov_cols)
    # perc_pov_df.sort_values(by=['year'], inplace=True, ascending=True)
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
    # perc_pov_years = sorted(set(perc_pov_df['year']))
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
        
        # NOTE model_1 using multiselect
        COUNTRIES = poverty_data["Country Name"].unique()
        COUNTRIES_SELECTED = st.multiselect(
            'Choose one or more countries', COUNTRIES, help="This dropwdown menu show a list of 169 countries extracted from the PovStatsData.csv file")
        COUNTRIES_SELECTED_LENGTH = (len(COUNTRIES_SELECTED))

        # DEBUG use code easier
        st.code(f'COUNTRIES :: {COUNTRIES}')
        st.code(f'COUNTRIES_SELECTED :: {COUNTRIES_SELECTED}')
        st.code(f'COUNTRIES_SELECTED_LENGTH :: {COUNTRIES_SELECTED_LENGTH}')
    
            
            

    ##  CASE_3 ###
    showCase3a = st.checkbox('CASE_3', help="Help message CASE_3")
    greatExpender('Info on CASE_3')
    if showCase3a:
        st.markdown('**CASE_3**')
        ## NOTE model_2 using selectbox
        COUNTRIES = poverty_data["Country Name"].unique()
        COUNTRIES_SELECTED = st.selectbox('Select countries', range(
            len(COUNTRIES)), format_func=lambda x: COUNTRIES[x])
        poverty_data = poverty_data.loc[poverty_data["Country Name"]
                                        == COUNTRIES[COUNTRIES_SELECTED]]

        ## DEBUG use code easier
        st.code(f'COUNTRIES :: {COUNTRIES}')
        st.code(f'COUNTRIES_SELECTED :: {COUNTRIES_SELECTED}')
        st.code(poverty_data)

        
        

    ###  CASE_4 ###
    showCase4 = st.checkbox('CASE_4', help="Help message CASE_4")
    greatExpender('Info on CASE_4')
    if showCase4:
        st.markdown('**CASE_4**')
        
        ## V1 with multiselect
        # indicators = poverty.columns[3:54]
        # indicator_dropdown = st.multiselect('Choose an indicator', indicators,
        #                                     help="This dropdown menu show a list of indicators")
        # indicator_dropdown_length = (len(indicator_dropdown))

        # if indicator_dropdown_length > 0:
        #     st.write(indicator_dropdown)

        


    ###  CASE_5 ###
    showCase5 = st.checkbox('CASE_5', help="Help message CASE_5")
    greatExpender('Info on CASE_5')
    if showCase5:
        st.markdown('**CASE_5**')
        
        ##V2 with select
        indicators = poverty.columns[3:54]
        label_indicators = poverty.columns[3:54]

        # by default indicator_dropdown: 0, Annualized growth in per capita real survey mean consumption or income, bottom 40% (%)
        index_indicators = st.selectbox('Choose an indicator', range(len(
            label_indicators)), format_func=lambda x: label_indicators[x], help="This dropdown menu show a list of indicators")
        
        st.code(index_indicators)

        ## by default indicator_dropdown: 5, GINI index (World Bank estimate)
        index_indicators = st.selectbox('Choose an indicator', range(len(
            label_indicators)), 5, format_func=lambda x: label_indicators[x], help="This dropdown menu show a list of indicators")

        ## DEBUG
        # st.write("range for the nb of items :", range(len(
        #     label_indicators)))
        # st.write("list of nb of items :", list(range(len(
        #     label_indicators))))

        # st.write("index_indicators:", index_indicators)
        # st.write("indicators:", label_indicators[index_indicators])

        def display_generic_map_chart(indicator):
            df = poverty[poverty['is_country']]
            fig = px.choropleth(df, locations='Country Code',
                                color=indicator,
                                title=indicator,
                                width=800,
                                height=600,
                                hover_name='Country Name',
                                color_continuous_scale='cividis',
                                animation_frame='year'
                                )
            fig.layout.geo.showframe = False
            fig.layout.geo.showcountries = True
            fig.layout.geo.projection.type = 'natural earth'
            fig.layout.geo.lataxis.range = [-53, 76]
            fig.layout.geo.lonaxis.range = [-138, 167]
            fig.layout.geo.landcolor = 'white'
            fig.layout.geo.bgcolor = '#E5ECF6'
            fig.layout.paper_bgcolor = '#E5ECF6'
            fig.layout.geo.countrycolor = 'gray'
            fig.layout.geo.coastlinecolor = 'gray'
            fig.layout.coloraxis.colorbar.title = multiline_indicator(
                indicator)

            series_df = series[series['Indicator Name'].eq(indicator)]
            if series_df.empty:
                markdown = "No details available on this indicator"
            else:
                limitations = series_df['Limitations and exceptions'].fillna(
                    'N/A').str.replace('\n\n', ' ').values[0]

                ## begin  markdown
                markdown = f"""
                    ## {series_df['Indicator Name'].values[0]}

                    {series_df['Long definition'].values[0]}

                    * **Unit of measure** {series_df['Unit of measure'].fillna('count').values[0]}
                    * **Periodicity** {series_df['Periodicity'].fillna('N/A').values[0]}
                    * **Source** {series_df['Source'].values[0]}

                    ### Limitations and exceptions:

                    {limitations}

                    """
                ## end  markdown
            # return fig, markdown
            st.write(fig)
            st.write(markdown)

        indicator = label_indicators[index_indicators]
        display_generic_map_chart(indicator)


# below
if __name__ == '__main__':
    main()
    
    # indicators
    detectVersion()
