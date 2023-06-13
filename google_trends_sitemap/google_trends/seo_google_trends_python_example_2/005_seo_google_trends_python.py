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
python 005_seo_google_trends_python.py

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



Source: https://www.holisticseo.digital/python-seo/google-trends/

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


# EXAMPLE_9 (YEP)
# trend_show = TrendReq(hl='en-US', tz=360)
# kw_list = ['Donald Trump']
# kw_list = ['Ron DeSantis']
# kw_list = ['Joe Biden', 'Donald Trump']

# df = trend_show.build_payload(kw_list, cat=0, timeframe='today 3-m', geo='US')
# df = trend_show.interest_by_region(
#     resolution='COUNTRY', inc_low_vol=True, inc_geo_code=False)
# print(trend_show)
# print('\n\n--- RESULT ')
# print(df)

# EXAMPLE_10 (YEP)
# trend_show = TrendReq(hl='en-US', tz=360)
# # kw_list = ['Donald Trump']
# kw_list = ['Ron DeSantis']
# trend_show.build_payload(kw_list, cat=0, timeframe='today 3-m', geo='US')
# print('\n\n--- RESULT ')
# print(trend_show.related_topics())

# EXAMPLE_11 (YEP)
# trend_show = TrendReq(hl='en-US', tz=360)
# kw_list = ['Ron DeSantis']
# trend_show.build_payload(kw_list, cat=0, timeframe='today 3-m', geo='US')
# print('\n\n--- RESULT EXAMPLE_11 ')
# print(trend_show.related_queries())

# EXAMPLE_12 (YEP)
# trend_show = TrendReq(hl='en-US', tz=360)
# trend_show.trending_searches(pn='united_kingdom')
# trend_show.trending_searches(pn='france')
# trend_show.trending_searches(pn='italy')
# trend_show.trending_searches(pn='argentina')
# trend_show.trending_searches(pn='russia')
# print('\n\n--- RESULT EXAMPLE_12 ')
# print(trend_show.trending_searches(pn='argentina'))

# EXAMPLE_13 (YEP)
trend_show = TrendReq(hl='en-US', tz=360)

# TRENDING_SEARCHES
dp_df = trend_show.trending_searches(pn='united_kingdom')


# SUGGESTIONS
# dp_df = trend_show.suggestions('donald trump')
# dp_df = trend_show.suggestions('sex')
# dp_df = trend_show.suggestions('soup')



dp_df = pd.DataFrame(dp_df)
print('\n\n--- RESULT ')
print(dp_df)

# pytrends.top_charts(date, hl='en-US', tz=300, geo='GLOBAL')
# trendshow.top_charts(2020-7, hl='en-US', tz=360, geo='TR')



