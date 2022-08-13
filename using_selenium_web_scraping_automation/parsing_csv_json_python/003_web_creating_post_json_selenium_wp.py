#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/parsing_csv_json_python/


[file]
python 003_web_creating_post_json_selenium_wp.py


[required]
# install

# BeautifulSoup
pip install bs4

# other module
pip install requests
pip install selenium
pip install datetime

# more for selenimum

# download selenimum
curl https://files.pythonhosted.org/packages/ed/9c/9030520bf6ff0b4c98988448a93c04fcbd5b13cd9520074d8ed53569ccfe/selenium-3.141.0.tar.gz > selenium.tar.gz

# unpack selenimum
tar -xzvf selenium.tar.gz

# install selenimum
cd selenium-3.141.0
python setup.py install


brew --cask install chromedriver

# to export requirements
pip freeze > web_scraping_selenium_1.txt


# to install
pip install -r web_scraping_selenium_1.txt


# update conda if needed by running
conda update -n base -c defaults conda

[SOURCE]
https://www.softwaretestinghelp.com/select-check-box-in-selenium/#5_By_CSS_Selector


"""
# selenium
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.alert import Alert
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# scrapping
from bs4 import BeautifulSoup

# other
import time
from datetime import datetime
import requests
import sys
import random, string
import os
import json
from datetime import datetime

# pandas
import pandas as pd


def randomword(length):
   letters = string.ascii_lowercase
   return ''.join(random.choice(letters) for i in range(length))


# For using sleep function because selenium
# works only when the all the elements of the
# page is loaded.

options = webdriver.ChromeOptions()

# show the browser or not
options.headless = False # True or False

options.add_argument('--ignore-certificate-errors')
options.add_argument("--test-type")
options.add_argument("start-maximized")
options.add_argument("--window-size=1920,1080")



# Creating an instance webdriver
browser = webdriver.Chrome(options=options)
browser.maximize_window()

browser.get('https://cypress.mydomain.priv/wordpress/wp-admin')


login = browser.find_element(By.XPATH, '//*[@id="user_login"]')
login.send_keys('admin')
time.sleep(2)
pwd = browser.find_element(By.XPATH, '//*[@id="user_pass"]')


# I leave it in clear.... because it is for dev purpose
pwd.send_keys('admin')
time.sleep(2)
btn = browser.find_element(By.XPATH, '//*[@id="wp-submit"]')
btn.click()
time.sleep(2)




f = open("datasets/posts_data_1.json", "r", encoding="utf-8")
data = json.load(f)
f.close()


# Today
todayDate = datetime.today()



# LOOP
for index, _post in enumerate(data["posts"]): 
   
   # print(_post["post_title"])
   unique_insert = randomword(20)
   print(unique_insert)
   print(todayDate)

   browser.get('https://cypress.mydomain.priv/wordpress/wp-admin/post-new.php')
   time.sleep(2)

   # fill the post
   # title
   title_field = browser.find_element(By.CSS_SELECTOR, '#title') 
   title_field.send_keys(''+str(todayDate)+' '+unique_insert+' '+_post["post_title"]+'')
   time.sleep(2)

   # body
   body_field = browser.find_element(By.CSS_SELECTOR, '#content') 
   body_field.send_keys(''+str(todayDate) +' '+unique_insert+' '+_post["post_content"]+'')
   time.sleep(2)
   
   # click on submit button
   submit = browser.find_element(By.XPATH, '//*[@id="publish"]') 
   submit.click()
   time.sleep(2)


   # get back to lists for new form
   browser.get('https://cypress.mydomain.priv/wordpress/wp-admin/edit.php')
   time.sleep(2)

   
   # ask for new form
   new_form = browser.find_element(By.CSS_SELECTOR, '#wpbody-content > div.wrap > a') 
   new_form.click();
   time.sleep(2)

   print('\n--- Post '+str(index)+' done in WP')


# close web browser
browser.close()


