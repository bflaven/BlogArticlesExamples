#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/streamlit_eda_made_easy_2/


[file]
streamlit run 001_all_streamlit_webapp_for_data_science.py

# installation required
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling


"""

import streamlit as st
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import datetime as dt
from streamlit_lottie import st_lottie

# import pandas_profiling as pp
# from pandas_profiling import ProfileReport
# from streamlit_pandas_profiling import st_profile_report

# personal configuration
import config_values.values_conf as conf

### 1. VALUES ###
SOURCE_PATH_TREE = conf.SOURCE_PATH_TREE

def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()


lottie_tree = load_lottieurl(
    'https://assets7.lottiefiles.com/temp/lf20_yww8EW.json')
st_lottie(lottie_tree, speed=1, height=100, key="initial")

st.title('SF Trees')
st.write('This app analyses trees in San Francisco using'
         ' a dataset kindly provided by SF DPW. The '
         'histogram below is filtered by tree owner.')

#load trees dataset, add age column in days
trees_df = pd.read_csv(SOURCE_PATH_TREE)
trees_df['age'] = (pd.to_datetime('today') -
                   pd.to_datetime(trees_df['date'])).dt.days
#add tree owner filter to sidebar, then filter, get color
owners = st.sidebar.multiselect(
	'Tree Owner Filter', trees_df['caretaker'].unique())
graph_color = st.sidebar.color_picker('Graph Colors')
if owners:
	trees_df = trees_df[trees_df['caretaker'].isin(owners)]

#group by dbh for leftmost graph
df_dbh_grouped = pd.DataFrame(trees_df.groupby(['dbh']).count()['tree_id'])

df_dbh_grouped.columns = ['tree_count']

#define multiple columns, add two graphs
# col1, col2 = st.beta_columns(2)
col1, col2 = st.columns(2)

with col1:
	st.write('Trees by Width')
	fig_1, ax_1 = plt.subplots()
	ax_1 = sns.histplot(trees_df['dbh'],
                     color=graph_color)
	plt.xlabel('Tree Width')
	st.pyplot(fig_1)
with col2:
	st.write('Trees by Age')
	fig_2, ax_2 = plt.subplots()
	ax_2 = sns.histplot(trees_df['age'],
                     color=graph_color)
	plt.xlabel('Age (Days)')
	st.pyplot(fig_2)

st.write('Trees by Location')
trees_df = trees_df.dropna(subset=['longitude', 'latitude'])
trees_df = trees_df.sample(n=1000, replace=True)
st.map(trees_df)
