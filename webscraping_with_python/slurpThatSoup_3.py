#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_3.py



"""

import bs4
exampleFile = open('example_1.html')
exampleSoup = bs4.BeautifulSoup(exampleFile.read(), features="lxml")
elems = exampleSoup.select('#author')

# print(elems)


value1 = type(elems)
print(value1)
# <class 'list' >

value2 = len(elems)
print(value2)
# 1

value3 = type(elems[0])
print(value3)
#<class 'bs4.element.Tag' >

value4 = elems[0].getText()
print(value4)
#'Bruno Flaven'

value5 = str(elems[0])
print(value5)
#'<span id="author">Bruno Flaven</span>'

value6 = elems[0].attrs
print(value6)
#{'id': 'author'}


