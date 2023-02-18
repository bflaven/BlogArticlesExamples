#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
006_1_generate_code_ia_log_parser_csv_streamlit_pie_specific_humanized.py
source Python for GPT query  
QUERY :: Generate the code to select specific columns in a panda dataframe (df) in order to show it in a pie chart inside a Streamlit application 

CAUTION :: the code generated by Chat GPT slightly modified by human

"""


"""
[env]
# Conda Environment
conda create --name unstructured_data_python_parsing python=3.9.7
conda info --envs
source activate unstructured_data_python_parsing
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_usages/example_python



[file]
streamlit run 007_generate_code_ia_log_parser_csv_streamlit_pie_specific_humanized.py

# other module
pip install requests
pip install pandas
pip install streamlit
pip install numpy
pip install datetime
pip install watchdog

[source]
https://github.com/bflaven/BlogArticlesExamples/tree/master/unstructured_data_python_parsing

"""

"""
Sure! Here's some Python code using BeautifulSoup to achieve what you've described. See code below.

This code first reads in the example HTML file using a with statement and the open() function. It then creates a BeautifulSoup object to parse the HTML and find the desired tags.

The code uses soup.find_all('h5') to find all H5 tags in the HTML and extract their text content using a list comprehension. The resulting list is stored in the smallBookTitles variable.

Next, the code creates an empty list called bookTitles and uses a for loop to find all H6 tags in the HTML. For each H6 tag, it finds the next <p> tag using the find_next() method, and extracts the text content using the text attribute. It then appends the text content to the bookTitles list.

Finally, the code prints out the smallBookTitles and bookTitles lists to verify that everything is working correctly.

"""

# Read in the example HTML file
from bs4 import BeautifulSoup
with open('example_3.html', 'r') as file:
    html = file.read()

# Create a BeautifulSoup object to parse the HTML
soup = BeautifulSoup(html, 'html.parser')

# Find all H5 tags and extract the text content
smallBookTitles = [h5.text for h5 in soup.find_all('h5')]

# Create a list of all the book titles on the page
bookTitles = []
for h6 in soup.find_all('h6'):
    # Find the next <p> tag after the <h6> tag and extract its text content
    p = h6.find_next('p')
    bookTitles.append(p.text)

print('Small book titles:', smallBookTitles)
print('All book titles:', bookTitles)

