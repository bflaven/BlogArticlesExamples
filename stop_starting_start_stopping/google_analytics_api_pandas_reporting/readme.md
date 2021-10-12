# google_analytics_api_pandas_reporting
Some exploration connecting Google Analytics API to Pandas.

## 1. REQUIREMENTS
You need to grab VIEW_ID from Google Analytics in https://analytics.google.com/ and KEY_FILE_LOCATION in https://console.cloud.google.com/ 

## 2. SETTINGS

### (i) VIEW_ID
**Following below steps to get View ID.**
1. Sign in to Google Analytics (https://analytics.google.com/).
2. Click Admin, and navigate to View.
3. In the VIEW column, click View Settings.
4. View ID places in Basic Settings

**The View ID need to be set in VIEW_ID = '<VIEW-ID-HERE>'**
Example : VIEW_ID = '456787654'



### (ii) KEY_FILE_LOCATION
You can downlaod the file from https://console.cloud.google.com/

**The Key file location need to be set in KEY_FILE_LOCATION = '<FILE-NAME-HERE>'**
Example : KEY_FILE_LOCATION = 'fake-lmp-pETCFO5mFPam.json'

## 3. FEW SCRIPTS USING PANDAS AND GA

```bash
005_google_analytics_api_pandas_reporting.py
006_google_analytics_api_pandas_reporting.py
007_google_analytics_api_pandas_reporting.py
008_google_analytics_api_pandas_reporting.py
009_google_analytics_api_pandas_reporting.py
010_google_analytics_api_pandas_reporting.py
011_google_analytics_api_pandas_reporting.py
012_google_analytics_api_pandas_reporting.py
014_google_analytics_api_pandas_reporting.py
015_google_analytics_api_pandas_reporting.py
```

## 3. NOTEBOOK
```bash
google_analytics_python_notebook_3.ipynb
```
## 4. OTHER INFOS

**Extract from function def get_report(analytics)**
See 015_google_analytics_api_pandas_reporting.py

```python
# mycreds.py for credentials file
import mycreds  

# outsource in mycreds.py
'dateRanges': [{'startDate': mycreds.STARTDATE, 'endDate': mycreds.ENDDATE}],

# declare in the script
'dateRanges': [{'startDate': STARTDATE, 'endDate': ENDDATE}],
```
**Examples of date**

```bash
# 20/04/2009 in FR
start-date=2009-04-20 
# 20/05/2009 in FR
end-date=2009-05-20
```

## 5. OTHER INFOS FROM GOOGLE ANALYTICS

All the information came from https://ga-dev-tools.web.app/query-explorer/

## 1. Dimensions in GA

```bash
# - User (Dimensions)

# --- User Type
ga:userType

# --- Count of Sessions
ga:sessionCount

# --- Days Since Last Session
ga:daysSinceLastSession

# --- User Defined Value
ga:userDefinedValue

# --- User Bucket
ga:userBucket
# Def :: Randomly assigned users tag to allow A/B testing and splitting of remarketing lists. Ranges from 1-100.
```

```bash

# - Traffic Sources (Dimensions)
ga:referralPath
# - Page Tracking (Dimensions)
ga:pagePath
ga:pagePathLevel1
ga:pagePathLevel2
ga:pagePathLevel3
ga:pagePathLevel4
ga:landingPagePath
ga:secondPagePath
ga:exitPagePath
ga:previousPagePath

# - Geo Network (Dimensions)
ga:continent
ga:country
ga:city
ga:latitude
ga:longitude

# - Time (Dimensions)
# --- Date
ga:date
# --- Year
ga:year
# --- Month of the year
ga:month
# --- Week of the Year
ga:week
# --- Day of the month
ga:day
# --- Hour
ga:hour
# --- Minute
ga:minute

# - Session (Dimensions)
ga:sessionDurationBucket
```


## 2. Metrics in GA

```bash
# --- Users
ga:users
# --- New Users
ga:newUsers
# --- % New Sessions
ga:percentNewSessions
# --- 1 Day Active Users
ga:1dayUsers
# --- 7 Day Active Users
ga:7dayUsers
# --- 14 Day Active Users
ga:14dayUsers
# --- 28 Day Active Users
ga:28dayUsers
# --- 30 Day Active Users
ga:30dayUsers
# --- Number of Sessions per User
ga:sessionsPerUser
```

## 3. GA DIMENSIONS & METRICS inserted in Python

For the full list of dimensions & metrics, check https://developers.google.com/analytics/devguides/reporting/core/dimsmets

*Extract from 014_google_analytics_api_pandas_reporting.py*

```python
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

```


## 6. CREATE A PYTHON ENVIRONMENT

### 6.1 Using conda

- Create an Environment with version Python 3.8.3 To create a virtual environment use:
```bash
conda create --name pandas_ga_1 python=3.8.3
```

- List Environments: You can list all the available environments with:
```bash
conda info --envs
```

- Activate an Environment : Before you can start using the environment you need to activate it:
```bash
source activate pandas_ga_1
```
- Deactivate an Environment If you are done working with the virtual environment you can deactivate it with:
```bash
conda deactivate
```
- Remove an Environment If you want to remove an environment from Conda use:
```bash
conda remove --name pandas_ga_1 --all
```

### 6.2 Freeze the environment

The freeze command list the requirements to use the GA scripts.
This creates a .txt file with all packages listed inside.

Then go where you want to replicate the project and create a new virtual environment in project's root directory. 

Activate the new environment. Import the package list we just created. And finally run this command to install all the required packages.

```bash
# pip freeze > requirements_1_pandas_ga_1.txt
# pip freeze > requirements_2_pandas_ga_1.txt
# pip freeze > requirements_3_pandas_ga_1.txt
```

### 6.3 Install the requirements
That is all you need to do to isolate your python project dependencies.

```bash
pip install -r requirements.txt
```

## 7. SETUP GOOGLE ANALYTICS API IN GOOGLE CONSOLE
One of the most important thing to do as a requirement. How to set up in the google console (https://console.cloud.google.com/)


**2 youtube videos that explain how-to set up google analytics api in google console**

- VIDEO_1 :: [https://www.youtube.com/watch?v=Xpx--7g6FKk](https://www.youtube.com/watch?v=Xpx--7g6FKk)
- VIDEO_2 :: [https://www.youtube.com/watch?v=N2bbJQroGB4](https://www.youtube.com/watch?v=N2bbJQroGB4)


### 7.1 go to this address
Everythong is avalibale at :
- https://console.cloud.google.com/apis/credentials
- shttps://console.cloud.google.com/


### 7.2 Create a project e.g. &lt;project-name-app&gt;
- Project name :: &lt;project-name-app&gt;

### 7.3 Activate the API named "Google Analytics Data API" for the &lt;name-of-your-app&gt;

**The "Google Analytics Data API" will give "Accesses report data in Google Analytics."**

- App name :: &lt;name-of-your-app&gt;

### 7.4 configure your access the API
- select user data
- select webbrowser

## 8. RESSSOURCES

- [https://github.com/Zrce/Python-Pandas-SEO-Videos/find/master](https://github.com/Zrce/Python-Pandas-SEO-Videos/find/master)
- [https://lvngd.com/blog/access-the-google-analytics-reporting-api-with-python/](https://lvngd.com/blog/access-the-google-analytics-reporting-api-with-python/)
- [https://www.jcchouinard.com/google-api/](https://www.jcchouinard.com/google-api/)


- [https://github.com/angelovila/ga-export/blob/master/gaexport.py](https://github.com/angelovila/ga-export/blob/master/gaexport.py)
- [https://github.com/mehd-io/helloAnalytics2Pandas/blob/master/helloAnalytics2Pandas.py](https://github.com/mehd-io/helloAnalytics2Pandas/blob/master/helloAnalytics2Pandas.py)
- [https://plotly.com/python/v3/ipython-notebooks/big-data-analytics-with-pandas-and-sqlite/#part-2-sqlite-time-series-with-pandas](https://plotly.com/python/v3/ipython-notebooks/big-data-analytics-with-pandas-and-sqlite/#part-2-sqlite-time-series-with-pandas)
- [https://medium.com/henry-jia/google-analytics-dashboard-project-a718112edf3a](https://medium.com/henry-jia/google-analytics-dashboard-project-a718112edf3a)
- [https://towardsdatascience.com/building-a-plotly-dash-app-from-google-sheets-part-3-666c496c8a71](https://towardsdatascience.com/building-a-plotly-dash-app-from-google-sheets-part-3-666c496c8a71)
- [https://www.youtube.com/watch?v=CmSKVW1v0xM](https://www.youtube.com/watch?v=CmSKVW1v0xM)
- [Guide to Google Analytics with Python Bby Woratana Ngarmtrakulchol](http://www.byperth.com)
- [Great explanation to set-up "Google Analytics Data API" access](https://insightwhale.com/how-to-set-up-google-analytics-api-step-by-step-guide/)
- [The official doc :: Google Analytics Data API (GA4)](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries)
- [Look for Repositories Python+GA+export and put it in pandas](https://github.com/search?l=Python&q=google+analytics+export&type=Repositories)
- [https://www.datacourses.com/an-api-based-etl-pipeline-with-python-part-1-259/](https://www.datacourses.com/an-api-based-etl-pipeline-with-python-part-1-259/)
- [https://www.digishuffle.com/blogs/google-analytics-reporting-python/](https://www.digishuffle.com/blogs/google-analytics-reporting-python/)
- [https://www.themarketingtechnologist.co/google-oauth-2-enable-your-application-to-access-data-from-a-google-user/](https://www.themarketingtechnologist.co/google-oauth-2-enable-your-application-to-access-data-from-a-google-user/)
- [https://serhiipuzyrov.com/2021/03/how-to-get-google-analytics-4-property-report-to-pandas-dataframe-using-api/](https://serhiipuzyrov.com/2021/03/how-to-get-google-analytics-4-property-report-to-pandas-dataframe-using-api/)
- [https://quantabee.wordpress.com/2012/12/17/google-analytics-pandas/#setup](https://quantabee.wordpress.com/2012/12/17/google-analytics-pandas/#setup)
- [https://www.themarketingtechnologist.co/getting-started-with-the-google-analytics-reporting-api-in-python/](https://www.themarketingtechnologist.co/getting-started-with-the-google-analytics-reporting-api-in-python/)
- [https://canonicalized.com/google-analytics-python-pandas-plolty/](https://canonicalized.com/google-analytics-python-pandas-plolty/)
- [https://github.com/RitwikGA/GoogleAnalytics-Pandas-Sheet/blob/master/gaExport.py](https://github.com/RitwikGA/GoogleAnalytics-Pandas-Sheet/blob/master/gaExport.py)
- [https://janakiev.com/blog/python-google-analytics/](https://janakiev.com/blog/python-google-analytics/)
