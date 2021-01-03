#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python grabIt_1.py
"""


import requests
# Three short works
# The Dance of Death, The Legend of Saint Julian the Hospitaller, A Simple Soul.
# Author: Gustave Flaubert
res = requests.get('https://www.gutenberg.org/cache/epub/10458/pg10458.txt')
type(res)
# <class 'requests.models.Response'>
res.status_code == requests.codes.ok
# True
len(res.text)
# 178981
print(res.text[:500])
#
