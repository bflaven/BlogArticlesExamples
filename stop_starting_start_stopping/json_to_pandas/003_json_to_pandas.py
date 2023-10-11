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
python 003_json_to_pandas.py



'''

import requests
import numpy as np
import json
import pandas as pd
from datetime import datetime


# FILE_JSON_SOURCE = 'data/fake_stats_response_1631779452059.json'
FILE_JSON_SOURCE = 'data/fake_stats_response_1631879840986.json'



#generate today date for header string and
todayDate = datetime.today()
todayDateStr = todayDate.strftime("%Y%m%d%H%M")

def export_to_sheets_csv(df):
    #Add it to pd dataframe and csv header
    df.to_csv(todayDateStr+'_fake_PublicationStat.csv', date_format='%Y%m%d')
    print('EXPORT CSV DONE')
        
        
def main():

    #load json object
    with open(FILE_JSON_SOURCE) as f:
        d = json.load(f)

    

    # OUTPUT_1
    # stats_editorial = pd.json_normalize(d['hydra:member'])
    # result = stats_editorial.head(3)
    # print(result)
    # columns_name = list(stats_editorial.columns)
    # print(columns_name)

    # '@id', '@type', 'id', 'brand', 'lang', 'type', 'count', 'year', 'month'

    # OUTPUT_2
    works_data = pd.json_normalize(data=d['hydra:member'], meta=[
                                   'id', 'brand', 'lang', 'type', 'count', 'year', 'month'])
    # result = works_data.head(3)
    result = works_data[['brand', 'lang', 'type', 'count', 'year', 'month']]
    # print(result)
    print(result.head(20))
    export_to_sheets_csv(result)

    


if __name__ == "__main__":

    main()

