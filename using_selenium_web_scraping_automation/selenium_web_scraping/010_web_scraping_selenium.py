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
python 010_web_scraping_selenium.py




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

# install chrome
brew --cask install chromedriver

# install firefox
brew install geckodriver

# brew update
brew upgrade


# to export requirements
pip freeze > web_scraping_selenium_1.txt


# to install
pip install -r web_scraping_selenium_1.txt


# update conda if needed by running
conda update -n base -c defaults conda


[source]
https://github.com/philipperemy/selenium-python-examples/blob/master/example_1.py



"""
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://www.python.org")
assert "Python" in driver.title
elem = driver.find_element(By.NAME, "q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
time.sleep(10)
driver.close()
