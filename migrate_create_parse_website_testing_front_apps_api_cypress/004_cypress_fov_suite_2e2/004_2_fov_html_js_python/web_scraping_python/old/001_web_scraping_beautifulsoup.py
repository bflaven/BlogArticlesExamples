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
python 001_web_scraping_beautifulsoup.py

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



print("\n--- 1. Grabbing the site")

URL = "https://www.rfi.fr/fr/"
html = requests.get(URL)
time.sleep(2)

# DEBUG
print(html)

"""
print("\n--- 2. Load in BeautifulSoup")
# Load in BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# DEBUG
# print(soup)
time.sleep(3)

print("\n--- 3. Grab labels in main navigation")


iso_language_code = str(sys.argv[1])
print(f"\n--- iso_language_code ::: {iso_language_code}")


css_selector = 'menu-dashboard > a > div.wp-menu-name'
fist_level_entries = soup.find_all("div", class_="wp-menu-name")

maxEntries = len(fist_level_entries)
print(f"\n--- maxEntries ::: {maxEntries}")

#generate today date for header string and
todayDate = datetime.today()
todayDateStr = todayDate.strftime("%Y%m%d%H%M")
code_lng = str(iso_language_code)

fileName = f"{code_lng}_main_nav_labels_{todayDateStr}.txt"
 
# print(fist_level_entries)
# Iterate over each fist_level_entry grab text
# for fist_level_entry in fist_level_entries:
for i, fist_level_entry in enumerate(fist_level_entries):
    file = open("main_nav_labels_files/"+fileName+"","a")
    # if i == 0:
    #     file.write("[")
    print(fist_level_entry.get_text())
    # file.write(fist_level_entry.get_text()) 
    file.writelines("\""+fist_level_entry.get_text()+"\",")   
    # if i == (maxEntries):
    #     file.writelines("\""+fist_level_entry.get_text()+"\"]")
        
file.close() 
print ('\n --- 4. main_nav_labels_files/'+fileName+' is created')

# close web browser
browser.close()
"""


"""

with requests.Session() as s:
    index_page= s.get('https://cypress.mydomain.priv/wordpress/wp-admin')
    soup = BeautifulSoup(index_page.text, 'html.parser')
    print(soup.title)


URL = 'https://cypress.mydomain.priv/wordpress/wp-admin'
data = requests.get(URL)
soup = BeautifulSoup(data, "html.parser")
print(soup)




soup = BeautifulSoup(data, "html.parser")


# EXAMPLE_1
# css_selector = '#adminmenuwrap > #adminmenu > li'
css_selector = 'menu-dashboard > a > div.wp-menu-name'
# css_selector = '#adminmenuwrap > #adminmenu > .wp-first-item'
# for item in soup.select(css_selector):
#     print(item.get_text())
# <div class="wp-menu-name">
fist_level_entries = soup.find_all("div", class_="wp-menu-name")
# print(fist_level_entries)
# Iterate over each fist_level_entry grab text
for fist_level_entry in fist_level_entries:
    print(fist_level_entry.get_text())




"""
# LOG = browser.find_elements_by_xpath(
#     '//*[@id="login-dialog-dialog"]/div[2]/div[2]/div[2]/form/input[1]')
# LOG[0].click()
# print("Login Successful")
# time.sleep(5)

# elem = browser.find_element_by_name("q")
# elem.click()
# elem.clear()

# elem.send_keys("Geeks for geeks ")

# # using keys to send special KEYS
# elem.send_keys(Keys.RETURN)

# print("Search Successful")

# # closing the browser
# browser.close()