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
cd /Users/brunoflaven/Documents/01_work/blog_articles/streamlit_eda_made_easy/streamlit_eda_made_easy_2/


[file]
streamlit run 008_all_streamlit_webapp_for_data_science.py

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
TITLE_APP_EXPERIMENTAL = conf.TITLE_APP_EXPERIMENTAL
APP_BASELINE_EXPERIMENTAL = conf.APP_BASELINE_EXPERIMENTAL

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

    ShowLottie('pirate', 1.5, 400, 200)

    ###  APP LAYOUT
    st.title(TITLE_APP_EXPERIMENTAL)
    st.subheader(APP_BASELINE_EXPERIMENTAL)



    # https://github.com/streamlit/streamlit/issues/798
    # https://github.com/streamlit/streamlit/pull/1169
    # sessions = Server.get_current()._session_info_by_id
    # session_id_key = list(sessions.keys())[0]
    # session = sessions[session_id_key]
    # urlPara = session.ws.request.connection.params.urlpara

    # st.write("URL PARAM:"+str(urlPara))

    

    app_state = st.experimental_get_query_params()
    # fetch the first item in each query string as we don't have multiple values for each query string key in this example
    app_state = {k: v[0] if isinstance(
        v, list) else v for k, v in app_state.items()}

    # [1] Checkbox
    default_checkbox = eval(app_state["checkbox"]
                            ) if "checkbox" in app_state else False
    checkbox1 = st.checkbox("Are you really happy today?",
                            key="checkbox1", value=default_checkbox)
    app_state["checkbox"] = checkbox1
    st.experimental_set_query_params(**app_state)
    st.markdown("")

    # [2] Radio
    radio_list = ['Eat', 'Sleep', 'Both']
    default_radio = int(app_state["radio"]) if "radio" in app_state else 0
    genre = st.radio("What are you doing at home during week-end?",
                    radio_list, index=default_radio)
    if genre:
            app_state["radio"] = radio_list.index(genre)
            st.experimental_set_query_params(**app_state)
            st.markdown("")

        # [3] Text Input
    default_title = app_state["movie"] if "movie" in app_state else ""
    title = st.text_input('Movie title', value=default_title)
    app_state["movie"] = title
    st.experimental_set_query_params(**app_state)

    # http://localhost:8501/?checkbox=True&radio=2&movie=toto
    # http://localhost:8501/?checkbox=False&radio=0&movie=louise
    # http://localhost:8501/?checkbox=True&radio=1&movie=Robert


# below
if __name__ == '__main__':
    main()
    
    # indicators
    detectVersion()
