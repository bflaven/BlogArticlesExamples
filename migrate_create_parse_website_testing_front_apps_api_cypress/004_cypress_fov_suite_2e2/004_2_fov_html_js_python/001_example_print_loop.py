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
cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/

[file]
python 001_example_print_loop.py


"""
import time
from bs4 import BeautifulSoup
import requests
import sys
from datetime import datetime



all_values_elements = [
'datas_var_F24_AR',
'datas_var_F24_EN',
'datas_var_F24_ES',
'datas_var_F24_FR',
'datas_var_FLE_AR',
'datas_var_FLE_BR',
'datas_var_FLE_CN',
'datas_var_FLE_EN',
'datas_var_FLE_ES',
'datas_var_FLE_FR',
'datas_var_FLE_RU',
'datas_var_MCD_AR',
'datas_var_OBS_AR',
'datas_var_OBS_EN',
'datas_var_OBS_FA',
'datas_var_OBS_FR',
'datas_var_RFI_BR',
'datas_var_RFI_CN',
'datas_var_RFI_EN',
'datas_var_RFI_ES',
'datas_var_RFI_FA',
'datas_var_RFI_FF',
'datas_var_RFI_FR',
'datas_var_RFI_HA',
'datas_var_RFI_KM',
'datas_var_RFI_MA',
'datas_var_RFI_PT',
'datas_var_RFI_RO',
'datas_var_RFI_RU',
'datas_var_RFI_SW',
'datas_var_RFI_TW',
'datas_var_RFI_UK',
'datas_var_RFI_VI',
]


print("\n--- result")


for index, name in enumerate(all_values_elements):
    
    # print('\''+str(name)+'\',')
    # 
    print('// Make it work')
    # print(f'\{globalDataTest\}')
    # print(f'{{ {globalDataTest} }}')
    
    # print('const { globalDataTest } = require(\'cypress/fixtures/all_values_elements/'+name+'\');')
    print('FILE_NAME_GLOBAL_DATA_TEST:\''+str(name)+'\',')

    print()

    
    
    
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
