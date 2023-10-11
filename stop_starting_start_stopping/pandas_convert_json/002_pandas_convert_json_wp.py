#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 002_pandas_convert_json_wp.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff
https://medium.com/swlh/converting-nested-json-structures-to-pandas-dataframes-e8106c59976e





"""
# required packages
from glom import glom
import json
import pandas as pd

# extra packages
import streamlit as st
import base64
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np


# output_1
# print("\n--- # output_1")
df = pd.read_json('data/wp_v2_posts_2.json')
print(df)




# load data using Python JSON module
# with open('data/wp_v2_posts_2.json', 'r') as f:
#      data = json.loads(f.read())
     # print(data)
     
# Normalizing data
# df = pd.json_normalize(data)
# print(df)

# select specific columns

# print(df['id'])
# print(df['date'])
# print(df['date_gmt'])
# print(df['guid''rendered'])
# print(df['title''rendered'])

 

# EXTRA INFOS
# result = json_normalize(data, 'values', ['key', 'second'], errors='ignore')
