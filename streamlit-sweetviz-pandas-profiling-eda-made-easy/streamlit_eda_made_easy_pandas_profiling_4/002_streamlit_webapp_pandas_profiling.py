#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
conda create --name eda_made_easy python=3.9.7
conda info --envs
source activate eda_made_easy
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/streamlit_eda_made_easy_pandas_profiling_4/


[file]
streamlit run 002_streamlit_webapp_pandas_profiling.py

# installation required
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling


"""

import streamlit as st
import requests
import pandas as pd
import numpy as np
import seaborn as sns
import datetime as dt
import matplotlib.pyplot as plt
import pandas_profiling as pp
from pandas_profiling import ProfileReport
from streamlit_pandas_profiling import st_profile_report

from datetime import datetime

# to parse files
import os

# check values_conf.py for credentials file
import config_values.values_conf as conf


def main():
    st.title("Using Pandas Profiling")
    st.subheader("EDA with Pandas Profiling Library")

    st.warning('Check out source file for configuration.  EDA means Exploratory Data Analysis.')    
    
    ### 1. values ###
    FILE_PATH = conf.FILE_PATH
    fileListing = os.listdir(FILE_PATH)
    
    ###  Debug
    # st.write(fileListing)
    
    ### Show
    file_selected = st.sidebar.selectbox('Select a source (.csv)', (fileListing))
    st.info(f"file_selected :: {file_selected}")
    
    ###  Creates DataFrame
    series = pd.read_csv(FILE_PATH+str(file_selected))
    st.info('series.shape :: {} '.format(series.shape))
    st.write(series.head())
    
    st.error("When you are done if the report, uncheck to avoid regenerate the report a second time")
    # st.error("This shows an error ")
    if st.checkbox('Do the profiling', help='It will launch the profiling'):
        pr = ProfileReport(series, explorative=True)
        st_profile_report(pr)
        
        #generate today date for header string and
        todayDate = datetime.today()
        todayDateStr = todayDate.strftime("%Y%m%d%H%M")
        
        profile = series.profile_report(title='Pandas Profiling Report')
        fileName = f"002_pandas_profiling_report_{todayDateStr}_{file_selected}.html"
        profile.to_file(output_file=str(fileName))
        st.success(f"Report created :: {fileName}")
    
if __name__ == "__main__":
    main()
