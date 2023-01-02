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
streamlit run streamlit_okr_templates_4.py


[INSTALL]
pip install streamlit --upgrade


[DOC]
https://docs.streamlit.io/library/api-reference

https://docs.streamlit.io/knowledge-base/tutorials/databases/postgresql


"""
import time
import datetime
from PIL import Image
from numpy import RankWarning
import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px

# check values_conf.py for credentials file
import config_values.values_conf as conf


TITLE_APP = conf.TITLE_APP

st.header(f'{TITLE_APP}')


### 1.3 TEXT_HELP ###
HEAD_C1_LABEL = conf.HEAD_C1_LABEL
HEAD_C2_LABEL = conf.HEAD_C2_LABEL
HEAD_C3_LABEL = conf.HEAD_C3_LABEL
HEAD_C4_LABEL = conf.HEAD_C4_LABEL
HEAD_C5_LABEL = conf.HEAD_C5_LABEL
HEAD_C6_LABEL = conf.HEAD_C6_LABEL
HEAD_C7_LABEL = conf.HEAD_C7_LABEL


col1, col2, col3, col4, col5, col6, col7 = st.columns(7)



with col1:
   st.write(f'{HEAD_C1_LABEL}')
   st.code(f'{HEAD_C1_LABEL}')

with col2:
   st.write(f'{HEAD_C2_LABEL}')
   st.code(f'{HEAD_C2_LABEL}')

with col3:
   st.write(f'{HEAD_C3_LABEL}')
   st.code(f'{HEAD_C3_LABEL}')


with col4:
   st.write(f'{HEAD_C4_LABEL}')
   st.code(f'{HEAD_C4_LABEL}')

with col5:
   st.write(f'{HEAD_C5_LABEL}')
   st.code(f'{HEAD_C5_LABEL}')

with col6:
   st.write(f'{HEAD_C6_LABEL}')
   st.code(f'{HEAD_C6_LABEL}')
   
with col7:
   st.write(f'{HEAD_C7_LABEL}')
   st.code(f'{HEAD_C7_LABEL}')

# Dataset we need to import
DATA_URL = (
    "data/objectives_sample_1.csv"
)

DATA_URL_KR = (
    "data/objectives_kr_sample_1.csv"
)


@st.cache(persist=True)
def load_data(nrows):
    data = pd.read_csv(DATA_URL, nrows=nrows)
    return data


@st.cache(persist=True)
def load_data_kr(nrows):
    data_kr = pd.read_csv(DATA_URL_KR, nrows=nrows)
    return data_kr


# load first 10000 rows
data = load_data(10000)
data_kr = load_data_kr(10000)


st.write('Objectives')
if st.checkbox("Show Raw Data for Objectives", False):
    st.subheader('data')
    st.write(data)

st.write('Key Result')
if st.checkbox("Show Raw Data for Key Result", False):
    st.subheader('data_kr')
    st.write(data_kr)
