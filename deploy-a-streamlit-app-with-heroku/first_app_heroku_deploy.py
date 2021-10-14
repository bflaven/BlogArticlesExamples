#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[env]
List Environments: You can list all the available environments with:
conda info --envs
Activate an Environment : Before you can start using the environment you need to activate it:
source activate streamlit_spacy_1


[path]
cd /Users/brunoflaven/Documents/02_copy/_packt_copycat_coder/deploy-a-streamlit-dashboard-with-heroku/

[file]
streamlit run first_app_heroku_deploy.py


[source]
https://gilberttanner.com/blog/turn-your-data-science-script-into-websites-with-streamlit

https://gilberttanner.com/blog/turn-your-data-science-script-into-websites-with-streamlit



"""

# require in this file
import streamlit as st
import numpy as np
import pandas as pd
import seaborn as sns
import datetime as dt
import matplotlib.pyplot as plt

# from streamlit
import altair as alt

# Add a title
st.title('Attempt streamlit-dashboard app on Heroku ')
# Add some text
st.write('Lauch histogramme from a fake dataframe!')


df = pd.DataFrame(
    np.random.randn(45, 3),
    columns=['John', 'Dave', 'Yuri']
    )

columns = st.multiselect(label='What column to you want to display', options=df.columns)

#check if variable is empty
if not columns:
    st.info("No column selected...")
else:
    st.write(df[columns])
    fig, ax = plt.subplots()
    ax = plt.hist(df[columns])
    st.pyplot(fig)
    
if st.checkbox('Show another fake dataframe\'s example'):
    st.dataframe(pd.DataFrame({
        'first column': [1, 2, 3, 4],
        'second column': [10, 20, 30, 40]
    }))
    









