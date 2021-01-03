#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_1.py
"""



import requests, bs4
res = requests.get('http://flaven.fr')
res.raise_for_status()
noStarchSoup = bs4.BeautifulSoup(res.text, features="lxml")
type(noStarchSoup)
# print (type(noStarchSoup))
# <class 'bs4.BeautifulSoup'>

