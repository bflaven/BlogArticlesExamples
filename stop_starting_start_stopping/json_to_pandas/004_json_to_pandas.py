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
python 004_json_to_pandas.py


[source]
https://www.geeksforgeeks.org/data-visualization-with-python/


'''

import requests
import numpy as np
import json
import pandas as pd
from datetime import datetime
import matplotlib.pyplot as plt

# [index],brand,lang,type,count,year,month
FILE_CSV_SOURCE = 'data/202110120506_fake_PublicationStat.csv'

def main():

    # reading the database
    data = pd.read_csv(FILE_CSV_SOURCE)


    plt.scatter(data['count'], data['type'])
    # plt.scatter(data['count'], data['type'].str.contains("urgent"))
    # plt.scatter(data['count'], data['type'].str.contains("article"))
   
    # Adding Title to the Plot
    plt.title("Scatter Plot - SOYLENTCORPNEWS BR for 2021")

    # Setting the X and Y labels
    plt.xlabel('Count')
    plt.ylabel('All types')
    # plt.ylabel('Type urgent')
    # plt.ylabel('Type article')
    
    plt.colorbar()
    
    # output
    plt.show()


if __name__ == "__main__":

    main()

