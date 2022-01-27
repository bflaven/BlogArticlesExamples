#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/streamlit_eda_made_easy_pandas_profiling_4/

[file]
streamlit run 001_streamlit_webapp_pandas_profiling.py

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

# check values_conf.py for credentials file
import config_values.values_conf as conf

### 1. values ###
CSV_DIRECT_FILE_PATH = conf.CSV_DIRECT_FILE_PATH

@st.cache
def load_csv():
	csv = pd.read_csv(CSV_DIRECT_FILE_PATH)
	return csv


def main():

	# st.title("Apps title 1")
	# st.markdown('Use this Streamlit app to make what ever you want')

	# st.subheader("Perform Exploratory data Analysis with Pandas Profiling Library")


	# st.markdown('series.shape :: {} '.format(DATA_FILE.shape))
	# st.write(DATA_FILE.head())



	# Pandas Profiling Report
	df = load_csv()
	pr = ProfileReport(df, explorative=True)
	st.header('*User Input DataFrame*')
	st.write(df)
	st.write('---')
	st.header('*Exploratory Data Analysis Report Using Pandas Profiling*')
	st_profile_report(pr)
                
if __name__ == "__main__":
    main()
