#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
003_parse_website.py
source Python for GPT query  
QUERY :: Can you elaborate Beautiful Soup

CAUTION :: below the first part, the log parser

"""

"""
[env]
# Conda Environment
# NO CONDA ENV

conda create --name parse_website python=3.9.13
conda info --envs
source activate parse_website
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# to export requirements
pip freeze > parse_website.txt
conda update -n base -c defaults conda

# to export requirements
pip freeze > parse_website.txt

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/migrate_create_parse_website_testing_front_cypress/python_parse_web/



[file]
python 003_parse_website.py

# other module
pip install beautifulsoup4
pip install requests

pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

[source]


"""

# Certainly! Here's an example script that uses Beautiful Soup to retrieve the content inside a CSS selector and output the found elements inside a Python list:


from bs4 import BeautifulSoup
import requests

# Define the CSS selector to use
# css_selector_input = "body > div.o-header > header"

# css_selector_input = "body > div.o-header > header > div > div.o-header__site-nav-link.o-header__site-nav-link--start"

css_selector_input = "#main-content > div.o-hot-tags.o-hot-tags--border > div > ul"


from bs4 import BeautifulSoup
import requests

headers = requests.utils.default_headers()
headers.update({
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
})


# Define the CSS selector to use
# css_selector_input = "body > div.o-header > header"

css_selector_input = "body > div.o-header > header > div > div.o-header__site-nav-link.o-header__site-nav-link--start"

# css_selector_input = "#main-content > div.o-hot-tags.o-hot-tags--border > div > ul"




# Make a request to the website and retrieve its content
response = requests.get("https://www.rfi.fr/fr/", headers=headers)
html_content = response.content

# debug
# print(html_content)


# Create a Beautiful Soup object to parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Use the CSS selector to find the desired elements and store them in a list
found_elements = soup.select(css_selector_input)

# Output the found elements
print(found_elements)



"""
In this example, the script makes a request to the website at "https://www.example.com" and retrieves its HTML content. It then creates a Beautiful Soup object to parse the HTML content and uses the CSS selector stored in the css_selector_input variable to find the desired elements. The found elements are then stored in the found_elements list and outputted to the console.

Note that the select() method used in this example returns a list of all elements that match the CSS selector. If you only expect one element to match the selector, you can use the select_one() method instead, which returns just the first element that matches the selector.
"""