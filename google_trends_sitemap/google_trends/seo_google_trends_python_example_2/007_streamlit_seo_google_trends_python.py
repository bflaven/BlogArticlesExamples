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
streamlit run 007_streamlit_seo_google_trends_python.py



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

HEAD_KEY_FIGURES_1 = conf.HEAD_KEY_FIGURES_1
HEAD_KEY_FIGURES_2 = conf.HEAD_KEY_FIGURES_2
HEAD_KEY_FIGURES_3 = conf.HEAD_KEY_FIGURES_3


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


# SelectBox
st.write("SelectBox")
occupation = st.selectbox(
	"Your Occupation", ['Data Scientist', 'Programmer', 'Doctor', 'Businessman'])
st.write("You selected this option", occupation)

# MultiSelect
st.write("MultiSelect")
location = st.multiselect("Where do you stay", ("London",
                                                "New York", "Accra", "Kiev", "Berlin", "New Delhi"))
st.write("You selected", len(location), "location")
st.write("The cities are: ", location)

# Slider
st.write("Slider")
salary = st.slider("What is your salary", 1000, 10000)
st.write("Your salary is : ", salary)


# Radio Button
status = st.radio("Label What is your status", ('Active', 'Inactive'))
if status == 'Active':
	st.info("Active is checked")
else:
	st.warning("Inactive is checked")

# Text Input
st.write("Text Input")
st.markdown("**Text Input**")
name = st.text_input("Enter Name", "Type Here...")
if st.button('Submit'):
    result = name.title()
    st.success(result)
else:
    st.write("Press the above button..")

# Text Area
c_text = st.text_area("Title Enter Text", "Placeholder Type Here...")
if st.button('Analyze'):
    # c_result = c_text.title()
    st.success(c_text)
else:
    st.info("Press the above button..")


# EXAMPLE_13 (YEP)
trend_show = TrendReq(hl='en-US', tz=360)

# dp_df = trend_show.suggestions('donald trump')
# dp_df = trend_show.suggestions('sex')
dp_df = trend_show.suggestions('soup')


dp_df = pd.DataFrame(dp_df)
# print('\n\n--- RESULT EXAMPLE_13 ')
# print(dp_df)
st.write(dp_df)
