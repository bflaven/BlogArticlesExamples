#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name po_launcher_e2e_cypress python=3.9.13
conda info --envs
source activate po_launcher_e2e_cypress
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > po_launcher_e2e_cypress.txt


# to install
pip install -r po_launcher_e2e_cypress.txt



[path]
cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js

[file]
python example_js_parse_006_model.py

# other module
# go to the env
pip install requests
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog
pip install beautifulsoup4 

"""

# QUERY_1_OPENAI
# Here's a Python script that converts the given HTML code into a list of double arrays where the first value is the field name of the meta and the second value is the value that is in content:



from bs4 import BeautifulSoup

html_code = '''
<meta property="og:image" content="https://static.rfi.fr/meta_og_twcards/RFI_TW.png">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="RFI">
<meta property="og:type" content="website">
<meta property="og:title" content="RFI - Actualités, info, news en direct - Radio France Internationale">
<meta property="og:description" content="Suivez toute l&#039;information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l&#039;international.">
<meta property="og:url" content="https://www.rfi.fr/fr/">
<meta property="fb:app_id" content="113191652055439">
<meta property="fb:pages" content="67334499441">
<meta name="description" content="Suivez toute l&#039;information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l&#039;international.">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@RFI">
<meta name="twitter:creator" content="@RFI">
<meta name="keywords" content="homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info">
<meta name="apple-mobile-web-app-title" content="RFI">
<meta name="application-name" content="RFI">
<meta name="msapplication-TileColor" content="#e2001a">
<meta name="theme-color" content="#ffffff">
<meta name="apple-mobile-web-app-capable" content="yes">
'''

soup = BeautifulSoup(html_code, 'html.parser')
meta_tags = soup.find_all('meta')

result = []

for tag in meta_tags:
    if tag.has_attr('content'):
        result.append([tag['name'] if tag.has_attr('name') else tag['property'], tag['content']])

print(result)

# meta_stuff = [['og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], ['og:locale', 'fr_FR'], ['og:site_name', 'RFI'], ['og:type', 'website'], ['og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], ['og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['og:url', 'https://www.rfi.fr/fr/'], ['fb:app_id', '113191652055439'], ['fb:pages', '67334499441'], ['description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['twitter:card', 'summary'], ['twitter:site', '@RFI'], ['twitter:creator', '@RFI'], ['keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], ['apple-mobile-web-app-title', 'RFI'], ['application-name', 'RFI'], ['msapplication-TileColor', '#e2001a'], ['theme-color', '#ffffff'], ['apple-mobile-web-app-capable', 'yes']]
# 
# 
# QUERY_2_OPENAI
# Can you write a python that loop through this double array named meta_stuff, show ho to print the first value and the second value meta_stuff= [['og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], ['og:locale', 'fr_FR'], ['og:site_name', 'RFI'], ['og:type', 'website'], ['og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], ['og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['og:url', 'https://www.rfi.fr/fr/'], ['fb:app_id', '113191652055439'], ['fb:pages', '67334499441'], ['description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['twitter:card', 'summary'], ['twitter:site', '@RFI'], ['twitter:creator', '@RFI'], ['keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], ['apple-mobile-web-app-title', 'RFI'], ['application-name', 'RFI'], ['msapplication-TileColor', '#e2001a'], ['theme-color', '#ffffff'], ['apple-mobile-web-app-capable', 'yes']]


meta_stuff = [['og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], ['og:locale', 'fr_FR'], ['og:site_name', 'RFI'], ['og:type', 'website'], ['og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], ['og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['og:url', 'https://www.rfi.fr/fr/'], ['fb:app_id', '113191652055439'], ['fb:pages', '67334499441'], ['description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['twitter:card', 'summary'], ['twitter:site', '@RFI'], ['twitter:creator', '@RFI'], ['keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], ['apple-mobile-web-app-title', 'RFI'], ['application-name', 'RFI'], ['msapplication-TileColor', '#e2001a'], ['theme-color', '#ffffff'], ['apple-mobile-web-app-capable', 'yes']]

for item in meta_stuff:
    print(item[0], item[1])

"""

og:image https://static.rfi.fr/meta_og_twcards/RFI_TW.png
og:locale fr_FR
og:site_name RFI
og:type website
og:title RFI - Actualités, info, news en direct - Radio France Internationale
og:description Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international.
og:url https://www.rfi.fr/fr/
fb:app_id 113191652055439
fb:pages 67334499441
description Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international.
twitter:card summary
twitter:site @RFI
twitter:creator @RFI
keywords homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info
apple-mobile-web-app-title RFI
application-name RFI
msapplication-TileColor #e2001a
theme-color #ffffff
apple-mobile-web-app-capable yes


Can you convert the pyhton variable meta_stuff into a javascript variable meta_stuff = [['og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], ['og:locale', 'fr_FR'], ['og:site_name', 'RFI'], ['og:type', 'website'], ['og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], ['og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['og:url', 'https://www.rfi.fr/fr/'], ['fb:app_id', '113191652055439'], ['fb:pages', '67334499441'], ['description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['twitter:card', 'summary'], ['twitter:site', '@RFI'], ['twitter:creator', '@RFI'], ['keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], ['apple-mobile-web-app-title', 'RFI'], ['application-name', 'RFI'], ['msapplication-TileColor', '#e2001a'], ['theme-color', '#ffffff'], ['apple-mobile-web-app-capable', 'yes']]

Yes, here's the JavaScript code to create the meta_stuff variable with the same content as the Python variable:



var meta_stuff = [['og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], ['og:locale', 'fr_FR'], ['og:site_name', 'RFI'], ['og:type', 'website'], ['og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], ['og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['og:url', 'https://www.rfi.fr/fr/'], ['fb:app_id', '113191652055439'], ['fb:pages', '67334499441'], ['description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], ['twitter:card', 'summary'], ['twitter:site', '@RFI'], ['twitter:creator', '@RFI'], ['keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], ['apple-mobile-web-app-title', 'RFI'], ['application-name', 'RFI'], ['msapplication-TileColor', '#e2001a'], ['theme-color', '#ffffff'], ['apple-mobile-web-app-capable', 'yes']];


Note that in JavaScript, you use var to declare a variable. Also, make sure that the meta_stuff variable is enclosed in square brackets and that each element is also enclosed in square brackets with commas separating them.




"""

# - F24
# F24_FR (https://www.france24.com/fr/)
# F24_AR (https://www.france24.com/ar/)
# F24_ES (https://www.france24.com/es/)
# F24_AR (https://www.france24.com/ar/)

# urls = [
#     'https://www.france24.com/fr/',
#     'https://www.france24.com/en/',
#     'https://www.france24.com/es/',
#     'https://www.france24.com/ar/',
# ]
