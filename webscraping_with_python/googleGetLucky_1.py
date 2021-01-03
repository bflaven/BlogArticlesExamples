#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python
python googleGetLucky_1.py Beautiful Soup


"""
import requests
import sys
import webbrowser
import bs4
print('Googling...')  # display text while downloading the Google page
res = requests.get('http://google.com/search?q=' + ' '.join(sys.argv[1:]))
res.raise_for_status()
# TODO: Retrieve top search result links.
# TODO: Open a browser tab for each result.



