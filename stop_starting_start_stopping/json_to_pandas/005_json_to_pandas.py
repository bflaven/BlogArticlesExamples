#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
[env]
To activate this environment, use :: conda activate pandas_ga_1
To deactivate an active environment, use :: conda deactivate
# you have created a env with all the required packages
source activate pandas_ga_1


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/json_to_pandas



[file]
python 005_json_to_pandas.py


[source]
https://www.geeksforgeeks.org/data-visualization-with-python/


'''

import requests
import numpy as np
import json
import pandas as pd
from datetime import datetime
import matplotlib.pyplot as plt
# importing packages
import seaborn as sns
import plotly.express as px


# FILE_CSV_SOURCE = 'data/202110120516_fake_PublicationStat.csv'
FILE_CSV_SOURCE = 'data/202110120527_fake_PublicationStat.csv'
# brand,lang,type,count,year,month


def main():

    # reading the database
    data = pd.read_csv(FILE_CSV_SOURCE)
    
    # printing the top 10 rows
    print(data.head(10))

    # [index],brand,lang,type,count,year,month
    
    ### 3. Plotly
    # plotting the scatter chart
    # fig = px.scatter(data, x="type", y="count", color='year')
    fig = px.scatter(data, x="type", y="lang", color='year')

    
    # showing the plot
    fig.show()
    
if __name__ == "__main__":

    main()

