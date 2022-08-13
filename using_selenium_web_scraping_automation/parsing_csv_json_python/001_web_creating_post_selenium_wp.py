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
cd /Users/brunoflaven/Documents/01_work/blog_articles/web_scraping_selenium/parsing_csv_json_python/


[file]
python 001_web_creating_post_selenium_wp.py


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



# Let's the user see and also load the element
# print(dir(browser))


login = browser.find_element(By.XPATH, '//*[@id="user_login"]')
login.send_keys('admin')
time.sleep(2)
pwd = browser.find_element(By.XPATH, '//*[@id="user_pass"]')


# Reads password from a text file because
# saving the password in a script is just silly.
# with open('017_web_scraping_selenium_wp.txt', 'r') as myfile:
#     Password = myfile.read().replace('\n', '')
#     pwd.send_keys(Password)
# time.sleep(2)



# I leave it in clear.... because it is for dev purpose
pwd.send_keys('admin')
time.sleep(2)
btn = browser.find_element(By.XPATH, '//*[@id="wp-submit"]')
btn.click()
time.sleep(2)




print("\n--- 1. You are in WP")
# time.sleep(2)
# DEBUG

print("\n--- 2. Fill a new post")
# go to post
browser.get('https://cypress.mydomain.priv/wordpress/wp-admin/post-new.php')
# time.sleep(2)

unique_insert = randomword(20)

# DEBUG
# print(unique_insert)

# title
title_field = browser.find_element(By.CSS_SELECTOR, '#title') 
title_field.send_keys(''+unique_insert+' Title')
# time.sleep(2)

# body
body_field = browser.find_element(By.CSS_SELECTOR, '#content') 
body_field.send_keys(''+unique_insert+' Body')
# time.sleep(2)


# SINGLE CATEGORY
# category_cbox = browser.find_element(By.CSS_SELECTOR, '#category-103') 
# category_cbox.click();
# time.sleep(2)


# MUTIPLE CATEGORIES
# categories = ['#category-101', 'category-106','#category-182', 'category-103','#category-108', 'category-165','#category-111']

# for category in categories:
#    print(category)
#    category_cbox = browser.find_element(By.CSS_SELECTOR, ''+category+'') 
#    category_cbox.click();
#    time.sleep(2)




# categories = ['//*[@id="category-101"]', '//*[@id="category-106"]','//*[@id="category-182"]', '//*[@id="category-103"]','//*[@id="category-108"]', '//*[@id="category-165"]','//*[@id="category-111"]']

# SINGLE CATEGORY
# category_cbox_1 = browser.find_element(By.XPATH, ''+(categories[0])+'') 
# category_cbox_1.click();
# time.sleep(2)

# category_cbox_2 = browser.find_element(By.XPATH, ''+categories[1]+'') 
# category_cbox_2.click();
# time.sleep(2)



"""
category-104
category-112
category-182
category-106
category-108
category-165
category-111

"""


# post_tags 
# tags_field = browser.find_element(By.XPATH, '//*[@id="new-tag-post_tag"]') 
# tags_field.send_keys('tag '+unique_insert+'')
# time.sleep(2)

# add_tag = browser.find_element(By.CSS_SELECTOR, '#post_tag > div > div.ajaxtag.hide-if-no-js > input.button.tagadd') 
# add_tag.click();
# time.sleep(2)



#publish
# submit = browser.find_element(By.XPATH, '//*[@id="publish"]') 
# submit.click()
# time.sleep(2)

#save draft
save_button = browser.find_element(By.XPATH, '//*[@id="save-post"]') 
save_button.click()
time.sleep(2)


        
# close web browser
browser.close()


