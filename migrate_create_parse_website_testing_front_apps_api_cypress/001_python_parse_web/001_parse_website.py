#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
001_parse_website.py
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


# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/migrate_create_parse_website_testing_front_cypress/python_parse_web/


[file]
python 001_parse_website.py

# other module
pip install beautyfulspoup
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

[source]

ASK CHATGPT
file : 001_parse_website.py
source Python for GPT query  
QUERY :: In Python, can you elaborate a html parser with the library Beautiful Soup. This html parser functioning will be the following: first, at the beginning the script, define in an external variable named "css_selector_input", the value of the CSS selector. As an example, the value can be equaled to "body > div.o-header > header". Second, based on the "css_selector_input" retrieve the content inside the CSS selector and output the founded elements inside a Python list.




# More to use correct syntax on learn python 
(French) https://python.doctor/page-apprendre-listes-list-tableaux-tableaux-liste-array-python-cours-debutant

(Spanish, great resource) https://www.youtube.com/@mouredev



"""

# Certainly! Here's an example script that uses Beautiful Soup to retrieve the content inside a CSS selector and output the found elements inside a Python list:


from bs4 import BeautifulSoup
import requests

# Define the CSS selector to use
css_selector_input = "body"

# Make a request to the website and retrieve its content
response = requests.get("https://flaven.fr")
html_content = response.content

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