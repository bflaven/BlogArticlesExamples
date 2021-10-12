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
python 010_google_analytics_api_pandas_reporting.py

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

conda install -c anaconda matplotlib


'''
import pandas as pd
import matplotlib.pyplot as plt
plt.style.use('ggplot')

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
# print(response)


def ga_response_dataframe(response):
    row_list = []
    # Get each collected report
    for report in response.get('reports', []):
        # Set column headers
        column_header = report.get('columnHeader', {})
        dimension_headers = column_header.get('dimensions', [])
        metric_headers = column_header.get(
            'metricHeader', {}).get('metricHeaderEntries', [])

        # Get each row in the report
        for row in report.get('data', {}).get('rows', []):
            # create dict for each row
            row_dict = {}
            dimensions = row.get('dimensions', [])
            date_range_values = row.get('metrics', [])

            # Fill dict with dimension header (key) and dimension value (value)
            for header, dimension in zip(dimension_headers, dimensions):
                row_dict[header] = dimension

            # Fill dict with metric header (key) and metric value (value)
            for i, values in enumerate(date_range_values):
                for metric, value in zip(metric_headers, values.get('values')):
                    # Set int as int, float a float
                    if ',' in value or '.' in value:
                        row_dict[metric.get('name')] = float(value)
                    else:
                        row_dict[metric.get('name')] = int(value)

            row_list.append(row_dict)
    return pd.DataFrame(row_list)


df = ga_response_dataframe(response)
df.set_index('ga:deviceCategory', inplace=True)
df.head()
print(df.head())
axes = df.plot(kind='pie', figsize=(12.5, 6), subplots=True, legend=False)
plt.show()

# https://developers.google.com/analytics/devguides/reporting/core/v3/reference#startDate



