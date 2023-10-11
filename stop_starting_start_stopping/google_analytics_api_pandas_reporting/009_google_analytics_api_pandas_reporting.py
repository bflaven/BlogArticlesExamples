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
python 009_google_analytics_api_pandas_reporting.py

[source]
https://janakiev.com/blog/python-google-analytics/



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



credentials = ServiceAccountCredentials.from_json_keyfile_name(KEY_FILE_LOCATION, SCOPES)

# Build the service object.
analytics = build('analyticsreporting', 'v4', credentials=credentials)


response = analytics.reports().batchGet(body={
    'reportRequests': [{
        'viewId': VIEW_ID,
        'dateRanges': [{'startDate': '2020-01-01', 'endDate': '2020-12-31'}],
        'metrics': [
            {"expression": "ga:pageviews"},
            {"expression": "ga:avgSessionDuration"}
        ], "dimensions": [
            {"name": "ga:deviceCategory"}
        ]
    }]}).execute()

# OUTPUT
print(response)


# https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate



