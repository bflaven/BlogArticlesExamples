#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/

[file]
python 009_pandas_convert_json_wp.py

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


https://stackoverflow.com/questions/51752925/parsing-multiple-json-objects-from-a-text-file-using-python
https://jsonlines.readthedocs.io/en/latest/
"""
import requests 
import json 
import pandas as pd 

data = {
    "Duration": {
        "0": 60,
        "1": 60,
        "2": 60,
        "3": 45,
        "4": 45,
        "5": 60
    },
    "Pulse": {
        "0": 110,
        "1": 117,
        "2": 103,
        "3": 109,
        "4": 117,
        "5": 102
    },
    "Maxpulse": {
        "0": 130,
        "1": 145,
        "2": 135,
        "3": 175,
        "4": 148,
        "5": 127
    },
    "Calories": {
        "0": 409,
        "1": 479,
        "2": 340,
        "3": 282,
        "4": 406,
        "5": 300
    }
}

df = pd.DataFrame(data)

print(df)



