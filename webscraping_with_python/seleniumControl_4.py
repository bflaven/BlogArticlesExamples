#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python3 seleniumControl_4.py



"""

from selenium import webdriver
browser = webdriver.Firefox()
browser.get('http://flaven.fr/')
# follows the "PUBLICATIONS" link careful this is case sensitive
linkElem = browser.find_element_by_link_text('PUBLICATIONS')
value = type(linkElem)
print(value)
# <class 'selenium.webdriver.remote.webelement.WebElement'>
linkElem.click()  
