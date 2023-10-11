#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
[env]
To activate this environment, use :: conda activate pandas_ga_1
To deactivate an active environment, use :: conda deactivate
# you have created a env with all the required packages
source activate pandas_ga_1


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/json_to_pandas


[file]
python 001_json_to_pandas.py


[source]
https://chrisalbon.com/code/python/data_wrangling/load_json_file_into_pandas/


{"category": "CRIME", "headline": "There Were 2 Mass Shootings In Texas Last Week, But Only 1 On TV", "authors": "Melissa Jeltsen", "link": "https://www.huffingtonpost.com/entry/texas-amanda-painter-mass-shooting_us_5b081ab4e4b0802d69caad89", "short_description": "She left her husband. He killed their children. Just another day in America.", "date": "2018-05-26"}



'''



import numpy as np
import pandas as pd

# Create URL to JSON file (alternatively this can be a filepath)
# url = 'https://raw.githubusercontent.com/chrisalbon/simulated_datasets/master/data.json'
# url = 'data/chrisalbon_data.json'
url = 'data/news_category_dataset_light_20k_v4.json'


# Load the first sheet of the JSON file into a data frame
df = pd.read_json(url, orient='columns')

df.columns
df.describe
# View the first ten rows
df.head(10)

# 'category', 'headline', 'authors', 'link', 'short_description', 'date']
print("df.columns")
print(df.columns)
print("\n")

print("df.describe")
print(df.describe)
print("\n")

print("df.head(10)")
print(df.head(10))




