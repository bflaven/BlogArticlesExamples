#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/

[file]
python 016_pandas_convert_json_wp_full_article.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff


https://codereview.stackexchange.com/questions/207999/creating-a-python-dataframe-by-parsing-json-api-response

python -m spacy download en_core_web_trf



"""


import json
import pandas as pd


# change with you path
PATH_TO_FILE = '/Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/016_pandas_convert_json_wp_full_article_1.csv'

def main():
    # base = 'https://www.cbtnuggets.com/it-training/'
    # response  = requests.get('https://api.cbtnuggets.com/site-gateway/v1/all/courses/for/search?archive=false')
    with open('data/wp_v2_posts_2.json') as file:
      data = json.load(file)
    # data = response.json()

    id = [item['id'] for item in data]
    title = [item['title']['rendered'] for item in data]
    author = [item['author'] for item in data]
    content = [item['content']['rendered'] for item in data]
    categories = [item['categories'] for item in data]
    tags = [item['tags'] for item in data]
    date = [item['date'] for item in data]
    date_gmt = [item['date_gmt'] for item in data]
    guid = [item['guid']['rendered'] for item in data]
    status = [item['status'] for item in data]
    type = [item['type'] for item in data]
    

    df=  pd.DataFrame(
        {
          'id': id,
          'title': title,
          'author': author,
          'content': content,
          'categories': categories,
          'tags': tags,
          'date': guid,
          'date_gmt': guid,
          'guid': guid,
          'status': status,
          'type': type
      })

    # print(df)    
    # df.head()
    
    df.to_csv(r''+PATH_TO_FILE+'',
              sep=',', encoding='utf-8', index=False)

    print(''+PATH_TO_FILE+'')

if __name__ == "__main__":

    main()



