#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name sitemap_generator python=3.9.13
conda info --envs
source activate sitemap_generator
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_sitemap_generator.txt


# to install
pip install -r requirements_sitemap_generator.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/sitemap_generator/

[file]
python 001_timezone_explained_python.py

# other module
# go to the env

# for sitemap
pip install requests
pip install beautifulsoup4
pip install lxml


# for app for sitemap
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog



"""

import pytz
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from pytz import timezone

CHOSEN_TIMEZONE = 'UTC'
# CHOSEN_TIMEZONE ='Europe/Paris'

# TIME
# Get the current time in UTC
now_utc = datetime.now(timezone(CHOSEN_TIMEZONE))

# Convert to the desired timezone (in this case, UTC)
now_pacific = now_utc.astimezone(timezone(CHOSEN_TIMEZONE))

# Format the date string in ISO 8601 format with timezone offset
date_string = now_pacific.strftime('%Y-%m-%dT%H:%M:%S+00:00')

print(date_string)



# V1
# Get a list of all available time zones
# time_zones = pytz.all_timezones

# Print the time zones
# for tz in time_zones:
#     print(tz)


# V2
# Get a list of commonly used time zones
# time_zones = pytz.common_timezones

# Print the time zones
# for tz in time_zones:
#     print(tz)

# DEPOT
# different timezone
# ['UTC','US/Pacific','Europe/Berlin', 'Europe/Paris']

# fmt = "%Y-%m-%d %H:%M:%S %Z%z"
# timezonelist = ['UTC', 'US/Pacific', 'Europe/Berlin']
# for zone in timezonelist:

#     now_time = datetime.now(timezone(zone))
#     print now_time.strftime(fmt)
