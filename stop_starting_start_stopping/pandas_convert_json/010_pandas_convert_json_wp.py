#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
python 010_pandas_convert_json_wp.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff


https://codereview.stackexchange.com/questions/207999/creating-a-python-dataframe-by-parsing-json-api-response



"""


import json
import pandas as pd


# change with you path
PATH_TO_FILE = '/Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/010_pandas_convert_json_wp_3.csv'



def main():
    # base = 'https://www.cbtnuggets.com/it-training/'
    # response  = requests.get('https://api.cbtnuggets.com/site-gateway/v1/all/courses/for/search?archive=false')
    with open('data/wp_v2_posts_2.json') as file:
      data = json.load(file)
    # data = response.json()

    id = [item['id'] for item in data]
    title = [item['title']['rendered'] for item in data]
    date = [item['date'] for item in data]
    date_gmt = [item['date_gmt'] for item in data]
    guid = [item['guid']['rendered'] for item in data]
    status = [item['status'] for item in data]
    type = [item['type'] for item in data]

    df=  pd.DataFrame(
        {
          'id': id,
          'title': title,
          'date': guid,
          'date_gmt': guid,
          'guid': guid,
          'status': status,
          'type': type
      })

    # print(df)
    
    df.to_csv(r''+PATH_TO_FILE+'',
              sep=',', encoding='utf-8', index=False)
    
    print('CSV DONE - check at '+PATH_TO_FILE+'')

if __name__ == "__main__":

    main()



