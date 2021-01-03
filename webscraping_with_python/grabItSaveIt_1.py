#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python grabItSaveIt_1.py
"""


import requests
# Three short works
# The Dance of Death, The Legend of Saint Julian the Hospitaller, A Simple Soul.
# Author: Gustave Flaubert
res = requests.get('https://www.gutenberg.org/cache/epub/10458/pg10458.txt')
res.raise_for_status()
playFile = open('Three_short_works_Gustave_Flaubert.txt', 'wb')
for chunk in res.iter_content(100000):
    playFile.write(chunk)
playFile.close()

