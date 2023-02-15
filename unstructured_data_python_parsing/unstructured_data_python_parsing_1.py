#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
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
python unstructured_data_python_parsing_1.py



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

file_input_1 = 'csv_input/sample_input_log_tek_1.csv'
file_input_2 = 'csv_input/sample_input_us_states_2.csv'


def main():
    
    # read text file into pandas DataFrame
    # df = pd.read_csv(file_input_1, sep=",")
    df = pd.read_csv(file_input_2, sep=";")


    # display DataFrame
    print(df)

if __name__ == '__main__':
	main()
