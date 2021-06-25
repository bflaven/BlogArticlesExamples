#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd  /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/streamlit_design/




[file]
streamlit run streamlit_design_6.py

https://github.com/Jcharis/Streamlit_DataScience_Apps/blob/master/Streamlit_Python_Crash_Course/docs_app.py

https://github.com/Jcharis/Streamlit_DataScience_Apps

pip install streamlit --upgrade

"""
import time
import datetime
from PIL import Image
import streamlit as st

# Title
st.title("Streamlit Crash Course")
# Header
st.header("Simple Header")
# Subheader
st.subheader("Another sub header")

# Text
st.text("For a simple text")

# Markdown
st.markdown("#### A Markdown ")

# Success text
st.success("Successful")

st.info("This is an info alert ")

st.warning("This is a warning ")

st.error("This shows an error ")

# st.exception("This shows an exception")





