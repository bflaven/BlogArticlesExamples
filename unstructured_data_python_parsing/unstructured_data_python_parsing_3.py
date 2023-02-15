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
python unstructured_data_python_parsing_3.py



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
import csv

s = """spu+--------------------------------------+--------+--------+------------+-------------+-----------------------------------+
     | ID                                   | Name   | Status | Task State | Power State | Networks                          |
     +--------------------------------------+--------+--------+------------+-------------+-----------------------------------+
     | 6bca09f8-a320-44d4-a11f-647dcec0aaa1 | tester | ACTIVE | -          |  Running     | OpenStack-net=10.0.0.1, 10.0.0.3 |
     +--------------------------------------+--------+--------+------------+-------------+-----------------------------------+"""

# with open(fname, 'rb') as f:
result = [tuple(filter(None, map(str.strip, splitline))) for line in s.splitlines()
          for splitline in [line.split("|")] if len(splitline) > 1]

# with open('output.csv', 'wb') as outcsv:
#opens the file in 'append' mode so you don't delete all the information
with open('unstructured_data_python_parsing_3.py_sample_output_1.csv', 'a') as outcsv:
    writer = csv.writer(outcsv)
    writer.writerows(result)
