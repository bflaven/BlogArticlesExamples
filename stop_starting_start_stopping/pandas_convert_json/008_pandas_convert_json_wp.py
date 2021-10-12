#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 007_pandas_convert_json_wp.py

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

https://github.com/amirziai/flatten

https://stackoverflow.com/questions/47242845/pandas-io-json-json-normalize-with-very-nested-json


https://www.kaggle.com/jboysen/quick-tutorial-flatten-nested-json-in-pandas/notebook

https://towardsdatascience.com/flattening-json-objects-in-python-f5343c794b10
https://stackoverflow.com/questions/54546279/how-to-normalize-json-string-type-column-of-pandas-dataframe

https://pandas.pydata.org/pandas-docs/version/0.22/generated/pandas.io.json.json_normalize.html

https://python.plainenglish.io/how-to-loop-or-iterate-through-keys-and-values-in-a-dictionary-using-python-9e51273ba560

https://www.tech-otaku.com/mac/using-python-to-loop-through-json-encoded-data/


https://www.geeksforgeeks.org/json-loads-in-python/




"""
import json 
import pandas as pd 
# from pandas.io.json import json_normalize 
  
# import requests
# weather_json = requests.get(
#     "http://pro.openweathermap.org/data/2.5/climate/month?zip=94040,us&appid=<your_api_key>")
# weather_api_data = json.loads(weather_json.text)


# Use json_normalize() function to convert the api response into dataframe. In the next section we will understand how the record path and meta parameters are used to convert the nested json to dataframe

# with open('data/wp_v2_posts_2.json', 'r') as f:
# data = json.loads(f.read())
    

# df = pd.json_normalize(data, ['list'], meta=['cod', ['city', 'country'], ['city', 'name'], ['city', 'id'], ['city', 'coord', 'lat'],['city', 'coord', 'lon']])

#load json object
# with open('data/names_1.json') as file:
with open('data/wp_v2_posts_2.json') as file:
    data = json.load(file)
    
# df_datas = json.loads(data)


# df = pd.json_normalize(data)
# df = pd.json_normalize(data)


# for nb in df:
  # print(data[int(nb)]["id"])
  
# for key, value in (df):
#     print (key, value)


# for k, v in df.items():
#     print((k + ' : %s\n')*len(v) % tuple(v))

  
for i, val in enumerate(data):
    print (i, ",", val)
    print(data[i]["id"])
    print(data[i]["guid"]["rendered"])
    print(data[i]["title"]["rendered"])
    


#  print(data[0]["id"])
# print(data[0]["guid"]["rendered"])
# print(data[0]["title"]["rendered"])

#  print(data[1]["id"])
# print(data[1]["guid"]["rendered"])
# print(data[1]["title"]["rendered"])

# # print(data[2]["id"])
# print(data[2]["guid"]["rendered"])
# print(data[2]["title"]["rendered"])






