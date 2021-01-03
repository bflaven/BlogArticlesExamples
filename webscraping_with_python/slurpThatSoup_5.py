#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_5.py



"""


import bs4
exampleFile = open('example_2.html')
exampleSoup = bs4.BeautifulSoup(exampleFile.read(), features="lxml")

# print(elems)

pElems = exampleSoup.select('p')

value1 = str(pElems[0])
print(value1)

value2 = pElems[0].getText()
print(value2)

value3 = str(pElems[1])
print(value3)

value4 = pElems[1].getText()
print(value4)

value5 = str(pElems[2])
print(value5)

value6 = pElems[2].getText()
print(value6)
