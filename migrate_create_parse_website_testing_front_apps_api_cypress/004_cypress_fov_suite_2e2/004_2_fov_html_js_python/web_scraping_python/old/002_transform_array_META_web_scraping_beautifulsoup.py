#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
# NO CONDA ENV
conda create --name po_launcher_e2e_cypress python=3.9.13
conda info --envs
source activate po_launcher_e2e_cypress
source activate parse_website

conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > po_launcher_e2e_cypress.txt


# to install
pip install -r po_launcher_e2e_cypress.txt


# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/web_scraping_python/

[file]
python 002_transform_array_META_web_scraping_beautifulsoup.py


"""

input_1 = [['slug', 'fr'], ['meta_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['meta_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['meta_tag', 'og:locale', 'fr_FR'], ['meta_tag', 'og:site_name', 'France 24'], ['meta_tag', 'og:type', 'website'], ['meta_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"], ['meta_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'og:url', 'https://www.france24.com/fr/'], ['meta_tag', 'fb:app_id', '121241974571942'], ['meta_tag', 'fb:pages', '153632746935'], ['meta_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'twitter:card', 'summary'], ['meta_tag', 'twitter:site', '@FRANCE24'], ['meta_tag', 'twitter:creator', '@FRANCE24'], ['meta_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'], ['meta_tag', 'apple-mobile-web-app-title', 'France 24'], ['meta_tag', 'application-name', 'France 24'], ['meta_tag', 'msapplication-TileColor', '#00a7e3'], ['meta_tag', 'theme-color', '#ffffff'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]]

output = []
output.append(['slug', '/'])

for tag in input_1:
    if tag[0] == 'title_tag':
        output.append(['title_tag', tag[1], tag[2]])
    elif tag[0].startswith('meta_tag'):
        output.append(['property_tag', tag[1], tag[2]])
    elif tag[0].startswith('name_tag'):
        output.append(['name_tag', tag[1], tag[2]])

print(output)



""" chat GPT query

# query

In python, can you write a script that transform the model structure of the python list described in input_1 to  the model structure of the python list described in output_good_1
    
# input_1
[['slug', 'fr'], ['meta_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['meta_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['meta_tag', 'og:locale', 'fr_FR'], ['meta_tag', 'og:site_name', 'France 24'], ['meta_tag', 'og:type', 'website'], ['meta_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"], ['meta_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'og:url', 'https://www.france24.com/fr/'], ['meta_tag', 'fb:app_id', '121241974571942'], ['meta_tag', 'fb:pages', '153632746935'], ['meta_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'twitter:card', 'summary'], ['meta_tag', 'twitter:site', '@FRANCE24'], ['meta_tag', 'twitter:creator', '@FRANCE24'], ['meta_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'], ['meta_tag', 'apple-mobile-web-app-title', 'France 24'], ['meta_tag', 'application-name', 'France 24'], ['meta_tag', 'msapplication-TileColor', '#00a7e3'], ['meta_tag', 'theme-color', '#ffffff'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]]

# output_good_1
[
            ['slug', '/'],
            // title
            ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"] 
            // property
            ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], 
            ['property_tag', 'og:locale', 'fr_FR'], 
            ['property_tag', 'og:site_name', 'France 24'], 
            ['property_tag', 'og:type', 'website'], 
            ['property_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"], 
            ['property_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], 
            ['property_tag', 'og:url', 'https://www.france24.com/fr/'], 
            ['property_tag', 'fb:app_id', '121241974571942'], 
            ['property_tag', 'fb:pages', '153632746935'],

            // name 
            ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
            ['name_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], 
            ['name_tag', 'twitter:card', 'summary'], 
            ['name_tag', 'twitter:site', '@FRANCE24'], 
            ['name_tag', 'twitter:creator', '@FRANCE24'], 
            ['name_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'], 
            ['name_tag', 'apple-mobile-web-app-title', 'France 24'], 
            ['name_tag', 'application-name', 'France 24'], 
            ['name_tag', 'msapplication-TileColor', '#00a7e3'], 
            ['name_tag', 'theme-color', '#ffffff'], 
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'], 
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'] 
],


# OUTPUT FROM ChatGPT

Yes, I can help you with that. Here's a Python script that will transform the model structure of the input list to the output list as described:

input_1 = [['slug', 'fr'], ['meta_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['meta_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['meta_tag', 'og:locale', 'fr_FR'], ['meta_tag', 'og:site_name', 'France 24'], ['meta_tag', 'og:type', 'website'], ['meta_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"], ['meta_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'og:url', 'https://www.france24.com/fr/'], ['meta_tag', 'fb:app_id', '121241974571942'], ['meta_tag', 'fb:pages', '153632746935'], ['meta_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['meta_tag', 'twitter:card', 'summary'], ['meta_tag', 'twitter:site', '@FRANCE24'], ['meta_tag', 'twitter:creator', '@FRANCE24'], ['meta_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'], ['meta_tag', 'apple-mobile-web-app-title', 'France 24'], ['meta_tag', 'application-name', 'France 24'], ['meta_tag', 'msapplication-TileColor', '#00a7e3'], ['meta_tag', 'theme-color', '#ffffff'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['meta_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]]

output = []
output.append(['slug', '/'])

for tag in input_1:
    if tag[0] == 'title_tag':
        output.append(['title_tag', tag[1], tag[2]])
    elif tag[0].startswith('meta_tag'):
        output.append(['property_tag', tag[1], tag[2]])
    elif tag[0].startswith('name_tag'):
        output.append(['name_tag', tag[1], tag[2]])

print(output)

This script will output the following list, which has the desired structure:

[    ['slug', '/'],
    ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"],
    ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'France 24'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"],
    ... etc


"""


# DEPOT
# urls = [
#     'http://fashiontoast.com/',
#     'http://becauseimaddicted.net/',
#     'http://www.lefashion.com/',
#     'http://www.seaofshoes.com/',
# ]

# urls = [
#     'https://www.rfi.fr/fr/'
# ]


