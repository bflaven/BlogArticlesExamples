#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python seleniumControl_5.py



"""

from selenium import webdriver
browser = webdriver.Firefox()
browser.get('http://flaven.fr/')
# searchElem = browser.find_element_by_xpath('//*[@id="search-2"]/form/label/input')
searchElem = browser.find_element_by_xpath('//*[@id="search-2"]/form/label/input')
searchElem.send_keys("Python")
submitElem = browser.find_element_by_css_selector(
    '.search-submit')
submitElem.submit()

