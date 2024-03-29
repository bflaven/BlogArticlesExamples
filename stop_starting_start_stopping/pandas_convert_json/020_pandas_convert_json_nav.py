#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/

[file]
python 020_pandas_convert_json_nav.py



"""


import json
import pandas as pd

# import spacy
# for natural language processing: named entity recognition

# extract elements from News_Category_Dataset_v2_light.json
# "category": "CRIME", "headline": "There Were 2 Mass Shootings In Texas Last Week, But Only 1 On TV", "authors": "Melissa Jeltsen", "link": "https://www.huffingtonpost.com/entry/texas-amanda-painter-mass-shooting_us_5b081ab4e4b0802d69caad89", "short_description": "She left her husband. He killed their children. Just another day in America.", "date": "2018-05-26"
# 

 
def main():
    # base = 'https://www.cbtnuggets.com/it-training/'
    # response  = requests.get('https://api.cbtnuggets.com/site-gateway/v1/all/courses/for/search?archive=false')

    # News_Category_Dataset_v2_changed.json all records
    # News_Category_Dataset_v2_light_7.json for test
    # News_Category_Dataset_v2_light.json only 10 records
    


    # # some JSON:
    # x =  '{ "name":"John", "age":30, "city":"New York"}'
    # # parse x:
    # y = json.loads(x)
    # # the result is a Python dictionary:
    # print(y["age"])

    with open('data/fake_nav_links_8.json') as file:
        data = json.load(file)
        # DEBUG
        # print(data)
        
        
        json_string = data # your json string
        print('\n---result for ACMECORPORATION')
        print(json_string['ACMECORPORATION']['BR'][0]['report_title'])
        print(json_string['ACMECORPORATION']['BR'][1]['report_iframe_url'])
        print(json_string['ACMECORPORATION']['BR'][1]['report_display_roles'])
        print('\n--- detail for report_display_roles')
        print(json_string['ACMECORPORATION']['BR']
              [1]['report_display_roles'][0])
        print(json_string['ACMECORPORATION']['BR']
              [1]['report_display_roles'][1])

        print('\n---result for INITECH')

        print(json_string['INITECH']['RU'][0]['report_title'])
        print(json_string['INITECH']['RU'][0]['report_iframe_url'])
        print(json_string['INITECH']['RU'][0]['report_display_roles'])
        print('\n--- detail for report_display_roles')
        print(json_string['INITECH']['RU'][0]['report_display_roles'][0])
            
    
    

if __name__ == "__main__":

    main()



