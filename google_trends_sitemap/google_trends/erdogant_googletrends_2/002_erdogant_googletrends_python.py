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
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/erdogant_googletrends_2/

[file]
python 002_erdogant_googletrends_python.py

# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

# install
pip install googletrends


Source : https://erdogant.github.io/googletrends/pages/html/Examples.html

"""
# Import
import googletrends as googletrends




# EXAMPLE_1 (YEP)
geo_names = googletrends.get_geo_names()
# print(geo_names)

# EXAMPLE_2 (NOPE)
# search_words = ['bitcoin', 'ethereum']
# geo = ['NL', 'united states']
# date_start = '01-12-2018'
# results = googletrends.temporal(search_words, geo=geo, date_start=date_start)
# googletrends.plot(results)

# EXAMPLE_3 (YEP)
# search_words = ['bitcoin', 'ethereum']
# geo = ['NL', 'united kingdom']
# date_start = '01-12-2019'
# results_spatio = googletrends.spatio(
#     search_words, geo=geo, date_start=date_start)
# googletrends.plot(results_spatio)
