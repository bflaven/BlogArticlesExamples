# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name sitemap_generator python=3.9.13
conda info --envs
source activate sitemap_generator
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_sitemap_generator.txt


# to install
pip install -r requirements_sitemap_generator.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/sitemap_generator/

[file]
python 001_convert_sitemap_to_d3_tree.py



# other module
# go to the env

# for sitemap
pip install requests
pip install beautifulsoup4
pip install lxml


# for app for sitemap
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog


# for app for sitemap
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog



xml
json



# QUERY_1_OPENAI
# In python, can you write a script that parse an existing file named sitemap.xml so you grab each node <url> then output each node into an array name "children": [] in a file named sitemap.js.
Below an example of the node extracted from the sitemap.xml and the transformed result of this node output in sitemap.js
- node <url> example
<url><loc>https://flaven.fr/2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json/</loc><lastmod>2023-05-13T06:19:24+00:00</lastmod><priority>0.60</priority></url> in 



- node "children": [] example
{
          "name": "2021/10/stop-starting-start-stopping-wandering-from-google-tag-manager-to-google-analytics-api-through-pandas-and-json"
},




"""

import xml.etree.ElementTree as ET
import json

# Parse the XML file
# tree = ET.parse('sitemap.xml')
tree = ET.parse('output/sitemap_generator_python_4.xml')

root = tree.getroot()

# Initialize the list of children
children = []

# Iterate over each <url> node
for url_node in root.iter('url'):
    
    print(url_node)
    
    # Extract the URL from <loc> tag
    url = url_node.find('loc').text

    # Remove the base URL and leading/trailing slashes
    url = url.replace('https://flaven.fr/', '').strip('/')

    # Append the URL as a JSON object to the children list
    children.append({"name": url})

# Write the children list to sitemap.js
with open('sitemap_1.js', 'w') as outfile:
    json.dump(children, outfile, indent=4)
