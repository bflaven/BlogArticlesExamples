#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python googleGetLucky_2.py Beautiful Soup
python googleGetLucky_2.py Bruno Flaven

"""

# https://www.google.com/search?source=hp&ei=wDTwX6qeOPSCjLsPh_OdiAM&q=Beautiful+Soup&oq=Beautiful+Soup&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQxhRYxhRgrhpoAXAAeACAAUSIAUSSAQExmAEAoAECoAEBqgEHZ3dzLXdperABAA&sclient=psy-ab&ved=0ahUKEwiq_tKH8PztAhV0AWMBHYd5BzEQ4dUDCAc&uact=5


import requests
import sys
import webbrowser
import bs4
print('Googling...')  # display text while downloading the Google page
res = requests.get('http://google.com/search?q=' + ' '.join(sys.argv[1:]))
res.raise_for_status()
print(res.raise_for_status())
# Retrieve top search result links.
soup = bs4.BeautifulSoup(res.text, features="lxml")
# print(soup)

# Open a browser tab for each result.
linkElems = soup.select('div a')
# print(linkElems)
# numOpen = min(5, len(linkElems))
# numOpen = min(10, len(linkElems))
numOpen = min(30, len(linkElems))
for i in range(numOpen):
    webbrowser.open('http://google.com' + linkElems[i].get('href'))


