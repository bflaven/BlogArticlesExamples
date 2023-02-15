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
python unstructured_data_python_parsing_5.py



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

file_input = 'log_sample/fake_sample_log_4.log'


# def clean_text(text):
#     text = text.lower()
#     text = re.sub('\[.*?\]', '', text)
#     text = re.sub('https?://\S+|www\.\S+', '', text)
#     text = re.sub('<.*?>+', '', text)
#     text = re.sub('[%s]' % re.escape('.'), '', text)
#     text = re.sub('\n', '', text)
#     text = re.sub('\w*\d\w*', '', text)
#     return text

def clean_text(text):
    text = text.lower()
    text = re.sub(r'√', "", text)
    text = re.sub(r'-', "", text)
    text = re.sub(r'×', "", text)
    text = re.sub(r'│', "", text)
    text = re.sub(r'┌', "", text)
    text = re.sub(r'┐', "", text)
    text = re.sub(r'─', "", text)
    text = re.sub(r'─', "", text)
    text = re.sub(r'│', "", text)
    text = re.sub(r'=', "", text)
    text = re.sub(r'└┘', "", text)
    text = re.sub(r'├┤', "", text)
    text = re.sub(r'├', "", text)
    text = re.sub(r'┤', "", text)
    text = re.sub(r'┘', "", text)
    text = re.sub(r'└', "", text)
    text = re.sub(r'├', "", text)
    text = text.strip()
    return text


# METHOD_1
with open(file_input, 'r') as raw:
    for line in raw:
        print(clean_text(line))


        


# https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_csv.html#pandas.DataFrame.to_csv
        

# MORE CLEANING
#    line = re.sub(r'√', "", line)
#    line = re.sub(r'-', "", line)
#    line = re.sub(r'×', "", line)
#    line = re.sub(r'│', "", line)
#    line = re.sub(r'┌', "", line)
#    line = re.sub(r'┐', "", line)
#    line = re.sub(r'─', "", line)
#    line = re.sub(r'─', "", line)
#    line = re.sub(r'│', "", line)
#    line = re.sub(r'=', "", line)
#    line = re.sub(r'└┘', "", line)
#    line = re.sub(r'├┤', "", line)
#    line = line.strip()
