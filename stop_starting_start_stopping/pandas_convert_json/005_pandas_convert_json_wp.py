#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 005_pandas_convert_json_wp.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff
https://medium.com/swlh/converting-nested-json-structures-to-pandas-dataframes-e8106c59976e


https://www.datacourses.com/an-api-based-etl-pipeline-with-python-part-2-397/

https://www.datacourses.com/transform-json-into-a-dataframe-416/

https://www.geeksforgeeks.org/pandas-parsing-json-dataset/

https://www.geeksforgeeks.org/read-json-file-using-python/


https://towardsdatascience.com/how-to-parse-json-data-with-python-pandas-f84fbd0b1025

https://pandas.pydata.org/pandas-docs/version/1.2.0/reference/api/pandas.json_normalize.html


# RIGHT INFO
https://kanoki.org/2019/12/12/how-to-work-with-json-in-pandas/



"""
import json 
import pandas as pd 
# from pandas.io.json import json_normalize 
  
# import requests
# weather_json = requests.get(
#     "http://pro.openweathermap.org/data/2.5/climate/month?zip=94040,us&appid=<your_api_key>")
# weather_api_data = json.loads(weather_json.text)


# Use json_normalize() function to convert the api response into dataframe. In the next section we will understand how the record path and meta parameters are used to convert the nested json to dataframe

with open('data/weather_3.json', 'r') as f:
    data = json.loads(f.read())
    

df = pd.json_normalize(data, ['list'], meta=['cod', ['city', 'country'], ['city', 'name'], ['city', 'id'], ['city', 'coord', 'lat'],['city', 'coord', 'lon']])

print(df.head())



