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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/web_scraping_python

[file]
python 004_web_scraping_beautifulsoup.py

# open ai
In python, create a loop a to print out each values from the variable languages
"""


# languages = [
#     ['/fr/', 'fr', 'Français'],
#     ['/en/', 'en', 'English'],
#     ['/es/', 'es', 'Español'],
#     ['/pt/', 'pt', 'Português'],
#     ['/br/', 'br', 'Português do Brasil'],
#     ['/ha/', 'ha', 'Hausa'],
#     ['/sw/', 'sw', 'Kiswahili'],
#     ['/ma/', 'bm', 'Mandenkan'],
#     ['/ff/', 'ff', 'Fulfulde'],
#     # ['https://www.rfi.ro/', 'ro', 'România'],
#     ['/ru/', 'ru', 'Русский'],
#     ['/uk/', 'uk', 'Українською'],
#     ['/vi/', 'vi', 'Tiếng Việt'],
#     ['/cn/', 'cn', '华语'],
#     ['/tw/', 'tw', '華語'],
#     ['/km/', 'km', 'ភាសាខ្មែរ'],
#     ['/fa/', 'fa', 'فارسی']
# ]
# MAIN_BRAND = 'RFI_'
# MAIN_DOMAIN = 'https://www.rfi.fr'

# for lang in languages:
    
#     # print(lang)
#     print(MAIN_BRAND+lang[1].upper())

    # print(MAIN_BRAND+lang[1].upper()+' ('+MAIN_DOMAIN+lang[0]+')')
    # print('\''+MAIN_BRAND+lang[1].upper()+'\',')

    # print('\''+MAIN_DOMAIN+lang[0]+'\',')
    
    # print(lang[0])
    # print(lang[1])
    # print(lang[2])
