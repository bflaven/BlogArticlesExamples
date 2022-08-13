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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/selenium_web_scraping/


[file]
python 001_web_scraping_selenium_supernyv.py




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


[source]
https://medium.com/@supernyv/the-impossible-web-scraping-cfe9444d1d5e
https://github.com/supernyv/Data_Science_Projects/tree/main/Factors%20Influencing%20Salaries


"""

from bs4 import BeautifulSoup
import requests
import pandas as pd
from selenium import webdriver
import time
import matplotlib.pyplot as plt
import seaborn as sns


url = "https://money.usnews.com/careers/best-jobs/rankings/the-100-best-jobs/"
#headers = {"User-Agent": "Mozilla/5.0 (X11; CrOS x86_64 12871.102.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.141 Safari/537.36"}
#html = requests.get(url, headers=headers)
#But couldn't simply use request to get the data because the site is dynamic and needed scrolling and clicking to get more data

option = webdriver.ChromeOptions()

#Removes navigator.webdriver flag
options_settings = option.add_argument('--disable-blink-features=AutomationControlled')

#Open Browser
driver = webdriver.Chrome(options=options_settings)
# driver = webdriver.Chrome()

driver.maximize_window()
driver.get(url)


#Now to the actual Scrolling
pause_time = 10 #Seconds

#Get the length of the page
first_height = driver.execute_script("return document.body.scrollHeight") #"body" can be replaced with "documentElement"
print("Initial Page Length: ", first_height)

def load():
    """Function To Scroll Down"""
    global driver, first_height
    
    #Actual Scrolling command
    driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")
    time.sleep(pause_time) #Give time to load the next chunck
    
    # Calculate new scroll height and compare with last scroll height
    current_height = driver.execute_script("return document.body.scrollHeight")
    print("Current Page Length: ", current_height)
    if current_height == first_height:
        return 0;
    first_height = current_height

#Load Scroll many times
while True:
    load()
        
    if load() == 0: #Load returns 0 when the page height remained unchanged after a new scroll
        print("Hit the bottom!")
        time.sleep(pause_time) #Give time to load next chunk if there is still more
        
        #Now click on the load button to load the remaining data
        try:
            driver.find_elements_by_xpath("//*[text()='Load More']")[0].click() #Click on the Load Button
            print("Load More Button Clicked!\nLoading More Data...")
            load() #Load the next chuncks
        except:
            print("Reached bottom of page, no further data to load.")
            break


