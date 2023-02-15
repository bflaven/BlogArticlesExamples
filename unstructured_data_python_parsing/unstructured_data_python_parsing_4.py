#!/usr/bin/python
# -*- coding: utf-8 -*-


"""


[env]
# Conda Environment
# NO CONDA ENV

conda create --name unstructured_data_python_parsing python=3.9.7
conda info --envs
source activate unstructured_data_python_parsing
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]





# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unstructured_data_python_parsing/


[file]
python unstructured_data_python_parsing_4.py



# other module
pip install requests
pip install pandas
pip install streamlit
pip install numpy



# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]

https://www.reddit.com/r/learnprogramming/comments/ndv0mu/trying_to_convert_a_log_file_to_csv_file_on_python/

"""

import os
import streamlit as st
import streamlit.components.v1 as stc
import numpy as np
import pandas as pd
import time
import csv
import re


# Method1 (WORKING)

file_input = 'log_sample/fake_sample_log_3.log'
file_output = 'csv_output/unstructured_data_python_parsing_4_1.csv'


with open(file_input) as file:
    with open(file_output, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for line in file:
            line_item = re.split(r'[,\s]+',line,maxsplit=5)
            line_item[-1] = line_item[-1][2:-1]
            writer.writerows([line_item])


print(f"\n---DONE see {file_output} ")

print("\n--- See the DF below ")

df = pd.read_csv(file_output)
print(df)
        


# https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_csv.html#pandas.DataFrame.to_csv
        





