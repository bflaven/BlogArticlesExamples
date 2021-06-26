#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd  /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/006_script_in_script/

[file]
streamlit run streamlit_command_app_7.py


https://blog.streamlit.io/introducing-submit-button-and-forms/
https://blog.streamlit.io/designing-streamlit-apps/
"""
import time
import datetime
from PIL import Image
from numpy import RankWarning
import streamlit as st
import os
import sys
import random


import streamlit as st

st.title('Tooltips in Streamlit')
st.radio("Pick a number", [1, 2, 3], help='Select a number out of 3 choices')

# Tooltips also support markdown
radio_markdown = '''
Select a number, you have **3** choices!
'''.strip()

st.header('Tooltips with Markdown')
st.radio("Pick a number", [1, 2, 3], help=radio_markdown)


my_expander = st.beta_expander("Show some explanations")
my_expander.write('Hello there!')


col1, col2 = st.beta_columns(2)

with col1:
    with st.form('Form1'):
        flavor = st.selectbox('Select flavor', ['Vanilla', 'Chocolate'], key=1)
        intensity = st.slider(label='Select intensity',
                           min_value=0, max_value=100, key=4)
        st.write("SelectBox")
        occupation = st.selectbox(
            "Your Occupation", ['Data Scientist', 'Programmer', 'Doctor', 'Businessman'])
        submitted1 = st.form_submit_button('Submit 1')
        st.write('Press submit to have your name printed below')

        if submitted1:
            st.write(f'flavor :: {flavor}')
            st.write(f'intensity :: {intensity}')
            st.write(f'occupation :: {occupation}')
            
            command_four = "python launcher_4.py " + \
                flavor + " " + str(intensity) +" " + occupation

            st.write(command_four)
            os.system(command_four)

        

with col2:
    with st.form('Form2'):
        flavor = st.selectbox(
            'Select Topping', ['Almonds', 'Sprinkles'], key=2)
        intensity = st.slider(label='Select Intensity',
                           min_value=0, max_value=100, key=3)
        st.write("SelectBox")
        occupation = st.selectbox("Your Occupation", ['Data Scientist', 'Programmer', 'Doctor', 'Businessman'])
        
        
        submitted2 = st.form_submit_button('Submit 2')
        
        if submitted2:
            st.write(f'flavor :: {flavor}')
            st.write(f'intensity :: {intensity}')
            st.write(f'occupation :: {occupation}')
            
            
            command_four = "python launcher_4.py " + \
                flavor + " " + str(intensity) +" " + occupation
        
            st.write(command_four)
            os.system(command_four)



