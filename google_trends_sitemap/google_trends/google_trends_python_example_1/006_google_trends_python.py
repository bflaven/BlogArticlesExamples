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
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/

[file]
python 006_google_trends_python.py

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


Source: https://hackernoon.com/how-to-use-google-trends-api-with-python

Source: https://pypi.org/project/pytrends/


Article : https://www.france24.com/en/europe/20230513-without-water-we-are-nothing-spain-s-crippling-drought-reignites-tensions-over-tagus-river

"""

# import the TrendReq method from the pytrends request module
import pytrends
from pytrends.request import TrendReq
import pandas as pd

import plotly.express as px

# --- 1 --- Interest Over Time


# Define the keywords list
kw_list = ["Spain", "water", "drought"]

# Build the payload for the keywords list
pytrends = TrendReq()
pytrends.build_payload(kw_list)

# Retrieve the interest over time for the keywords list
interest_over_time_df = pytrends.interest_over_time()

# Display the resulting data
# print(interest_over_time_df)

# Interest over Time
data = interest_over_time_df.reset_index()

"""
fig = px.line(data, x="date", y=["Spain", "water", "drought"],
              title='Keyword Web Search Interest Over Time')
fig.show()
"""
# --- 2 --- Historical Hourly Interest


# historical_hourly_interest_df = pytrends.get_historical_interest(kw_list, year_start=2021, month_start=9, day_start=1, hour_start=0, year_end=2021, month_end=9, day_end=30, hour_end=0, cat=0, sleep=0)

# historical_hourly_interest_df = pytrends.get_historical_interest(kw_list, year_start=2018, month_start=1, day_start=1, hour_start=0, year_end=2018, month_end=2, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)



# print(historical_hourly_interest_df)

