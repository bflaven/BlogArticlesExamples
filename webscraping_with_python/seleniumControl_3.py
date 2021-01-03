#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python
[command]
python3 seleniumControl_3.py



"""

from selenium import webdriver
browser = webdriver.Firefox()
type(browser)
# <class 'selenium.webdriver.firefox.webdriver.WebDriver'>
browser.get('http://flaven.fr')

