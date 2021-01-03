#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_4.py



"""

import bs4
exampleFile = open('example_2.html')
exampleSoup = bs4.BeautifulSoup(exampleFile.read(), features="lxml")
elems = exampleSoup.select('#author')

# print(elems)

for count,enum_elems in enumerate(elems):
   print(count,enum_elems)
