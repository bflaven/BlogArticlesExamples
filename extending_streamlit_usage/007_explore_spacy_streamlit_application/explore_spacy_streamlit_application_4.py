#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd 01_work/blog_articles/extending_streamlit_usage/explore_spacy_streamlit_application/



[file]
streamlit run explore_spacy_streamlit_application_4.py



# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

"""


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
from PIL import Image
from collections import Counter
from string import punctuation

# *** FUNCTIONS ***
# empty for the moment

# *** MAIN ***
# Use the full page instead of a narrow central column
st.set_page_config(page_title="Complete Spacy NLP Application", page_icon=None,
                   initial_sidebar_state="auto", layout="wide")

def main():
    # st.title("Complete Application")
    st.header("Exploring Spacy")
    
    st.sidebar.info("Make your selection with the checkboxes or the menu")
    menu = ['Home', 'case_1', 'case_2', 'case_3',
            'case_4', 'case_5', 'case_6', 'About']
    choice = st.sidebar.selectbox('Menu', menu)
    # st.sidebar.subheader("About App")
    # st.sidebar.info("More text")

    # st.sidebar.subheader("By")
    # st.sidebar.text("More on flaven.fr")
    # st.sidebar.text("Twitter: @bflaven")
    
    
    	
    if choice == 'Home':
        st.text("") # leave it empty but make the if elif work!
        
    elif choice == 'case_1':
        st.text("text for case_1")
    
        if st.checkbox("checkbox_2"):
            st.subheader("checkbox_2")
            st.text("text for checkbox_2")
            
            
        if st.checkbox("checkbox_3"):
            st.subheader("checkbox_3")
            st.text("text for checkbox_3")
            
    elif choice == 'case_2':
        st.text("text for case_2")
        
            
    elif choice == 'case_3':
        st.text("text for case_3")
        

    elif choice == 'case_4':
        st.text("text for case_4")
        
    # case_5
    elif choice == 'case_5':
        st.text("text for case_5")
        
    # case_4
    elif choice == 'case_6':
        st.text("text for case_6")
        
    
    elif choice == 'About':
        st.text("text for about")
        
        
if __name__ == '__main__':
	main()
 

