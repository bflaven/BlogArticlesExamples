#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 003_pandas_convert_json_wp.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff
https://medium.com/swlh/converting-nested-json-structures-to-pandas-dataframes-e8106c59976e


https://www.datacourses.com/an-api-based-etl-pipeline-with-python-part-2-397/

https://www.datacourses.com/transform-json-into-a-dataframe-416/

https://www.geeksforgeeks.org/pandas-parsing-json-dataset/


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
print("\n--- # output_1")



# load data using Python JSON module
with open('data/wp_v2_posts_2.json', 'r') as f:
    data = json.loads(f.read())

# Normalizing data
df = pd.json_normalize(data)

# print(df.head(5))
print(list(df.columns))

# ['id', 'date', 'date_gmt', 'modified', 'modified_gmt', 'slug', 'status', 'type', 'link', 'author', 'featured_media', 'comment_status', 'ping_status', 'sticky', 'template', 'format', 'meta', 'categories', 'tags', 'guid.rendered', 'title.rendered', 'content.rendered', 'content.protected', 'excerpt.rendered', 'excerpt.protected', '_links.self', '_links.collection', '_links.about', '_links.author', '_links.replies', '_links.version-history', '_links.predecessor-version', '_links.wp:attachment', '_links.wp:term', '_links.curies']




    
    
    







# # Normalizing data
# df = pd.json_normalize(
#      results,
#      meta=[
#          'id',
#         'date'
# #         ['info', 'president'],
# #         ['info', 'contacts', 'tel'],
# #         ['info', 'contacts', 'email']
#      ]
#  )
# print(df)

