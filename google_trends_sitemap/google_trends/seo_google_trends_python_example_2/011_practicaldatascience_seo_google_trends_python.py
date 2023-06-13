#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name google_trends python=3.9.13
conda info --envs
source activate google_trends
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_google_trends.txt


# to install
pip install -r requirements_google_trends.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/seo_google_trends_python_example_2/

[file]
python 011_practicaldatascience_seo_google_trends_python.py
streamlit run 011_practicaldatascience_seo_google_trends_python.py



# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

# show graphs
pip install plotly

# for jupyter
pip install matplotlib
pip install seaborn



Source: https://practicaldatascience.co.uk/data-science/how-to-analyse-search-traffic-using-the-google-trends-api


"""

# import the TrendReq method from the pytrends request module
import pytrends
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt
import seaborn as sns
from pytrends.request import TrendReq

# basic imports
import streamlit as st

# check values_conf.py for credentials file
import config_values.values_conf as conf




# EXAMPLE_1 (YEP)
# py_trend = TrendReq()
# print ('\n\n--- RESULT ')
# print(py_trend)

"""
Source:  https://practicaldatascience.co.uk/data-science/how-to-analyse-search-traffic-using-the-google-trends-api
# Trending searches

df = pt.trending_searches()
df.head(5)

df = pt.trending_searches(pn='united_kingdom')
df.head(5)

"""

# EXAMPLE_1 (YEP, python)
# pt = TrendReq()
# df = pt.trending_searches()
# print('\n\n--- RESULT ')
# print(df.head(5))
# print(df)

# ATTEMPT_1
# convert dataframe to numpy array
# print(df.values)

# ATTEMPT_2
# Pandas dataframe to numpy array:
# df.to_numpy()
# print(df.to_numpy())

# EXAMPLE_1 (YEP, python)
# pt = TrendReq()
# df = pt.trending_searches()

# convert values into a list
# keywords = df.values
# keywords = df.to_numpy()

# enumerate kws
# keywords_count = len(keywords)
# for i, keyword in enumerate(keywords):
    # st.code(keyword)
    # if i == keywords_count - 1:
        # st.code(' '.join(keyword))
    # else:
        # st.code(' '.join(keyword) + ',')

# enumerate kws and print in a list
# keywords_only = [item[0] for item in keywords]
# result = ', '.join(keywords_only[:-1]) + ', ' + keywords_only[-1]
# print('\n\n--- RESULT ')
# print(result)
# st.code(result)

# EXAMPLE_2 (YEP, python)
# pt = TrendReq()
# df = pt.trending_searches(pn='united_kingdom')
# df = pt.trending_searches(pn='united_states')
# print(df.head(5))
# print(df.values)

"""
# EXAMPLE_3 (YEP, python)
# Interest over time
pt = TrendReq()
pt.build_payload(['testicular cancer', 'movember'])
df = pt.interest_over_time()
# df.head()
# print(df)
df.plot()
plt.savefig('google_trends_example_2.png')
plt.savefig('google_trends_example_2.pdf')
plt.show()
"""

"""
# EXAMPLE_4 (YEP, python)
# YouTube trends
pt = TrendReq()
pt.build_payload(['IA', 'journalism'], gprop='youtube')
df = pt.interest_over_time()
# df.head()
print(df)
df.plot()
plt.show()
"""

"""
# EXAMPLE_5 (YEP, python)
# Google News trends
pt = TrendReq()
pt.build_payload(['trump', 'clinton'], gprop='news')
df = pt.interest_over_time()
# print(df.head())
# print(df)
df.plot()
plt.show()
"""

"""
# EXAMPLE_5 (YEP, python)
# Google Images trends
pt = TrendReq()
pt.build_payload(['puppies', 'kittens'], gprop='images')
df = pt.interest_over_time()
df.plot()
"""

"""
# EXAMPLE_6 (YEP, python)
# Google Shopping trends
pt = TrendReq()
pt.build_payload(['hats', 'coats', 'bikinis'], gprop='froogle')
df = pt.interest_over_time()
df.plot()
plt.show()
"""

"""
# EXAMPLE_7 (YEP, python)
# Interest by region
pt = TrendReq()
query = 'electric scooters'
pt.build_payload(kw_list=[query])
df = pt.interest_by_region(
    resolution='COUNTRY', inc_low_vol=True, inc_geo_code=True)
scooters = df.sort_values(by=query, ascending=False).head(10)
print(scooters.reset_index())
"""

"""
# EXAMPLE_8 (YEP, python)
pt = TrendReq()
df = pt.top_charts('2002', hl='en-GB', tz=300, geo='GLOBAL')
print(df)
"""

"""
# EXAMPLE_9 (YEP, python)
# Disambiguation
pt = TrendReq()
suggestions = pt.suggestions(keyword='Pandas')
df = pd.DataFrame(suggestions).drop(columns='mid')
# print(df.head())
print(df)
"""

"""
# Related queries
pt = TrendReq()
pt.build_payload(['sklearn', 'pandas', 'python',
                 'data science', 'machine learning'], cat=5)
related = pt.related_queries()
# df = related['data science']['top'].head()
df = related['data science']['rising'].head()

# print(df.head())
print(df)
"""




# DEPOT
# if i == keywords_count - 1:  # Check if it's the last keyword
    #     print(keyword[0])
    # else:
    #     print (keyword[0] + ',')
    
    
# print("\n --- result for hashtags")
# hashtags = [('#' + x[0]) for x in Counter(output).most_common(5)]
# print(' '.join(hashtags))


# keywords_list = df.values
# print(*[item + (', ' if i < len(keywords_list)-1 else '')
#       for i, item in enumerate(keywords_list)])
# df = pt.trending_searches(pn='united_kingdom')
# df.head(5)
