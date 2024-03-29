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

# to export requirements
pip freeze > web_scraping_selenium.txt


# to install
pip install -r web_scraping_selenium.txt


# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/web_scraping_python



[file]
python 016_web_scraping_selenium_wp.py

python 016_web_scraping_selenium_wp.py pt_PT
python 016_web_scraping_selenium_wp.py it_IT
python 016_web_scraping_selenium_wp.py fr_FR
python 016_web_scraping_selenium_wp.py es_ES
python 016_web_scraping_selenium_wp.py ru_RU
python 016_web_scraping_selenium_wp.py zh_CN
python 016_web_scraping_selenium_wp.py en_EN

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
pip install requests
pip install pandas
pip install selenium
pip install matplotlib
pip install seaborn

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
import sys
from datetime import datetime



# For using sleep function because selenium
# works only when the all the elements of the
# page is loaded.

options = webdriver.ChromeOptions()

# show the browser or not
options.headless = True # True or False
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
pwd = browser.find_element(By.XPATH, '//*[@id="user_pass"]')
# Leave it in clear....
pwd.send_keys('admin')
time.sleep(2)

btn = browser.find_element(By.XPATH, '//*[@id="wp-submit"]')
btn.click()
time.sleep(2)


# Reads password from a text file because
# saving the password in a script is just silly.
# with open('013_web_scraping_selenium_test_pwd.txt', 'r') as myfile:
#     Password = myfile.read().replace('\n', '')
#     pwd.send_keys(Password)
# time.sleep(2)


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