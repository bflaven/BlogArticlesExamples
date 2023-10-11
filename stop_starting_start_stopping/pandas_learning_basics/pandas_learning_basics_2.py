#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_learning_basics/


[file]
python pandas_learning_basics_2.py

# source

- all to know to load pandas_dataframe_importing_csv Pandas
https://chrisalbon.com/code/python/data_wrangling/pandas_dataframe_importing_csv/



"""

import numpy as np
import pandas as pd

# OUTPUT_1
# df = pd.read_csv('data/world_happiness_report_2019.csv')
# df = pd.read_csv('data/world_happiness_report_2019_2.csv')
# print(df)

# OUTPUT_2
# df = pd.read_csv('data/world_happiness_report_2019_2.csv', header=None)
# print(df)

# Country (region),Ladder,SD of Ladder,Positive affect,Negative affect,Social support,Freedom,Corruption,Generosity,Log of GDP per capita, Healthy life expectancy

# df = pd.read_csv('data/world_happiness_report_2019.csv', names=['Country(region)', 'Ladder', 'SD of Ladder', 'Positive affect', 'Negative affect', 'Social support', 'Freedom', 'Corruption', 'Generosity', 'Log of GDP per capita', 'Healthy life expectancy'])
# print(df)


