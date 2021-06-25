#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/simple_app_spacy_example/


[file]
streamlit run simple_app_spacy_example_8.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

"""


"""
Example using the components provided by spacy-streamlit in an existing app.
Prerequisites:
python -m spacy download en_core_web_sm
"""

import spacy_streamlit
import streamlit as st

# streamlit_app.py

models = ["en_core_web_sm", "en_core_web_md"]
default_text = "Sundar Pichai is the CEO of Google."
spacy_streamlit.visualize(models, default_text)


