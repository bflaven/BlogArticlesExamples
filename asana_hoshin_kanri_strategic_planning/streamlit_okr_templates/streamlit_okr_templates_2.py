#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/streamlit_okr_templates/


[FILE]
streamlit run streamlit_okr_templates_2.py


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

# check values_conf.py for credentials file
import config_values.values_conf as conf

### 1.3 TEXT_HELP ###
TEXT_HELP_1 = conf.TEXT_HELP_1
TEXT_HELP_2 = conf.TEXT_HELP_2
TEXT_HELP_3 = conf.TEXT_HELP_3



col1, col2, col3 = st.columns(3)


with col1:
   st.header("col1")
   st.code("col1")

with col2:
   st.header("col2")
   st.code("col2")

with col3:
   st.header("col3")
   st.code("col3")

st.markdown(f'{TEXT_HELP_1}')
