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
streamlit run streamlit_okr_templates_6.py


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

# st.slider
age = st.slider('How old are you?', 0, 130, 25)
st.write("I'm ", age, 'years old')

# st.metric
col1, col2, col3 = st.columns(3)
col1.metric("Temperature", "70 °F", "1.2 °F")
col2.metric("Wind", "9 mph", "-8%")
col3.metric("Humidity", "86%", "4%")



