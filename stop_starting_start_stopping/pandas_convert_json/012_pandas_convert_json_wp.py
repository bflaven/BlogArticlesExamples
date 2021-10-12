#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/

[file]
python 012_pandas_convert_json_wp.py

[source]
https://www.kaggle.com/jboysen/quick-tutorial-flatten-nested-json-in-pandas/notebook



"""

import requests
import json
import pandas as pd

def main():

    #load json object
    with open('data/raw_nyc_phil_3.json') as f:
        d = json.load(f)

    #lets put the data into a pandas df
    #clicking on raw_nyc_phil.json under "Input Files"
    #tells us parent node is 'programs'
    # nycphil = pd.json_normalize(d['programs'])
    
    # OUTPUT_1
    # result = nycphil.head(3)
    # print(result)
    
    # OUTPUT_2
    # works_data = pd.json_normalize(data=d['programs'], record_path='works', meta=['id', 'orchestra', 'programID','season'])
    # result = works_data.head(3)
    # print(result)
    
    # OUTPUT_3
    soloist_data = pd.json_normalize(data=d['programs'], record_path=[
                                     'works', 'soloists'], meta=['id'])
    result = soloist_data.head(3)
    print(result)

if __name__ == "__main__":

    main()



