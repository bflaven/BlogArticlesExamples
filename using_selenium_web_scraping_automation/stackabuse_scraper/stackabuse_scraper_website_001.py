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
python3 stackabuse_scraper_website_001.py 
# with anaconda env
python stackabuse_scraper_website_001.py




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
pip3 install time
pip3 install csv
pip3 install re

# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]
https://sodocumentation.net/beautifulsoup/topic/1940/locating-elements
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/
https://stackabuse.com/guide-to-parsing-html-with-beautifulsoup-in-python/

"""

import requests
import time
import csv
import re
from bs4 import BeautifulSoup


def scrape(source_url, soup):  # Takes the driver and the subdomain for concats as params
    # Find the elements of the article tag
    books = soup.find_all("article", class_="product_pod")

    # Iterate over each book article tag
    for each_book in books:
        info_url = source_url+"/"+each_book.h3.find("a")["href"]
        cover_url = source_url+"/catalogue" + \
            each_book.a.img["src"].replace("..", "")

        title = each_book.h3.find("a")["title"]
        rating = each_book.find("p", class_="star-rating")["class"][1]
        # can also be written as : each_book.h3.find("a").get("title")
        price = each_book.find("p", class_="price_color").text.strip().encode(
            "ascii", "ignore").decode("ascii")
        availability = each_book.find(
            "p", class_="instock availability").text.strip()

        # Invoke the write_to_csv function
        write_to_csv([info_url, cover_url, title, rating, price, availability])


def write_to_csv(list_input):
    # The scraped info will be written to a CSV here.
    try:
        with open("allBooks.csv", "a") as fopen:  # Open the csv file.
            csv_writer = csv.writer(fopen)
            csv_writer.writerow(list_input)
    except:
        return False


def browse_and_scrape(seed_url, page_number=1):
    # Fetch the URL - We will be using this to append to images and info routes
    url_pat = re.compile(r"(http://.*\.com)")
    source_url = url_pat.search(seed_url).group(0)

   # Page_number from the argument gets formatted in the URL & Fetched
    formatted_url = seed_url.format(str(page_number))

    try:
        html_text = requests.get(formatted_url).text
        # Prepare the soup
        soup = BeautifulSoup(html_text, "html.parser")
        print(f"Now Scraping - {formatted_url}")

        # This if clause stops the script when it hits an empty page
        if soup.find("li", class_="next") != None:
            scrape(source_url, soup)     # Invoke the scrape function
            # Be a responsible citizen by waiting before you hit again
            time.sleep(3)
            page_number += 1
            # Recursively invoke the same function with the increment
            browse_and_scrape(seed_url, page_number)
        else:
            scrape(source_url, soup)     # The script exits here
            return True
        return True
    except Exception as e:
        return e


if __name__ == "__main__":
    seed_url = "http://books.toscrape.com/catalogue/page-{}.html"
    print("Web scraping has begun")
    result = browse_and_scrape(seed_url)
    if result == True:
        print("Web scraping is now complete!")
    else:
        print(f"Oops, That doesn't seem right!!! - {result}")


