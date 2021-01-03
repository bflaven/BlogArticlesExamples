#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_2.py



"""

import bs4
exampleFile = open('example_1.html')
exampleSoup = bs4.BeautifulSoup(exampleFile, features="lxml")
type(exampleSoup)
# print (type(exampleSoup))
# <class 'bs4.BeautifulSoup'>


