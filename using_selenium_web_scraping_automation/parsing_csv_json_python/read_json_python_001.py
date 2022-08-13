#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/web_scraping_selenium/parsing_json_python/

[file]
python read_json_python_001.py


# to export requirements
pip freeze > web_scraping_selenium_1.txt


# to install
pip install -r web_scraping_selenium_1.txt


# update conda if needed by running
conda update -n base -c defaults conda


"""
import json
   
# Opening JSON file
f = open('users_data.json',)
   
# returns JSON object as 
# a dictionary
data = json.load(f)
   
# Iterating through the json
# list
for i in data['emp_details']:
    print(i)
   
# Closing file
f.close()

