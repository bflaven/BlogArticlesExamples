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

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_selenium_web_scraping_automation/selenium_web_scraping/


[file]
python 013_web_scraping_selenium.py




[required]
# install

# BeautifulSoup
pip install bs4

# other module
pip install requests
pip install pandas
pip install selenium
pip install matplotlib
pip install seaborn

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


"""
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from selenium import webdriver


# For using sleep function because selenium
# works only when the all the elements of the
# page is loaded.

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument("--test-type")


"""

You need to have a local WP installed and declare in your hosts file the domain
https://cypress.mydomain.priv/wordpress/ that leads to WP.

# edit your hosts on a mac
sudo -s
vi /etc/hosts


# type I for insert

# cut and paste the domain cypress.mydomain.priv
127.0.0.1 cypress.mydomain.priv

# save ctrl+C then :wq
# you are good

# quit the root session
exit

# just ping in the console, to ensure that it is OK
ping localhost
ping 127.0.0.1
ping cypress.mydomain.priv



"""

# Creating an instance webdriver
browser = webdriver.Chrome(options=options)
browser.get('http://cypress.mydomain.priv/wordpress/wp-admin')

# Let's the user see and also load the element
# print(dir(browser))


login = browser.find_element(By.XPATH, '//*[@id="user_login"]')
login.send_keys('admin')
time.sleep(2)

# solution_1 
pwd = browser.find_element(By.XPATH, '//*[@id="user_pass"]')
pwd.send_keys('admin')
time.sleep(2)


# solution_2
# with open('013_web_scraping_selenium_test_pwd.txt', 'r') as myfile:
#     password = myfile.read().replace('\n', '')
#     login = browser.find_element(By.XPATH, '//*[@id="user_pass"]')
#     login.send_keys(password)
# time.sleep(2)




btn = browser.find_element(By.XPATH, '//*[@id="wp-submit"]')
btn.click()
time.sleep(2)




print("You are in WP dashboard... it can be Jira :)")

# closing the browser
browser.close()
