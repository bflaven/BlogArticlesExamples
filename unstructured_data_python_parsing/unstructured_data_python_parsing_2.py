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

unstructured_data_python_parsing



# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unstructured_data_python_parsing/


[file]
python unstructured_data_python_parsing_2.py



# other module
pip install requests
pip install pandas
pip install streamlit
pip install numpy


# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]

"""

import os
import streamlit as st
import streamlit.components.v1 as stc
import numpy as np
import pandas as pd
import time


file_input = 'log_sample/fake_sample_log_3.log'
file_output = 'csv_output/unstructured_data_python_parsing_4_1.csv'

fileHandle = open(file_input, 'r')

# print(fileHandle)

for line in fileHandle:

    print(line)
    
#     fields = line.split('|')
#     print(fields[0])
#     # print(fields[0])  
#     # print(fields[1])  
    
fileHandle.close()
