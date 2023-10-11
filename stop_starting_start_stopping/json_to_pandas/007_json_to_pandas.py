#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
[env]
To activate this environment, use :: conda activate pandas_ga_1
To deactivate an active environment, use :: conda deactivate
# you have created a env with all the required packages
source activate pandas_ga_1


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/json_to_pandas


[file]
# to compute
python 007_json_to_pandas.py

# to show
streamlit run 007_json_to_pandas.py

[source]
https://plotly.com/python/pie-charts/#pie-chart-with-plotly-express
https://plotly.com/python/sunburst-charts/


'''


import requests
import numpy as np
import json
import pandas as pd
from datetime import datetime
import matplotlib.pyplot as plt
# importing packages
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go

# to show
import streamlit as st

# SOURCE
FILE_JSON_SOURCE = 'data/fake_stats_response_def_2.json'


with open(FILE_JSON_SOURCE) as project_file:
    data = json.load(project_file)

df = pd.json_normalize(data)


# View the first ten rows
# df.head(10)
# print(df.head(10))
# print(df.columns)

# 'id', 'brand', 'lang', 'count', 'year', 'month', 'day'
# RFI
# print('\n---version')
# for p in [np, pd, sns, requests, json]:
#     print(f'{p.__name__:-<30}v{p.__version__}')

# print('\n---result')

# columns = ['brand', 'lang', 'count', 'year', 'month', 'day']
# df_stats = df[columns]

# print(df_stats.describe)  
# print(df_stats.head(20))
# output :: [366 rows x 6 columns]>


st.title ('Pies Examples')

# example_1
# df = px.data.gapminder().query("year == 2007").query("continent == 'Europe'")
# df.loc[df['pop'] < 2.e6, 'country'] = 'Other countries' # Represent only large countries
# fig = px.pie(df, values='pop', names='country', title='Population of European continent')
# fig.show()
# st.write(fig)

# example_2
# labels = ['Oxygen', 'Hydrogen', 'Carbon_Dioxide', 'Nitrogen']
# values = [4500, 2500, 1053, 500]
# fig = go.Figure(data=[go.Pie(labels=labels, values=values)])

# fig.show()
# st.write(fig)

# example_3

# View the first ten rows
# df.head(10)
# st.write(df.head(10))
# st.write(df.tail(10))
# st.write(df.columns)

# set_1
columns = df['lang']
values = df['count']


# set_2
# columns = df['brand']
# values = df['count']

# set_3
# columns = df['lang']
# values = df['year']


fig = go.Figure(data=[go.Pie(labels=columns, values=values)])
st.write(fig)

# https://plotly.com/python/pie-charts/#pie-chart-with-plotly-express
# https://platoaistream.net/plato-data/interactive-plots-in-python-with-plotly-a-complete-guide/
# https://www.siegelgale.com/brand-naming-8-great-fake-company-names/
