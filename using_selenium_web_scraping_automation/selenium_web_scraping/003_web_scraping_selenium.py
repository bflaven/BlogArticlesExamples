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
python 003_web_scraping_selenium.py




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
https://til.simonwillison.net/selenium/selenium-python-macos
https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/python/tests/getting_started/test_first_script.py




"""

from selenium import webdriver
from selenium.webdriver.common.by import By


def test_search_wp():
    driver = webdriver.Chrome()

    driver.get("https://flaven.fr")

    title = driver.title
    # print(title)
    assert title == "@ Flaven.net – Bruno Flaven's website"

    driver.implicitly_wait(0.5)

    search_box = driver.find_element(By.XPATH, '//*[@id="search-2"]/form/label/input')
    search_button = driver.find_element(By.XPATH, '//*[@id="search-2"]/form/button')

    search_box.send_keys("WordPress")
    # search_box.send_keys("Python")

    search_button.click()

    driver.quit()

# call the function
test_search_wp()
