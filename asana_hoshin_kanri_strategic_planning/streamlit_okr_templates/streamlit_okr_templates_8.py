#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

# Conda Environment
conda create --name streamlit-custom python=3.9.7
conda info --envs
source activate streamlit-custom
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/streamlit_okr_templates/


[FILE]
streamlit run streamlit_okr_templates_8.py


[INSTALL]
pip install streamlit --upgrade


[DOC]

See https://pypi.org/project/searchconsole/

While the above focuses on deployed apps, you can also add secrets while developing locally. To do this, add a file called secrets.toml in a folder called .streamlit at the root of your app repo and paste your secrets into that file.

mkdir .streamlit
cd .streamlit
touch secrets.toml


https://docs.streamlit.io/streamlit-cloud/get-started/deploy-an-app/connect-to-data-sources/secrets-management




"""
# first import
import os
import time
import datetime
from PIL import Image
from numpy import RankWarning
import numpy as np
import plotly.express as px
import plotly.figure_factory as ff
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# basic imports
import streamlit as st
import pandas as pd

# imports for search console libraries
import searchconsole
from apiclient import discovery
from google_auth_oauthlib.flow import Flow

# imports for aggrid
from st_aggrid import AgGrid
from st_aggrid import AgGrid
from st_aggrid.grid_options_builder import GridOptionsBuilder
from st_aggrid.shared import JsCode
from st_aggrid import GridUpdateMode, DataReturnMode

# all other imports
import os
# from streamlit_elements import Elements
from streamlit_elements import elements, mui, html


# check values_conf.py for credentials file
import config_values.values_conf as conf

# values
TITLE_APP = conf.TITLE_APP

HEAD_KEY_FIGURES_1 = conf.HEAD_KEY_FIGURES_1
HEAD_KEY_FIGURES_2 = conf.HEAD_KEY_FIGURES_2
HEAD_KEY_FIGURES_3 = conf.HEAD_KEY_FIGURES_3




# Dataset we need to import
DATA_URL = ("data/objectives_kr_sample_2.csv")


###############################################################################

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




###############################################################################

tab1, tab2 = st.tabs(["Main", "About"])


with tab1:
    
    
    # sidebar
    st.write("")

    st.sidebar.image("okr_logo_2_500x333.jpg", width=300)

    st.sidebar.markdown("")
    with st.sidebar.form("my_form"):
        st.write("Inside the form")
        slider_val = st.slider("Form slider")
        checkbox_val = st.checkbox("Form checkbox")
        submitted = st.form_submit_button("Submit")
        if submitted:
            st.write("slider", slider_val, "checkbox", checkbox_val)

    st.sidebar.write("Outside the form")

    
    # main
    df = pd.read_csv('https://raw.githubusercontent.com/fivethirtyeight/data/master/airline-safety/airline-safety.csv')
    
    
    
    
    # df = pd.read_csv(DATA_URL)

    col1, col2, col3 = st.columns(3)
    col1.metric(HEAD_KEY_FIGURES_1, "4")
    col2.metric(HEAD_KEY_FIGURES_2, "16")
    col3.metric(HEAD_KEY_FIGURES_3, "36")


st.write('**Objective by type**')
# + 4. Objective by type
# ! EXAMPLE
# Not started 12.5%
# Done 18.75%
# In progress 68.75%

labels = ['Not started', 'Done', 'In progress']
values = [12.5, 18.75, 68.75]

# Use `hole` to create a donut-like pie chart
fig = go.Figure(data=[go.Pie(labels=labels, values=values, hole=.3)])

st.write(fig)

st.write('**Objective by progress**')

# PLOT_4 BASIC GAUGE
fig = go.Figure(go.Indicator(
    mode="gauge+number",
    value=41,
    domain={'x': [0, 1], 'y': [0, 1]},
    title={'text': "Objective by progress"}))

st.write(fig)
# fig.show()

# PLOT_5 BASIC GAUGE with Steps, Threshold, and Delta
fig = go.Figure(go.Indicator(
    domain={'x': [0, 1], 'y': [0, 1]},
    value=41,
    mode="gauge+number+delta",
    title={'text': "Objective by progress"},
    delta={'reference': 50},
    gauge={'axis': {'range': [None, 100]},
           'steps': [
        {'range': [0, 50], 'color': "lightgray"},
        {'range': [50, 100], 'color': "gray"}],
        'threshold': {'line': {'color': "red", 'width': 4}, 'thickness': 0.75, 'value': 100}}))

st.write(fig)

with tab2:

    st.write("")
    st.write("")

    st.write(
    """

    #### About this app

    **Text coming in readme format**
    
    *More lines*
    
    """
    )
