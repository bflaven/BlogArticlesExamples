#!/usr/bin/python
# -*- coding: utf-8 -*-


"""


[env]
# Conda Environment
# NO CONDA ENV

conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/stackabuse_scraper/

[file]
python3 stackabuse_scraper_website_002.py


# do not use python 2
python --version

#  use python 3
python3 --version

[required]
# install

#  do not use pip 2
pip --version

#  do not use pip 3
pip3 --version

# BeautifulSoup
pip3 install bs4

# other module
pip3 install requests
pip3 install time
pip3 install csv
pip3 install re

# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]
https://sodocumentation.net/beautifulsoup/topic/1940/locating-elements
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/
https://www.pluralsight.com/guides/web-scraping-with-beautiful-soup
https://stackoverflow.com/questions/23102833/how-to-scrape-a-website-which-requires-login-using-python-and-beautifulsoup


"""

import requests
import time
import csv
import re
from bs4 import BeautifulSoup


URL = 'https://cypress.mydomain.priv/wordpress/wp-admin/'
content = requests.get(URL)

