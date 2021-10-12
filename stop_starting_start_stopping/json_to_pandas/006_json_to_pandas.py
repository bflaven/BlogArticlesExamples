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
python 006_json_to_pandas.py


[source]
https://chrisalbon.com/code/python/data_wrangling/load_json_file_into_pandas/

'''

import numpy as np
import json
import pandas as pd

FILE_JSON_SOURCE = 'data/fake_stats_response_def_1.json'


with open(FILE_JSON_SOURCE) as project_file:
    data = json.load(project_file)

df = pd.json_normalize(data)


# View the first ten rows
df.head(10)
print(df.head(10))
print(df.columns)

# 'id', 'brand', 'lang', 'count', 'year', 'month', 'day'





