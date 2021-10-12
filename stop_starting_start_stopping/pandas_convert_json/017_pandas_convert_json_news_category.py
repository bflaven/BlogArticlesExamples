#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/

[file]
python 017_pandas_convert_json_news_category.py

[source]
- 001. https://github.com/BindiChen/machine-learning/blob/master/data-analysis/027-pandas-convert-json/pandas-convert-json.ipynb

# great stuff
https://codereview.stackexchange.com/questions/207999/creating-a-python-dataframe-by-parsing-json-api-response
python -m spacy download en_core_web_trf

https://www.kaggle.com/gcdatkin/news-category-prediction-word-embeddings


"""



import json
import pandas as pd

# import spacy
# for natural language processing: named entity recognition

# extract elements from News_Category_Dataset_v2_light.json
# "category": "CRIME", "headline": "There Were 2 Mass Shootings In Texas Last Week, But Only 1 On TV", "authors": "Melissa Jeltsen", "link": "https://www.huffingtonpost.com/entry/texas-amanda-painter-mass-shooting_us_5b081ab4e4b0802d69caad89", "short_description": "She left her husband. He killed their children. Just another day in America.", "date": "2018-05-26"
# 

# change with you path
PATH_TO_FILE = '/Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/017_pandas_convert_json_news_category_1.csv'

 
def main():
    # base = 'https://www.cbtnuggets.com/it-training/'
    # response  = requests.get('https://api.cbtnuggets.com/site-gateway/v1/all/courses/for/search?archive=false')

    # News_Category_Dataset_v2_changed.json all records
    # News_Category_Dataset_v2_light_7.json for test
    # News_Category_Dataset_v2_light.json only 10 records
    
    with open('data/News_Category_Dataset_v2_changed_2.json') as file:
        data = json.load(file)
        # DEBUG
        # print(data)
  
    # NOPE
    # data = pd.read_json('data/News_Category_Dataset_v2_light_5.json', lines=True)
    # data = pd.read_json('data/wp_v2_posts_2.json', lines=True)
    # print(data)
    # print(data.info())
    


    category = [item['category'] for item in data]
    headline = [item['headline'] for item in data]
    authors = [item['authors'] for item in data]
    link = [item['link'] for item in data]
    short_description = [item['short_description'] for item in data]
    date = [item['date'] for item in data]
    

    df=  pd.DataFrame(
        {
            'category': category,
            'headline': headline,
            'authors': authors,
            'link': link,
            'short_description': short_description,
            'date': date
      })

    # print(df)    
    # print(df.head())

    df.to_csv(r''+PATH_TO_FILE+'',
              sep=',', encoding='utf-8', index=False)

    print(''+PATH_TO_FILE+'')
    
    
    

if __name__ == "__main__":

    main()



