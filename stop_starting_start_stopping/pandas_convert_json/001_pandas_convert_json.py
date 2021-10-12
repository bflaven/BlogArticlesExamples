#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 001_pandas_convert_json.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb




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
# df = pd.read_json('data/simple.json')
# print(df)

# show df.info()
# print(df.info())

# output_2
# print("\n--- # output_2")
# URL = 'http://raw.githubusercontent.com/BindiChen/machine-learning/master/data-analysis/027-pandas-convert-json/data/simple.json'
# df = pd.read_json(URL)
# print(df)

# show df.info()
# print(df.info())

# output_3
# print("\n--- # output_3")
# df = pd.read_json('data/nested_list.json')
# print(df)

# show df.info()
# print(df.info())

# output_4
# print("\n--- # output_4")
# load data using Python JSON module
# with open('data/nested_list.json', 'r') as f:
#     data = json.loads(f.read())

# # Flatten data
# df_nested_list = pd.json_normalize(data, record_path=['students'])
# print(df_nested_list)

# output_5
# print("\n--- # output_5")

# # load data using Python JSON module
# with open('data/nested_list.json', 'r') as f:
#      data = json.loads(f.read())

# # To include school_name and class
# df_nested_list = pd.json_normalize(
#     data,
#     record_path=['students'],
#     meta=['school_name', 'class']
# )

# print(df_nested_list)

# output_6 (ERROR)
# print("\n--- # output_6")
# # Getting ValueError when using read_json()
# df = pd.read_json('data/nested_mix.json')
# print(df)


# output_7 (GOOD)
# print("\n--- # output_7")

# # load data using Python JSON module
# with open('data/nested_mix.json', 'r') as f:
#     data = json.loads(f.read())

# # Normalizing data
# df = pd.json_normalize(data, record_path=['students'])
# print(df)


# output_8
# print("\n--- # output_8")

# # load data using Python JSON module
# with open('data/nested_mix.json', 'r') as f:
#     data = json.loads(f.read())

# # Normalizing data
# df = pd.json_normalize(
#     data,
#     record_path=['students'],
#     meta=[
#         'class',
#         ['info', 'president'],
#         ['info', 'contacts', 'tel'],
#         ['info', 'contacts', 'email']
#     ]
# )
# print(df)

# output_9
print("\n--- # output_9")

df = pd.read_json('data/nested_deep.json')
print(df)
print(type(df['students'][0]))

# output_10
print("\n--- # output_10")

result = df['students'].apply(lambda row: glom(row, 'grade.math'))
print(result)
