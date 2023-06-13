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
python 001_google_trends_python.py

# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

Source : https://hackernoon.com/how-to-use-google-trends-api-with-python

"""

# connect to google

from pytrends.request import TrendReq

pytrends = TrendReq(hl='en-US', tz=360)

