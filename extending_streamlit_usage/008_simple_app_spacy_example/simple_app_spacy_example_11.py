#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/simple_app_spacy_example/



[file]
streamlit run simple_app_spacy_example_11.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

python -m spacy download en_core_web_lg


"""

import spacy
from spacy_streamlit import visualize_similarity

nlp = spacy.load("en_core_web_lg")
visualize_similarity(nlp, ("pizza", "fries"))


