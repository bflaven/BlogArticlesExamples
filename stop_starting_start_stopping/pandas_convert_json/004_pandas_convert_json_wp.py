#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 004_pandas_convert_json_wp.py

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

https://kanoki.org/2019/12/12/how-to-work-with-json-in-pandas/



"""
import json 
import pandas as pd 
from pandas.io.json import json_normalize 
  
# df = pd.read_json('data/raw_nyc_phil_3.json')
with open('data/raw_nyc_phil_3.json') as f:
    d = json.load(f)

# OUTPUT_1  
# lets put the data into a pandas df
# clicking on raw_nyc_phil.json under "Input Files"
# tells us parent node is 'programs'
# nycphil = json_normalize(d['programs'])
# result = nycphil.head(3)
# print(result)

# OUTPUT_2
# works_data = json_normalize(data= d['programs'],
#                             record_path='works',
#                             meta=['id', 'orchestra', 'programID', 'season'])

# result = works_data.head(3)
# print(result)

# OUTPUT_3
soloist_data = json_normalize(data=d['programs'],
                              record_path=['works', 'soloists'],
                              meta=['id'])

result = soloist_data.head(3)
print(result)


