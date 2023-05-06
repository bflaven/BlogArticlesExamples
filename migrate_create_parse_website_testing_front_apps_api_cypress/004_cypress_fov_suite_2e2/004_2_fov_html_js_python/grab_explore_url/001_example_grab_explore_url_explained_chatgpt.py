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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/grab_explore_url

[file]
python 001_example_grab_explore_url_explained_chatgpt.py


"""
import time
from bs4 import BeautifulSoup
import requests
import sys
from datetime import datetime


# urls_explore = [
#     'https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/',
#     'https://francaisfacile.rfi.fr/fr/podcasts/s%C3%A9lection/',
#     'https://francaisfacile.rfi.fr/fr/exercices/',
#     'https://francaisfacile.rfi.fr/fr/dipl%C3%B4mes-tests/',
#     'https://francaisfacile.rfi.fr/fr/tester-son-niveau/',
#     'https://francaisfacile.rfi.fr/fr/comprendre-actualit%C3%A9-fran%C3%A7ais/',
#     'https://francaisfacile.rfi.fr/fr/communiquer-quotidien/',
#     'https://francaisfacile.rfi.fr/fr/r%C3%A9viser/',
#     'https://francaisfacile.rfi.fr/fr/enseigner/',
#     'https://francaisfacile.rfi.fr/fr/exercices/a1/',
#     'https://francaisfacile.rfi.fr/fr/exercices/a2/',
#     'https://francaisfacile.rfi.fr/fr/exercices/b1/',
#     'https://francaisfacile.rfi.fr/fr/exercices/b2/',
#     'https://francaisfacile.rfi.fr/fr/exercices/c1c2/',
#     'https://francaisfacile.rfi.fr/fr/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]

# urls_explore_page = ['podcasts/journal-en-français-facile/', 'podcasts/sélection/', 'exercices/', 'diplômes-tests/', 'tester-son-niveau/', 'comprendre-actualité-français/', 'communiquer-quotidien/', 'réviser/', 'enseigner/', 'exercices/a1/', 'exercices/a2/', 'exercices/b1/', 'exercices/b2/', 'exercices/c1c2/', 'podcasts/les-mots-de-l-actualité/']

page_names = [
'page_podcasts_journal_français_facile',
'page_podcasts_selection',
'page_exercices',
'page_diplomes_tests',
'page_tester_son_niveau',
'page_comprendre_actualite_français',
'page_communiquer_quotidien',
'page_reviser',
'page_enseigner',
'page_exercices_a1',
'page_exercices_a2',
'page_exercices_b1',
'page_exercices_b2',
'page_exercices_c1c2',
'page_podcasts_mots_actualite',
]
slugs_names = [
'podcasts/journal-en-fran%C3%A7ais-facile/',
'podcasts/s%C3%A9lection/',
'exercices/',
'dipl%C3%B4mes-tests/',
'tester-son-niveau/',
'comprendre-actualit%C3%A9-fran%C3%A7ais/',
'communiquer-quotidien/',
'r%C3%A9viser/',
'enseigner/',
'exercices/a1/',
'exercices/a2/',
'exercices/b1/',
'exercices/b2/',
'exercices/c1c2/',
'podcasts/les-mots-de-l-actualit%C3%A9/'
]

print("\n--- result")


for index, name in enumerate(page_names):
    print('\''+str(name)+'\',\''+str(slugs_names[index])+'\',')
    
    
    
# slugs = [url.split('/fr/')[1] for url in urls_explore if '/fr/' in url]
# print(slugs)

"""
# Remove trailing slashes and replace spaces with underscores
cleaned_urls = [url.strip().replace(' ', '_').replace(' ', '-').replace('é', 'e').rstrip('/')
                for url in urls_explore_page]

# Add "page_" prefix to each string and join them with commas
string_output = ','.join(['page_' + url for url in cleaned_urls])

print(string_output)
"""





"""
// FLE_FR
var NavActualitesSlugNewsByRegion = [
    'podcasts/journal-en-fran%C3%A7ais-facile/', 
    'podcasts/s%C3%A9lection/', 
    'exercices/', 
    'dipl%C3%B4mes-tests/', 
    'tester-son-niveau/', 
    'comprendre-actualit%C3%A9-fran%C3%A7ais/', 
    'communiquer-quotidien/', 
    'r%C3%A9viser/', 
    'enseigner/', 
    'exercices/a1/', 
    'exercices/a2/', 
    'exercices/b1/', 
    'exercices/b2/', 
    'exercices/c1c2/', 
    'podcasts/les-mots-de-l-actualit%C3%A9/'
];

['podcasts/journal-en-français-facile/', 'podcasts/sélection/', 'exercices/', 'diplômes-tests/', 'tester-son-niveau/', 'comprendre-actualité-français/', 'communiquer-quotidien/', 'réviser/', 'enseigner/', 'exercices/a1/', 'exercices/a2/', 'exercices/b1/', 'exercices/b2/', 'exercices/c1c2/', 'podcasts/les-mots-de-l-actualité/']

['page_podcasts_journal-en-français-facile/', 
'podcasts/sélection/', 
'exercices/', 
'diplômes-tests/', 
'tester-son-niveau/', 
'comprendre-actualité-français/', 
'communiquer-quotidien/', 
'réviser/', 
'enseigner/', 
'exercices/a1/', 
'exercices/a2/', 
'exercices/b1/', 
'exercices/b2/', 
'exercices/c1c2/', 
'podcasts/les-mots-de-l-actualité/'
]
    
    

"""
