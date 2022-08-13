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
python read_csv_pandas_python_csv_001.py



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

df = pd.read_csv('datasets/data_2.csv')
for index, row in df.iterrows():
    print(index , ' => ',row['emp_name'])




