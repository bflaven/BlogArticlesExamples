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
python get_google_trends_geo_names_output_4.py

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

In python convert these data into a content that is readable in a loop AM; Armenia
AO; Angola
AQ; Antarctica
AR; Argentina


This code uses a dictionary called data to store the country codes as keys and country names as values. The loop iterates over each key-value pair in the dictionary and prints the formatted output, separating the code and country name with a semicolon.




"""



data = {
    'AM': 'Armenia',
    'AO': 'Angola',
    'AQ': 'Antarctica',
    'AR': 'Argentina'
}

for code, country in data.items():
    print(f"{code}; {country}")


