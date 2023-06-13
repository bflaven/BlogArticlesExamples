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
python 003_seo_google_trends_python.py

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



# EXAMPLE_7 (YEP)
kw_list = ['Joe Biden', 'Donald Trump', 'Hillary Clinton', 'Bernie Sanders', 'Elizabeth Warren', 'Jane Sanders', 'Tulsi Gabbard', 'Barack Obama']

# create a nested list so that “build_load()” method
kw_group = list(zip(*[iter(kw_list)]*1))
# print(kw_group)

# to turn every tuple into a list
kw_grp_list = [list(x) for x in kw_group]
print(kw_grp_list)

trend_show = TrendReq(hl='en-US', tz=360)
dict = {}
i = 0
for kw in kw_grp_list:
    trend_show.build_payload(kw, timeframe='today 3-m', geo='US')
    dict[i] = trend_show.interest_over_time()
    i += 1

trend_frame = pd.concat(dict, axis=1)
trend_frame.columns = trend_frame.columns.droplevel(0)
trend_frame = trend_frame.drop('isPartial', axis=1)
print(trend_frame)


trace = [go.Bar(
    x=trend_frame.index,
    y=trend_frame[col], name=col) for col in trend_frame.columns[0:2]]

data = trace
layout = go.Layout(title='Post', showlegend=True)
fig = go.Figure(data=data, layout=layout)

fig.show()
