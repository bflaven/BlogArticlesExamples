#!/usr/bin/python
# -*- coding: utf-8 -*-

'''
[env]
To activate this environment, use :: conda activate pandas_ga_1
To deactivate an active environment, use :: conda deactivate
# you have created a env with all the required packages
source activate pandas_ga_1

# list the environments with conda
conda info --envs

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/start_stopping_stop_starting/google_analytics_api_pandas_reporting/

[file]
python 015_google_analytics_api_pandas_reporting.py

[source]
https://github.com/RitwikGA/GoogleAnalytics-Pandas-Sheet/blob/master/gaExport.py


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
conda install -c anaconda matplotlib


'''
import pandas as pd
from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime


# Check mycreds.py for credentials file
import mycreds

SCOPES = mycreds.SCOPES
KEY_FILE_LOCATION =  mycreds.KEY_FILE_LOCATION
VIEW_ID = str(mycreds.VIEW_ID)
SHEET_ID = mycreds.SHEET_ID 
# start-date=2009-04-20, FR 20/04/2009
STARTDATE = mycreds.STARTDATE

# end-date=2009-05-20, 20/05/2009, take today
ENDDATE = mycreds.ENDDATE


# For the full list of dimensions & metrics, check https://developers.google.com/analytics/devguides/reporting/core/dimsmets
DIMENSIONS = [
    'ga:date', 
    'ga:source',
    'ga:medium', 
    'ga:userType', 
    'ga:deviceCategory',
    'ga:pagePath',
    'ga:country',
    'ga:date',
    'ga:hour'
    ]

    
    
METRICS = [
    'ga:users', 
    'ga:sessions', 
    'ga:pageviews',
    'ga:newUsers'
    ]

def initialize_analyticsreporting():
  credentials = ServiceAccountCredentials.from_json_keyfile_name(
      KEY_FILE_LOCATION, SCOPES)

  # Build the service object.
  analytics = build('analyticsreporting', 'v4', credentials=credentials)

  return analytics


def get_report(analytics):
  return analytics.reports().batchGet(
      body={
          'reportRequests': [
              {
                  'viewId': VIEW_ID,
                  # 'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
                  'dateRanges': [{'startDate': STARTDATE, 'endDate': ENDDATE}],
                  'metrics': [{'expression': i} for i in METRICS],
                  'dimensions': [{'name': j} for j in DIMENSIONS]
              }]
      }
  ).execute()


def convert_to_dataframe(response):

  for report in response.get('reports', []):
    columnHeader = report.get('columnHeader', {})
    dimensionHeaders = columnHeader.get('dimensions', [])
    metricHeaders = [i.get('name', {}) for i in columnHeader.get(
        'metricHeader', {}).get('metricHeaderEntries', [])]
    finalRows = []

    for row in report.get('data', {}).get('rows', []):
      dimensions = row.get('dimensions', [])
      metrics = row.get('metrics', [])[0].get('values', {})
      rowObject = {}

      for header, dimension in zip(dimensionHeaders, dimensions):
        rowObject[header] = dimension

      for metricHeader, metric in zip(metricHeaders, metrics):
        rowObject[metricHeader] = metric

      finalRows.append(rowObject)

  dataFrameFormat = pd.DataFrame(finalRows)
  return dataFrameFormat


# def export_to_sheets(df):
#     gc = pygsheets.authorize(service_file='client_secrets.json')
#     sht = gc.open_by_key(SHEET_ID)
#     wks = sht.worksheet_by_title('Sheet1')
#     wks.set_dataframe(df, 'A1')


#generate today date for header string and
todayDate = datetime.today()
todayDateStr = todayDate.strftime("%Y%m%d%H%M")

def export_to_sheets_csv(df):
  #Add it to pd dataframe and csv header
  df['timestampApiCall']= todayDate
  df['viewID'] = mycreds.VIEW_ID
  df['viewName'] = mycreds.VIEW_NAME
  df.to_csv(todayDateStr+mycreds.CSV_FILENAME, date_format='%Y%m%d')
  print('filename :: ',todayDateStr+mycreds.CSV_FILENAME)
  # print(df)

  
def main():
  analytics = initialize_analyticsreporting()
  response = get_report(analytics)
  df = convert_to_dataframe(response)  # df = pandas dataframe
  
#   print('\n--- head ')
#   print(df.head(5))
#   print('\n--- describe ')
#   print(df.describe)

  # I will do locally
  print("\n --- csv exported ")
  export_to_sheets_csv(df)  # outputs to spreadsheet. comment to skip


if __name__ == '__main__':
  main()
