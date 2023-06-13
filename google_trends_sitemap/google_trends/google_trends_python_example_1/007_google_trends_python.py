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
python 007_google_trends_python.py

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



Source: https://hackernoon.com/how-to-use-google-trends-api-with-python

Source: https://pypi.org/project/pytrends/

Source: https://github.com/DylanTartarini1996/google_trends/blob/main/pytrends_intro.ipynb

Article : https://www.france24.com/en/europe/20230513-without-water-we-are-nothing-spain-s-crippling-drought-reignites-tensions-over-tagus-river

"""

# import the TrendReq method from the pytrends request module
import pytrends
import pandas as pd
import numpy as np
import plotly.express as px
import matplotlib.pyplot as plt
import seaborn as sns
from pytrends.request import TrendReq


kw = ['Coronavirus']
# kw = ['Lebron James']
# kw = ['Taliban']

pytrends = TrendReq()
pytrends.build_payload(kw_list=kw)


# print ('\n\n--- RESULT ')
# print(df.head(50))


df = pytrends.interest_by_region()
df.reset_index(inplace=True)
df.head(50)
f, ax = plt.subplots(figsize=(20, 5))

# Plot the tweet volume for each trend
sns.set_color_codes('pastel')
sns.barplot(x='geoName', y=kw[0], data=df)
plt.xticks(rotation=90)

# Add a legend and informative axis label
ax.set(ylabel='Interest', xlabel=(str('Interest in the word '+kw[0])))
sns.despine(left=True, bottom=True)


