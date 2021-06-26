#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/010_streamlit_design/


[file]
streamlit run streamlit_design_1.py

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

# layout="centered",

# table
st.title("Using table")
for i in range(1, 10):
    cols = st.beta_columns(4)
    cols[0].write(f'{i}')
    cols[1].write(f'{i * i}')
    cols[2].write(f'{i * i * i}')
    cols[3].write('x' * i)


def my_widget(key):
    st.subheader('subheader ' + key)
    clicked = st.button("Click me " + key)

    
st.title("Using button")

# This works in the main area
clicked = my_widget("One")

# And within an expander
my_expander = st.beta_expander("Expand", expanded=True)
with my_expander:
    clicked = my_widget("Two")

# AND in st.sidebar!
with st.sidebar:
    clicked = my_widget("Three")

    
    
st.title("Using image")
# image Use columns to compare things side-by-side
image = "garden_mountain_and_river_20.jpg"
col1, col2 = st.beta_columns(2)

original = Image.open(image)
col1.header("Original")
col1.image(original, use_column_width=True)

grayscale = original.convert('LA')
col2.header("Grayscale")
col2.image(grayscale, use_column_width=True)



# Space out the maps so the first one is 2x the size of the other three
# c1, c2, c3, c4 = st.beta_columns((2, 1, 1, 1))



