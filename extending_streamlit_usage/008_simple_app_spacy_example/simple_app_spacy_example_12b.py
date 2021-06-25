#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/simple_app_spacy_example/


[file]
streamlit run simple_app_spacy_example_12b.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

python -m spacy download en_core_web_lg


"""

from PIL import Image
import os
from spacy_streamlit import visualize_ner
from spacy_streamlit import visualize_similarity
from spacy_streamlit import visualize_tokens
import datetime
import time
import streamlit as st
import spacy_streamlit
import spacy
# nlp = spacy.load('en_core_web_sm')
nlp = spacy.load('en_core_web_lg')

def main():
    st.header("Exploring Spacy")
    st.text("Visualize example")
    
    text = st.text_area("Text to analyze", "Type Here ..", height=200)
    if st.button("Visualize"):
        st.success("Successful visualize")
        doc = nlp(text)
        visualize_ner(doc, labels=nlp.get_pipe("ner").labels)
    else:
            st.warning("Doc is empty for visualize")

if __name__ == '__main__':
	main()
