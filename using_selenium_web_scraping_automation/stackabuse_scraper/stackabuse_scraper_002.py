#!/usr/bin/python
# -*- coding: utf-8 -*-


"""


[env]
# Conda Environment
# NO CONDA ENV

conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/stackabuse_scraper/


[file]
# local 
python3 stackabuse_scraper_002.py 
# with anaconda env
python stackabuse_scraper_002.py

# do not use python 2
python --version

#  use python 3
python3 --version

[required]
# install

#  do not use pip 2
pip --version

#  do not use pip 3
pip3 --version

# BeautifulSoup
pip3 install bs4

# other module
pip3 install requests
pip3 install pandas
pip3 install selenium
pip3 install matplotlib
pip3 install seaborn

# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]
https://sodocumentation.net/beautifulsoup/topic/1940/locating-elements
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/

"""

from bs4 import BeautifulSoup

file_to_scrap = "stackabuse_doc.html"

with open(file_to_scrap) as fp:
    soup = BeautifulSoup(fp, "html.parser")

    # output
    # print(soup)


    #ouput
    # print(soup.head.title)
    # print(soup.body.a.text)
    # print(soup.body.p.b)  


    # ouput
    # print(soup.find_all("a"))

    # output
    # print(soup.find_all("a", class_="element"))


    # output
    print(soup.find("a", href=True)["href"])




