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
python 014_web_scraping_selenium_wp.py




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


https://stackoverflow.com/questions/23102833/how-to-scrape-a-website-which-requires-login-using-python-and-beautifulsoup
https://www.lambdatest.com/blog/how-to-get-page-source-in-selenium-webdriver/
https://pythonbasics.org/selenium-get-html/


"""
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from selenium import webdriver
from bs4 import BeautifulSoup
import requests

# For using sleep function because selenium
# works only when the all the elements of the
# page is loaded.

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument("--test-type")



# Creating an instance webdriver
browser = webdriver.Chrome(options=options)
browser.get('https://cypress.mydomain.priv/wordpress/wp-admin')





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




print("\n--- 1. You are in WP")


html = browser.page_source

time.sleep(2)
# DEBUG
# print(html)

print("\n--- 2. Load in BeautifulSoup")
# Load in BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# DEBUG
# print(soup)
time.sleep(3)

print("\n--- 3. Grab labels in main navigation")

css_selector = 'menu-dashboard > a > div.wp-menu-name'
fist_level_entries = soup.find_all("div", class_="wp-menu-name")
# print(fist_level_entries)
# Iterate over each fist_level_entry grab text
for fist_level_entry in fist_level_entries:
    print(fist_level_entry.get_text())
    # if the default WP language is italian
    file = open("it_IT_main_nav_labels.txt","a")
    # file.write(fist_level_entry.get_text()) 
    file.writelines(fist_level_entry.get_text())
    file.write("\n")
		
file.close() 
print ('it_IT_main_nav_labels.txt is created')

# close web browser
browser.close()



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
