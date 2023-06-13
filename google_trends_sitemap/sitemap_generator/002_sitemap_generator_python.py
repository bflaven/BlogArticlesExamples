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
pip freeze > sitemap_generator.txt


# to install
pip install -r sitemap_generator.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/sitemap_generator/

[file]
python 002_sitemap_generator_python.py

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


# QUERY_1_OPENAI
# Can you write a Python script that create a sitemap in xml with the help of BeautifulSoup. The url to parse is stored in a variable named "baseUrl".

"""


"""
Sure! Here's a Python script that uses BeautifulSoup to create a sitemap in XML format:


"""

import requests
from bs4 import BeautifulSoup
from datetime import datetime
from pytz import timezone

SITEMAP_FILENAME_PATH_OUTPUT = 'output/sitemap_generator_python_2.xml'


# The URL to parse
# baseUrl = 'https://example.com'
# baseUrl = 'https://spiritpopfestival.fr/'
baseUrl = 'https://flaven.fr/'

# Send a GET request to the base URL
response = requests.get(baseUrl)

# Create a BeautifulSoup object with the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Create a sitemap object
sitemap = BeautifulSoup(features='xml')

# Create the root element of the sitemap
urlset = sitemap.new_tag(
    'urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

# TIME
# Get the current time in UTC
now_utc = datetime.now(timezone('UTC'))

# Convert to the desired timezone (in this case, UTC)
now_pacific = now_utc.astimezone(timezone('UTC'))

# different timezone
# ['UTC','US/Pacific','Europe/Berlin']


# Format the date string in ISO 8601 format with timezone offset
date_string = now_pacific.strftime('%Y-%m-%dT%H:%M:%S+00:00')

# print(date_string)


# Add each URL to the sitemap
for link in soup.find_all('a'):
    url = sitemap.new_tag('url')
    loc = sitemap.new_tag('loc')
    lastmod = sitemap.new_tag('lastmod')
    priority = sitemap.new_tag('priority')


    loc.string = link.get('href')
    url.append(loc)

    lastmod.string = date_string
    url.append(lastmod)

    priority.string = '0.60'
    url.append(priority)

    urlset.append(url)
    urlset.append("\n\n")

# Add the root element to the sitemap
sitemap.append(urlset)

# Save the sitemap to a file
with open(SITEMAP_FILENAME_PATH_OUTPUT, 'w') as f:
   f.write(str(sitemap))
    

"""
In this script, we first import the necessary modules: requests for sending HTTP requests and BeautifulSoup for parsing the HTML content.

We then send a GET request to the base URL and create a BeautifulSoup object with the HTML content. We also create a new sitemap object using BeautifulSoup with the 'xml' feature.

Next, we create the root element of the sitemap and add each URL to the sitemap by finding all 'a' tags in the HTML content and extracting their 'href' attribute.

Finally, we add the root element to the sitemap and save it to a file named 'sitemap.xml'.

"""
