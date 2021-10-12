#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 011_pandas_convert_json_wp.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff
https://betterprogramming.pub/how-to-recursively-parse-api-responses-using-python-126824426b18

https://towardsdatascience.com/json-and-apis-with-python-fba329ef6ef0




"""

import requests
import json
import pandas as pd

def main():


    response = requests.get('https://api.covid19api.com/summary').text
    response_info = json.loads(response)
    
    # DEBUG
    # print(type(response_info))
    # print(response_info)
    
    country_list = []
    for country_info in response_info['Countries']:
        country_list.append([country_info['Country'],
                             country_info['TotalConfirmed']])
        # DEBUG
        # print(country_list)
    
    country_df = pd.DataFrame(data=country_list, columns=[
                              'Countries', 'TotalConfirmed'])
    
    # DEBUG
    print(country_df.head())
    print(country_df)

if __name__ == "__main__":

    main()



