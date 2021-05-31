#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_streamlit/02_interactive_webapps_streamlit/

[file]
streamlit run 003a_interactive_webapps_streamlit_pandas.py




# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/


"""

# Source :: ! ARTICLE_1 How to write Web apps using simple Python for Data Scientists? Check https: // mlwhiz.com/blog/2019/12/07/streamlit/



import streamlit as st
import pandas as pd
import numpy as np

# df = pd.read_csv("data/world_en.csv")
df = pd.read_csv("data/world_en_full.csv")

if st.checkbox('Show dataframe'):
    st.write(df)




