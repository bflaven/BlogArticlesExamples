#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
START WP LOCALLY
! wp apis
https://yalla.pythonista.mydomain.priv/wordpress/wp-json/wp/v2
https://yalla.pythonista.mydomain.priv/wordpress/wp-json/wp/v2/posts


python 014_pandas_convert_json_wp.py

[source]
https://medium.com/analytics-vidhya/wordpress-rest-api-with-python-f53a25827b1c


"""

# authentication with python
import requests
import json
import base64

# require urllib3 to disable local errors
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


# play with pandas
import pandas as pd

# change with you path
PATH_TO_FILE = '/Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/014_pandas_convert_json_wp_3.csv'


def main():

    # REQUIRE: It requires local WP install on XAMPP for instance
    # DECLARE: You must also the local domain name in your hosts file
    # 
    url = "https://yalla.pythonista.mydomain.priv/wordpress/wp-json/wp/v2/posts"
    user = "admin"
    password = "admin"
    credentials = user + ':' + password
    token = base64.b64encode(credentials.encode())
    header = {'Authorization': 'Basic ' + token.decode('utf-8')}

    # response = requests.get(url, headers=header, verify=False)
    # print(response)

    response = requests.get(url, headers=header, verify=False).text
    data = json.loads(response)
    
    # DEBUG
    # print(type(response_info))
    # print(response_info)

    id = [item['id'] for item in data]
    title = [item['title']['rendered'] for item in data]
    date = [item['date'] for item in data]
    date_gmt = [item['date_gmt'] for item in data]
    guid = [item['guid']['rendered'] for item in data]
    status = [item['status'] for item in data]
    type = [item['type'] for item in data]

    df = pd.DataFrame(
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

    print(''+PATH_TO_FILE+'')

if __name__ == "__main__":

    main()



