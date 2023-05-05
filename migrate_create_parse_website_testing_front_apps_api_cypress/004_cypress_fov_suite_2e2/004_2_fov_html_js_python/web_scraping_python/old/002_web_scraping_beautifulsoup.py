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
cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/web_scraping_python/

[file]
python 002_web_scraping_beautifulsoup.py

python 001_web_scraping_beautifulsoup.py RFI_FR


# example
python 001_web_scraping_beautifulsoup.py pt_PT
python 001_web_scraping_beautifulsoup.py it_IT
python 001_web_scraping_beautifulsoup.py fr_FR
python 001_web_scraping_beautifulsoup.py es_ES
python 001_web_scraping_beautifulsoup.py ru_RU
python 001_web_scraping_beautifulsoup.py zh_CN
python 001_web_scraping_beautifulsoup.py en_EN

it_IT_main_nav_labels.txt

# the parameter
# 
--env LANG="pt_PT"
# 
--env LANG="it_IT"
# 
--env LANG="fr_FR"
# 
--env LANG="es_ES"
# 
--env LANG="ru_RU"
# 
--env LANG="zh_CN"





[required]
# install

# BeautifulSoup
pip install bs4

# other module
# go to the env
pip install requests
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog
pip install datetime

[source]
https://github.com/bflaven/book-learning-and-building-e2e-test-automation-with-cypress-and-okr

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


URL = "https://www.rfi.fr/fr/"
html = se.get(URL)
time.sleep(2)

# status 
# <Response [200]>
# print(html)  

# html
print(html.text)

# Load in BeautifulSoup
# soup = BeautifulSoup(html.text, "html.parser")

brandLang = str(sys.argv[1])
print(f"\n--- iso_language_code ::: {brandLang}")






# test_sites = [
#     'http://fashiontoast.com/',
#     'http://becauseimaddicted.net/',
#     'http://www.lefashion.com/',
#     'http://www.seaofshoes.com/',
# ]

# test_sites = [
#     'https://www.rfi.fr/fr/'
# ]


# for site in test_sites:
#     print(site)
#     # get page soure
#     response = se.get(site)
#     # print(response)
#     # print(response.text)
    
