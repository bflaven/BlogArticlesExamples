#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
[env]
To activate this environment, use :: conda activate pandas_ga_1
To deactivate an active environment, use :: conda deactivate
# you have created a env with all the required packages
source activate pandas_ga_1


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/start_stopping_stop_starting/google_analytics_api_pandas_reporting/


[file]
python 006_google_analytics_api_pandas_reporting.py

[source]
https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/service-py

[install]
https://pypi.org/project/google-analytics-data/
https://anaconda.org/anaconda/pandas
https://anaconda.org/conda-forge/google-api-python-client

pip install google-analytics-data
conda install -c conda-forge analytics-python
conda install -c conda-forge google-auth-oauthlib
conda install -c anaconda pandas
conda install -c anaconda google

google-analytics-data==0.8.0
google-auth-oauthlib==0.4.6

pip install --upgrade google-api-python-client
conda install -c conda-forge google-api-python-client

pip install google-analytics-data
pip install --upgrade google-api-python-client

conda install -c conda-forge oauth2client

'''

import pandas as pd

from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']

# just change it with your own stuff
KEY_FILE_LOCATION = '<FILE-NAME-HERE>'
# download from https://console.cloud.google.com/apis/credentials?project=<YOUR-PROJECT-NAME>


# just change it with your own stuff
VIEW_ID = '<VIEW-ID-HERE>'
# xxxo45678765456nyuygfhvf65675 is a fake id
# get at https://analytics.google.com/analytics/web/#/xxxo45678765456nyuygfhvf65675/admin/view/settings






def initialize_analyticsreporting():
  credentials = ServiceAccountCredentials.from_json_keyfile_name(
      KEY_FILE_LOCATION, SCOPES)
  analytics = build('analyticsreporting', 'v4', credentials=credentials)
  return analytics

#Get one report page


def get_report(analytics, pageTokenVar):
  return analytics.reports().batchGet(
      body={
          'reportRequests': [
              {
                  'viewId': VIEW_ID,
                  'dateRanges': [{'startDate': '3daysAgo', 'endDate': 'yesterday'}],
                  'metrics': [{'expression': 'ga:pageviews'}],
                  'dimensions': [{'name': 'ga:pagePath'}],
                  'pageSize': 10000,
                  'pageToken': pageTokenVar,
                  'samplingLevel': 'LARGE'
              }]
      }
  ).execute()


def handle_report(analytics, pagetoken, rows):
    response = get_report(analytics, pagetoken)

    #Header, Dimentions Headers, Metric Headers
    columnHeader = response.get("reports")[0].get('columnHeader', {})
    dimensionHeaders = columnHeader.get('dimensions', [])
    metricHeaders = columnHeader.get(
        'metricHeader', {}).get('metricHeaderEntries', [])

    #Pagination
    pagetoken = response.get("reports")[0].get('nextPageToken', None)

    #Rows
    rowsNew = response.get("reports")[0].get('data', {}).get('rows', [])
    rows = rows + rowsNew
    print("len(rows): " + str(len(rows)))

    #Recursivly query next page
    if pagetoken != None:
        return handle_report(analytics, pagetoken, rows)
    else:
        #nicer results
        nicerows = []
        for row in rows:
            dic = {}
            dimensions = row.get('dimensions', [])
            dateRangeValues = row.get('metrics', [])

            for header, dimension in zip(dimensionHeaders, dimensions):
                dic[header] = dimension

            for i, values in enumerate(dateRangeValues):
                for metric, value in zip(metricHeaders, values.get('values')):
                    if ',' in value or ',' in value:
                        dic[metric.get('name')] = float(value)
                    else:
                        dic[metric.get('name')] = int(value)
            nicerows.append(dic)
        return nicerows

#Start


def main():
    analytics = initialize_analyticsreporting()

    global dfanalytics
    dfanalytics = []

    rows = []
    rows = handle_report(analytics, '0', rows)
    dfanalytics = pd.DataFrame(list(rows))
    print(dfanalytics)
    
    
    
if __name__ == '__main__':
  main()


