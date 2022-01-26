#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# you have created a env with all the required packages
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate




[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_bert_streamlit/examples_eda_2/



[file]
streamlit run 002_all_streamlit_webapp_for_data_science.py

# installation required
streamlit_pandas_profiling
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling

https://geekyturtles.com/blogs/exploratory-data-analysis-using-pandas-profiling/
https://www.kaggle.com/sootersaalu/amazon-top-50-bestselling-books-2009-2019


"""

import streamlit as st
from streamlit_lottie import st_lottie
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pandas_profiling import ProfileReport
from streamlit_pandas_profiling import st_profile_report

# required for personal configuration
import config_values.values_conf as conf

### 1. VALUES ###
LOTTIE_PENGUIN = conf.LOTTIE_PENGUIN
SOURCE_PATH_PENGUIN = conf.SOURCE_PATH_PENGUIN

def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()


lottie_penguin = load_lottieurl(LOTTIE_PENGUIN)
st_lottie(lottie_penguin, speed=1.5, width=800, height=400)

st.title("Palmer's Penguins")
st.markdown('Use this Streamlit app to make your own scatterplot about penguins!')

selected_x_var = st.selectbox('What do want the x variable to be?',
                              ['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g'])
selected_y_var = st.selectbox('What about the y?',
                              ['bill_depth_mm', 'bill_length_mm', 'flipper_length_mm', 'body_mass_g'])


# DISABLE THE UPLOAD
# penguin_file = st.file_uploader('Select Your Local Penguins CSV')
# if penguin_file is not None:
# 	penguins_df = pd.read_csv(penguin_file)
# else:
# penguins_df = pd.read_csv(SOURCE_PATH_PENGUIN)


penguins_df = pd.read_csv(SOURCE_PATH_PENGUIN)


sns.set_style('darkgrid')
markers = {"Adelie": "X", "Gentoo": "s", "Chinstrap": 'o'}
fig, ax = plt.subplots()
ax = sns.scatterplot(data=penguins_df, x=selected_x_var,
                     y=selected_y_var, hue='species', markers=markers,
                     style='species')
plt.xlabel(selected_x_var)
plt.ylabel(selected_y_var)
plt.title("Scatterplot of Palmer's Penguins")
st.pyplot(fig)

st.title('Pandas Profiling of Penguin Dataset')



penguin_profile = st.checkbox('It will launch the creation of the report',
                              help="It will launch the creation of the report")

if penguin_profile:
    st.warning("just disable for the moment")
    # load profile if needed
    # penguin_profile = ProfileReport(penguins_df, explorative=True)
    # st_profile_report(penguin_profile)


# Text
# st.success("Successful")
# st.info("This is an info alert ")
# st.warning("This is a warning ")
# st.error("This shows an error ")
# st.exception("This shows an exception")
