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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/parsing_csv_json_python/

[file]
python read_csv_pandas_python_csv_002.py



# to export requirements
pip freeze > web_scraping_selenium.txt


# to install
pip install -r web_scraping_selenium.txt


# update conda 
conda update -n base -c defaults conda

# install pandas
pip install pandas



# to export requirements
pip freeze > web_scraping_selenium_1.txt


# to install
pip install -r web_scraping_selenium_1.txt


# update conda if needed by running
conda update -n base -c defaults conda

[SOURCE]
https://techeplanet.com/pandas-iterate-through-csv-rows/

"""

import pandas as pd

# df = pd.read_csv('datasets/data_2.csv')
# for index, row in df.iterrows():
#     print(index , ' => ',row['emp_name'])

# df = pd.read_csv('datasets/data.csv', header=0)
# print(df.head())


# df = pd.read_csv('datasets/data_2.csv', header=0, names=['emp_name','emp_email','emp_job_profile'])
# print (df)


# LOOP_SOLUTION_1
# df = pd.read_csv('datasets/data_2.csv')

# function
# def func(x):
#     name = x['emp_name']
#     email = x['emp_email']
#     print (name, email)
    
    #add selenium code

# df.apply(func, axis=1)

# LOOP_SOLUTION_2
df = pd.read_csv('datasets/data_2.csv')

for i, row in df.iterrows():
    name = row['emp_name']
    email = row['emp_email']
    print (name, email)
    #add selenium code





