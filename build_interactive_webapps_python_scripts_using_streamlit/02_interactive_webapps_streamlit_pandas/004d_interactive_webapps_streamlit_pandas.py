#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_streamlit/02_interactive_webapps_streamlit/

[file]
streamlit run 004d_interactive_webapps_streamlit_pandas.py




# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/


"""

# Source :: ! ARTICLE_1 How to write Web apps using simple Python for Data Scientists? Check https://mlwhiz.com/blog/2019/12/07/streamlit/


# Re-run Application

try:
    import streamlit.ReportThread as ReportThread
    from streamlit.server.Server import Server
    from streamlit.ScriptRunner import RerunException
    from streamlit.ScriptRequestQueue import RerunData

except Exception:
    # Streamlit >= 0.65.0
    import streamlit.report_thread as ReportThread
    from streamlit.server.server import Server
    from streamlit.script_runner import RerunException
    from streamlit.script_request_queue import RerunData
    
import streamlit as st
import pandas as pd
import numpy as np
import plotly_express as px

from PIL import Image


# Tips / Best practices
# Clear Cache
from streamlit import caching
caching.clear_cache()


# import warnings
# warnings.filterwarnings('ignore')


'''
# Country, Capital and Continent

This very simple webapp allows you to select and visualize countries from certain continents
'''
df = st.cache(pd.read_csv)("data/world_en_full.csv")
# values avalaible
# id,name,tld,cca2,capital,callingCode,continent
df = pd.read_csv("data/world_en_full.csv")

countries = st.sidebar.multiselect('Country ?', df['name'].unique())

capitals = st.sidebar.multiselect(
    'Show Capitals from Countries?', df['capital'].unique())

continents = st.sidebar.multiselect(
    'Show continents from Countries?', df['continent'].unique())

# new_df = df[(df['name'].isin(countries)) & (df['capital'].isin(capitals)]

# new_df = df[(df['name'].isin(countries)) & (df['continent'].isin(continents)) & (df['capital'].isin(capitals))]

new_df = df[ (df['continent'].isin(continents)) ]

st.write(new_df)    

# debug
if new_df.empty:
    st.write('')
else:
    # st.write(' new_df OK')
    # Create distplot with custom bin_size
    fig = px.scatter(new_df, x='id', y='callingCode', color='continent')
    '''
    ### Here is a simple chart between Continent and Country name
    '''
    st.plotly_chart(fig)

    
