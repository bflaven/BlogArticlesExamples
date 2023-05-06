#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
# NO CONDA ENV
conda create --name po_launcher_e2e_cypress python=3.9.13
conda info --envs
source activate po_launcher_e2e_cypress
source activate parse_website

conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > po_launcher_e2e_cypress.txt


# to install
pip install -r po_launcher_e2e_cypress.txt


# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/web_scraping_python

[file]
python 003_META_web_scraping_beautifulsoup.py


"""
import time
from bs4 import BeautifulSoup
import requests
import sys
from datetime import datetime



print("\n--- 1. Grabing the site")


with requests.Session() as se:
    se.headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en"
    }

urls = [
    # 'https://www.rfi.fr/fr/',
    # 'https://flaven.fr/bruno-flaven-resume-cv/',
    'https://www.france24.com/fr/',

]

for url in urls:
    # print(url)
    # get page source
    # response = se.get(url)
    # print(response)
    # print(response.text)
    html = se.get(url)
    time.sleep(2)

    # status
    # <Response [200]>
    # print(html)

    # html
    # print(html.text)

    # Load in BeautifulSoup
    # soup = BeautifulSoup(html.text, "html.parser")
    # print(soup)

    # Make a GET request to the webpage and get its content
    response = requests.get(url)
    content = response.content

    # Parse the content using BeautifulSoup
    soup = BeautifulSoup(html.text, 'html.parser')

    # Get the page slug from the URL
    slug = url.split('/')[-2]

    # Create an array to store the metadata
    metadata = [
        ['slug', slug]
    ]

    # Find all the metadata tags on the page
    meta_tags = soup.find_all('meta')

    # Loop through each meta tag and extract its properties
    for tag in meta_tags:
        # tag_type = tag.get('property') or tag.get('name')
        tag_type_property = tag.get('property')
        tag_type_name = tag.get('name')
        tag_content = tag.get('content')
        if tag_type_property and tag_content:
            metadata.append(['property_tag',
                            tag_type_property, tag_content])
        if tag_type_name and tag_content:
            metadata.append(['name_tag', tag_type_name, tag_content])
            
    # Find the title tag and extract its text
    title_tag = soup.find('title')
    if title_tag:
        metadata.append(['title_tag', 'title', title_tag.text])

    # Print the metadata array
    print(metadata)





    """ chat GPT query

        # query
        In python, with BeautifulSoup, can you write a parsing script that grab in the source page: the slug value, the tag title value and all the tags metadata values e.g og:image, og:locale, description, twitter:card... etc and store it in an array like the below
    
        page_asie_pacifique: [
                ['slug','asie-pacifique/'],
                // title
                ['title_tag','title', 'XXX_TEXT'],
                // property
                ['property_tag','og:image', 'XXX_TEXT'], 
                ['property_tag','og:locale', 'XXX_TEXT'], 
                ['property_tag', 'og:site_name', 'XXX_TEXT'], 
                ['property_tag', 'og:type', 'website', 'XXX_TEXT'],
                ['property_tag', 'og:title', 'XXX_TEXT'], 
                ['property_tag', 'og:description', "XXX_TEXT"], 
                ['property_tag', 'og:url', 'XXX_TEXT'], 
                ['property_tag', 'fb:app_id', 'XXX_TEXT'], 
                ['property_tag', 'fb:pages', 'XXX_TEXT'],
                // name
                ['name_tag', 'description', "XXX_TEXT"], 
                ['name_tag', 'twitter:card', 'summary'], 
                ['name_tag', 'twitter:site', 'XXX_TEXT'], 
                ['name_tag', 'twitter:creator', 'XXX_TEXT'], 
                ['name_tag', 'keywords', 'XXX_TEXT'], 
                ['name_tag', 'apple-mobile-web-app-title', 'XXX_TEXT'], 
                ['name_tag', 'application-name', 'XXX_TEXT'], 
                ['name_tag', 'msapplication-TileColor', 'XXX_TEXT'], 
                ['name_tag', 'theme-color', 'XXX_TEXT'], 
                ['name_tag', 'apple-mobile-web-app-capable', 'XXX_TEXT']
            ]

# OUTPUT FROM ChatGPT

Yes, it's possible to write a parsing script using BeautifulSoup in Python to extract the metadata from a webpage and store it in an array in the format you specified. Here's an example script that demonstrates how to do it:

from bs4 import BeautifulSoup
import requests

# URL of the webpage to parse
url = 'https://example.com/'

# Make a GET request to the webpage and get its content
response = requests.get(url)
content = response.content

# Parse the content using BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')

# Get the page slug from the URL
slug = url.split('/')[-2]

# Create an array to store the metadata
metadata = [
    ['slug', slug]
]

# Find all the metadata tags on the page
meta_tags = soup.find_all('meta')

# Loop through each meta tag and extract its properties
for tag in meta_tags:
    tag_type = tag.get('property') or tag.get('name')
    tag_content = tag.get('content')
    if tag_type and tag_content:
        metadata.append([tag.name+'_tag', tag_type, tag_content])

# Find the title tag and extract its text
title_tag = soup.find('title')
if title_tag:
    metadata.append(['title_tag', 'title', title_tag.text])

# Print the metadata array
print(metadata)

This script first makes a GET request to the webpage and gets its content. Then it uses BeautifulSoup to parse the HTML content and extract the metadata tags on the page. For each metadata tag, it checks its property or name attribute to determine its type and extracts its content attribute. It stores this information in the metadata array in the format you specified.

The script also finds the title tag on the page and extracts its text. It stores this information in the metadata array as well.

Finally, the script prints the metadata array. You can modify this script to save the metadata array to a file or database for further processing.

# TRY_1 See https://stackoverflow.com/questions/36768068/get-meta-tag-content-property-with-beautifulsoup-and-python         
title = soup.find("meta", property="og:title")
url = soup.find("meta", property="og:url")

print(title["content"] if title else "No meta title given")
print(url["content"] if url else "No meta url given")
    """


# DEPOT
# urls = [
#     'http://fashiontoast.com/',
#     'http://becauseimaddicted.net/',
#     'http://www.lefashion.com/',
#     'http://www.seaofshoes.com/',
# ]

# urls = [
#     'https://www.rfi.fr/fr/'
# ]


