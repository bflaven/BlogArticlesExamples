#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_learning_basics/


[file]
python pandas_learning_basics_3.py

# source
- all to know to load pandas_dataframe_importing_csv Pandas
https://chrisalbon.com/code/python/data_wrangling/pandas_dataframe_importing_csv/



"""
import numpy as np
import pandas as pd

# OUTPUT_1 Create dataframe (that we will be importing)
# raw_data = {'first_name': ['Jason', 'Molly', 'Tina', 'Jake', 'Amy'],
#             'last_name': ['Miller', 'Jacobson', ".", 'Milner', 'Cooze'],
#             'age': [42, 52, 36, 24, 73],
#             'preTestScore': [4, 24, 31, ".", "."],
#             'postTestScore': ["25,000", "94,000", 57, 62, 70]}
# df = pd.DataFrame(raw_data, columns=[
#                   'first_name', 'last_name', 'age', 'preTestScore', 'postTestScore'])
# print(df)

# OUTPUT_2 Save dataframe as csv in the working director
# df.to_csv('data/data_wrangling_example.csv')

# OUTPUT_3 Load a csv
# df = pd.read_csv('data/data_wrangling_example.csv')

# Load a csv with no headers
# df = pd.read_csv('data/data_wrangling_example.csv', header=None)
# print(df)


# Load a csv while specifying column names
# df = pd.read_csv('data/data_wrangling_example.csv', names=['UID', 'First Name', 'Last Name', 'Age', 'Pre-Test Score', 'Post-Test Score'])

# Load a csv with setting the index column to UID
# df = pd.read_csv('data/data_wrangling_example.csv', index_col = 'UID', names=['UID', 'First Name', 'Last Name', 'Age', 'Pre-Test Score', 'Post-Test Score'])
# print(df)

# Load a csv while setting the index columns to First Name and Last Name
# df = pd.read_csv('data/data_wrangling_example.csv', index_col='UID', names=['UID', 'First Name', 'Last Name', 'Age', 'Pre-Test Score', 'Post-Test Score'])
# print(df)

# Load a csv while setting the index columns to First Name and Last Name
# df = pd.read_csv('data/data_wrangling_example.csv', index_col=['First Name', 'Last Name'], names=['UID', 'First Name', 'Last Name', 'Age', 'Pre-Test Score', 'Post-Test Score'])
# print(df)


# Load a csv while specifying "." as missing values
# df = pd.read_csv(
#     'data/data_wrangling_example_2.csv', na_values=['.'])
# # pd.isnull(df)
# print(pd.isnull(df))

#Load a csv while specifying “.” and “NA” as missing values in the Last Name column and “.” as missing values in Pre-Test Score column
# sentinels = {'Last Name': ['.', 'NA'], 'Pre-Test Score': ['.']}
# df = pd.read_csv('data/data_wrangling_example_2.csv',
#                  na_values=sentinels)
# print(df)


# Load a csv while skipping the top 3 rows
# sentinels = {'Last Name': ['.', 'NA'], 'Pre-Test Score': ['.']}
# df = pd.read_csv('data/data_wrangling_example_2.csv',
#                  na_values=sentinels, skiprows=3)
# print(df)


# Load a csv while interpreting ", " in strings around numbers as thousands seperators
df = pd.read_csv('data/data_wrangling_example_2.csv', thousands=',')
print(df)


