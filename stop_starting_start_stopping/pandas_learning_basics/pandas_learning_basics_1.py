#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_learning_basics/


[file]
python pandas_learning_basics_1.py

# source
- How to use Regex in Pandas
https://kanoki.org/2019/11/12/how-to-use-regex-in-pandas/



"""


import numpy as np
import pandas as pd

# OUTPUT_1
# df = pd.read_csv('data/world_happiness_report_2019.csv')
df = pd.read_csv('data/world_happiness_report_2019_2.csv')
# print(df)


# OUTPUT_2 (Pandas extract)
# Extract the first 5 characters of each country using ^ (start of the String) and {5}(for 5 characters) and create a new column first_five_letter

# df['first_five_Letter'] = df['Country (region)'].str.extract(r'(^w{5})')
# df.head()
# print(df.head())

# OUTPUT_3 (Pandas Count)
# First we are counting the countries starting with character ‘F’. It returns two elements but not france because the character ‘f’ here is in lower case. you can add both Upper and Lower case by using [Ff]

S = pd.Series(['Finland', 'Colombia', 'Florida', 'Japan',
               'Puerto Rico', 'Russia', 'france'])

# output_3 = S[S.str.count(r'(^F.*)') == 1]
# print(output_3)


# S = pd.Series(['Finland', 'Colombia', 'Florida', 'Japan',
#                'Puerto Rico', 'Russia', 'france'])
# output_3a = S[S.str.count(r'(^[Ff].*)') == 1]
# print(output_3a)


# Total items starting with F
# S.str.count(r'(^F.*)').sum()
# output_3b = S.str.count(r'(^F.*)').sum()
# print(output_3b)

# Total items starting with F or f
# S.str.count(r'(^F.*)').sum()
# output_3c = S.str.count(r'(^[Ff].*)').sum()
# print(output_3c)


# In our Original dataframe we are finding all the Country that starts with Character ‘P’ and ‘p’ (both lower and upper case). Basically we are filtering all the rows which return count > 0.

# OUTPUT_4
output_4 = df[df['Country (region)'].str.count('^[pP].*') > 0]
print(output_4)
