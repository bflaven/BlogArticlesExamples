#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/010_streamlit_design/



[file]
streamlit run streamlit_design_2.py

# source
https://blog.streamlit.io/introducing-new-layout-options-for-streamlit/

https://docs.streamlit.io/en/stable/api.html#streamlit.set_page_config

https://www.youtube.com/watch?v=IRr-vaP1thY
https://github.com/Jcharis/streambible
https://blog.jcharistech.com/2020/12/14/deploying-nlp-apps-on-streamlit-sharing/

# command
pip install streamlit --upgrade

"""

# Core Pkgs
import streamlit as st
import streamlit.components.v1 as stc
from PIL import Image
import cv2
import numpy as np

# Use the full page instead of a narrow central column
# st.beta_set_page_config(layout="wide")
st.set_page_config(page_title=None, page_icon=None, initial_sidebar_state="auto", layout="wide")

def my_widget(key):
    st.subheader('Hello there!')
    clicked = st.button("Click me " + key)


# This works in the main area
clicked = my_widget("first")

# And within an expander
my_expander = st.beta_expander("Expand", expanded=True)
with my_expander:
    clicked = my_widget("second")

# AND in st.sidebar!
with st.sidebar:
    clicked = my_widget("third")
