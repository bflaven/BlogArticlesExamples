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
python GOOD_003_META_web_scraping_beautifulsoup.py


"""
import time
from bs4 import BeautifulSoup
import requests
import sys
from datetime import datetime



print("\n--- 1. Grabing the site")


with requests.Session() as se:
    se.headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        "Accept-Encoding": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en"
    }

# F24_EN
# urls = [
#     'https://www.france24.com/en/',
#     'https://www.france24.com/en/france/',
#     'https://www.france24.com/en/africa/',
#     'https://www.france24.com/en/middle-east/',
#     'https://www.france24.com/en/americas/',
#     'https://www.france24.com/en/europe/',
#     'https://www.france24.com/en/asia-pacific/',
# ]

# F24_ES
# urls = [
#     'https://www.france24.com/es/',
#     'https://www.france24.com/es/am%C3%A9rica-latina/',
#     'https://www.france24.com/es/eeuu-canad%C3%A1/',
#     'https://www.france24.com/es/europa/',
#     'https://www.france24.com/es/francia/',
#     'https://www.france24.com/es/asia-pac%C3%ADfico/',
#     'https://www.france24.com/es/medio-oriente/',
#     'https://www.france24.com/es/%C3%A1frica/',
# ]


# F24_AR
# urls = [
#     'https://www.france24.com/ar/',
#     'https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/',
#     'https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/',
#     'https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/',
#     'https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/',
#     'https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/',
#     'https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/',
#     'https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/',
# ]
""" 
['url', 'slug',''], // keep it empty


"""
# *** RFI ***

# RFI_EN
# urls = [
#     'https://www.rfi.fr/en/',
#     'https://www.rfi.fr/en/france/',
#     'https://www.rfi.fr/en/africa/',
#     'https://www.rfi.fr/en/international/',
#     'https://www.rfi.fr/en/science-technology/',
#     'https://www.rfi.fr/en/culture/',
#     'https://www.rfi.fr/en/sport/',
# ]

# *** START FORM HERE ***

# RFI_TW (DONE)
# urls = [
#     'https://www.rfi.fr/tw/',
#     'https://www.rfi.fr/tw/%E4%B8%AD%E5%9C%8B/',
#     'https://www.rfi.fr/tw/%E6%B3%95%E5%9C%8B/',
#     'https://www.rfi.fr/tw/%E6%B8%AF%E6%BE%B3%E5%8F%B0/',
#     'https://www.rfi.fr/tw/%E4%BA%9E%E6%B4%B2/',
#     'https://www.rfi.fr/tw/%E7%BE%8E%E6%B4%B2/',
# ]

# RFI_CN (DONE)
# urls = [
#     'https://www.rfi.fr/cn/',
#     'https://www.rfi.fr/cn/%E4%B8%AD%E5%9B%BD/',
#     'https://www.rfi.fr/cn/%E6%B3%95%E5%9B%BD/',
#     'https://www.rfi.fr/cn/%E6%B8%AF%E6%BE%B3%E5%8F%B0/',
#     'https://www.rfi.fr/cn/%E4%BA%9A%E6%B4%B2',
#     'https://www.rfi.fr/cn/%E7%BE%8E%E6%B4%B2',
# ]

# RFI_ES (DONE)
# urls = [
#     'https://www.rfi.fr/es/',
#     'https://www.rfi.fr/es/am%C3%A9ricas/',
#     'https://www.rfi.fr/es/francia/',
#     'https://www.rfi.fr/es/europa/',
#     'https://www.rfi.fr/es/medioambiente/',
#     'https://www.rfi.fr/es/salud/',
#     'https://www.rfi.fr/es/cultura/',
#     'https://www.rfi.fr/es/econom%C3%ADa/',
#     'https://www.rfi.fr/es/deportes/',
# ]

# RFI_FA
# urls = [
#     'https://www.rfi.fr/fa/',
#     'https://www.rfi.fr/fa/%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/',
#     'https://www.rfi.fr/fa/%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/',
#     'https://www.rfi.fr/fa/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/',
#     'https://www.rfi.fr/fa/%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/',
#     'https://www.rfi.fr/fa/%D8%AC%D9%87%D8%A7%D9%86/',
# ]

# RFI_HA
urls = [
    'https://www.rfi.fr/ha/',
    'https://www.rfi.fr/ha/duniya/',
    'https://www.rfi.fr/ha/afrika/',
    'https://www.rfi.fr/ha/najeriya/',
    'https://www.rfi.fr/ha/nijar/',
    'https://www.rfi.fr/ha/wasanni/',
]

# RFI_KM
# urls = [
#         'https://www.rfi.fr/km/',
#         'https://www.rfi.fr/km/%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/',
#         'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/',
#         'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/',
#         'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/',
#         'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/',
#         'https://www.rfi.fr/km/%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/',
# ]

# RFI_SW
# urls = [
#     'https://www.rfi.fr/sw/',
#     'https://www.rfi.fr/sw/afrika/',
#     'https://www.rfi.fr/sw/eac/',
#     'https://www.rfi.fr/sw/siasa-uchumi/',
#     'https://www.rfi.fr/sw/makala/',
#     'https://www.rfi.fr/sw/michezo/',
# ]


# RFI_MA
# urls = [
#     'https://www.rfi.fr/ma/',
#     'https://www.rfi.fr/ma/farafinna/',
#     'https://www.rfi.fr/ma/duni%C9%B2a/',
#     'https://www.rfi.fr/ma/s%C9%94r%C9%94/',
#     'https://www.rfi.fr/ma/k%C9%9Bn%C9%9Bya/',
#     'https://www.rfi.fr/ma/lamini/',
#     'https://www.rfi.fr/ma/kalan/',
#     'https://www.rfi.fr/ma/musow/',
#     'https://www.rfi.fr/ma/sigida/',
# ]

# RFI_FF
# urls = [
#     'https://www.rfi.fr/ff/',
#     'https://www.rfi.fr/ff/afrik/',
#     'https://www.rfi.fr/ff/winndere/',
#     'https://www.rfi.fr/ff/faggudu/',
#     'https://www.rfi.fr/ff/cellal/',
#     'https://www.rfi.fr/ff/taariindi/',
#     'https://www.rfi.fr/ff/needi/',
#     'https://www.rfi.fr/ff/rew%C9%93e/',
#     'https://www.rfi.fr/ff/renndo/',
# ]


# RFI_PT
# urls = [
#     'https://www.rfi.fr/pt/',
#     'https://www.rfi.fr/pt/%C3%A1frica-lus%C3%B3fona/',
#     'https://www.rfi.fr/pt/fran%C3%A7a/',
#     'https://www.rfi.fr/pt/%C3%A1frica/',
#     'https://www.rfi.fr/pt/internacional/',
# ]

# RFI_BR
# urls = [
#     'https://www.rfi.fr/br/',
#     'https://www.rfi.fr/br/fran%C3%A7a/',
#     'https://www.rfi.fr/br/brasil/',
#     'https://www.rfi.fr/br/am%C3%A9ricas/',
#     'https://www.rfi.fr/br/mundo/',
#     'https://www.rfi.fr/br/cultura/',
#     'https://www.rfi.fr/br/ci%C3%AAncias/',
# ]


# RFI_RU
# urls = [
#     'https://www.rfi.fr/ru/',
#     'https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/',
#     'https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/',
#     'https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/',
#     'https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/',
#     'https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/',
#     'https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/',
# ]


# RFI_UK
# urls = [
#     'https://www.rfi.fr/uk/',
#     'https://www.rfi.fr/uk/y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/',
#     'https://www.rfi.fr/uk/%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/',
#     'https://www.rfi.fr/uk/%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/',
#     'https://www.rfi.fr/uk/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/',
# ]

# RFI_VI
# urls = [
#     'https://www.rfi.fr/vi/',
#     'https://www.rfi.fr/vi/vi%E1%BB%87t-nam/',
#     'https://www.rfi.fr/vi/ch%C3%A2u-%C3%A1/',
#     'https://www.rfi.fr/vi/ph%C3%A1p/',
#     'https://www.rfi.fr/vi/qu%E1%BB%91c-t%E1%BA%BF/',
#     'https://www.rfi.fr/vi/ph%C3%A2n-t%C3%ADch/',
#     'https://www.rfi.fr/vi/%C4%91i%E1%BB%83m-b%C3%A1o/',
# ]

# RFI_FR
# urls = [
#     'https://www.rfi.fr/fr/',
#     'https://www.rfi.fr/fr/afrique/',
#     'https://www.rfi.fr/fr/am%C3%A9riques/',
#     'https://www.rfi.fr/fr/asie-pacifique/',
#     'https://www.rfi.fr/fr/europe/',
#     'https://www.rfi.fr/fr/moyen-orient/',
#     'https://www.rfi.fr/fr/france/',
#     'https://www.rfi.fr/fr/monde/',
# ]


# MCD_AR
# urls = [
#     'https://www.mc-doualiya.com/',
#     'https://www.mc-doualiya.com//%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/',
#     'https://www.mc-doualiya.com//%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/',
#     'https://www.mc-doualiya.com//%D9%81%D8%B1%D9%86%D8%B3%D8%A7/',
#     'https://www.mc-doualiya.com//%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/',
#     'https://www.mc-doualiya.com//%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/',
#     'https://www.mc-doualiya.com//%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/',
#     'https://www.mc-doualiya.com//%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/',
# ]

# *** FLE ***

# FLE_FR
# urls = [
#     'https://francaisfacile.rfi.fr/fr/',
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


# FLE_ES
# urls = [
#     'https://francaisfacile.rfi.fr/es/',
#     'https://francaisfacile.rfi.fr/es/podcasts/journal-en-fran%C3%A7ais-facile/',
#     'https://francaisfacile.rfi.fr/es/podcasts/s%C3%A9lection/',
#     'https://francaisfacile.rfi.fr/es/exercices/',
#     'https://francaisfacile.rfi.fr/es/dipl%C3%B4mes-tests/',
#     'https://francaisfacile.rfi.fr/es/tester-son-niveau/',
#     'https://francaisfacile.rfi.fr/es/comprendre-actualit%C3%A9-fran%C3%A7ais/',
#     'https://francaisfacile.rfi.fr/es/communiquer-quotidien/',
#     'https://francaisfacile.rfi.fr/es/r%C3%A9viser/',
#     'https://francaisfacile.rfi.fr/es/enseigner/',
#     'https://francaisfacile.rfi.fr/es/exercices/a1/',
#     'https://francaisfacile.rfi.fr/es/exercices/a2/',
#     'https://francaisfacile.rfi.fr/es/exercices/b1/',
#     'https://francaisfacile.rfi.fr/es/exercices/b2/',
#     'https://francaisfacile.rfi.fr/es/exercices/c1c2/',
#     'https://francaisfacile.rfi.fr/es/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]


#FLE_RU
# urls = [
# 'https://francaisfacile.rfi.fr/ru/',
# 'https://francaisfacile.rfi.fr/ru/podcasts/journal-en-fran%C3%A7ais-facile/',
# 'https://francaisfacile.rfi.fr/ru/podcasts/s%C3%A9lection/',
# 'https://francaisfacile.rfi.fr/ru/exercices/',
# 'https://francaisfacile.rfi.fr/ru/dipl%C3%B4mes-tests/',
# 'https://francaisfacile.rfi.fr/ru/tester-son-niveau/',
# 'https://francaisfacile.rfi.fr/ru/comprendre-actualit%C3%A9-fran%C3%A7ais/',
# 'https://francaisfacile.rfi.fr/ru/communiquer-quotidien/',
# 'https://francaisfacile.rfi.fr/ru/r%C3%A9viser/',
# 'https://francaisfacile.rfi.fr/ru/enseigner/',
# 'https://francaisfacile.rfi.fr/ru/exercices/a1/',
# 'https://francaisfacile.rfi.fr/ru/exercices/a2/',
# 'https://francaisfacile.rfi.fr/ru/exercices/b1/',
# 'https://francaisfacile.rfi.fr/ru/exercices/b2/',
# 'https://francaisfacile.rfi.fr/ru/exercices/c1c2/',
# 'https://francaisfacile.rfi.fr/ru/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]

#FLE_AR
# urls = [
# 'https://francaisfacile.rfi.fr/ar/',
# 'https://francaisfacile.rfi.fr/ar/podcasts/journal-en-fran%C3%A7ais-facile/',
# 'https://francaisfacile.rfi.fr/ar/podcasts/s%C3%A9lection/',
# 'https://francaisfacile.rfi.fr/ar/exercices/',
# 'https://francaisfacile.rfi.fr/ar/dipl%C3%B4mes-tests/',
# 'https://francaisfacile.rfi.fr/ar/tester-son-niveau/',
# 'https://francaisfacile.rfi.fr/ar/comprendre-actualit%C3%A9-fran%C3%A7ais/',
# 'https://francaisfacile.rfi.fr/ar/communiquer-quotidien/',
# 'https://francaisfacile.rfi.fr/ar/r%C3%A9viser/',
# 'https://francaisfacile.rfi.fr/ar/enseigner/',
# 'https://francaisfacile.rfi.fr/ar/exercices/a1/',
# 'https://francaisfacile.rfi.fr/ar/exercices/a2/',
# 'https://francaisfacile.rfi.fr/ar/exercices/b1/',
# 'https://francaisfacile.rfi.fr/ar/exercices/b2/',
# 'https://francaisfacile.rfi.fr/ar/exercices/c1c2/',
# 'https://francaisfacile.rfi.fr/ar/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]



#FLE_EN
# urls = [
# 'https://francaisfacile.rfi.fr/en/',
# 'https://francaisfacile.rfi.fr/en/podcasts/journal-en-fran%C3%A7ais-facile/',
# 'https://francaisfacile.rfi.fr/en/podcasts/s%C3%A9lection/',
# 'https://francaisfacile.rfi.fr/en/exercices/',
# 'https://francaisfacile.rfi.fr/en/dipl%C3%B4mes-tests/',
# 'https://francaisfacile.rfi.fr/en/tester-son-niveau/',
# 'https://francaisfacile.rfi.fr/en/comprendre-actualit%C3%A9-fran%C3%A7ais/',
# 'https://francaisfacile.rfi.fr/en/communiquer-quotidien/',
# 'https://francaisfacile.rfi.fr/en/r%C3%A9viser/',
# 'https://francaisfacile.rfi.fr/en/enseigner/',
# 'https://francaisfacile.rfi.fr/en/exercices/a1/',
# 'https://francaisfacile.rfi.fr/en/exercices/a2/',
# 'https://francaisfacile.rfi.fr/en/exercices/b1/',
# 'https://francaisfacile.rfi.fr/en/exercices/b2/',
# 'https://francaisfacile.rfi.fr/en/exercices/c1c2/',
# 'https://francaisfacile.rfi.fr/en/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]


#FLE_BR
# urls = [
# 'https://francaisfacile.rfi.fr/br/',
# 'https://francaisfacile.rfi.fr/br/podcasts/journal-en-fran%C3%A7ais-facile/',
# 'https://francaisfacile.rfi.fr/br/podcasts/s%C3%A9lection/',
# 'https://francaisfacile.rfi.fr/br/exercices/',
# 'https://francaisfacile.rfi.fr/br/dipl%C3%B4mes-tests/',
# 'https://francaisfacile.rfi.fr/br/tester-son-niveau/',
# 'https://francaisfacile.rfi.fr/br/comprendre-actualit%C3%A9-fran%C3%A7ais/',
# 'https://francaisfacile.rfi.fr/br/communiquer-quotidien/',
# 'https://francaisfacile.rfi.fr/br/r%C3%A9viser/',
# 'https://francaisfacile.rfi.fr/br/enseigner/',
# 'https://francaisfacile.rfi.fr/br/exercices/a1/',
# 'https://francaisfacile.rfi.fr/br/exercices/a2/',
# 'https://francaisfacile.rfi.fr/br/exercices/b1/',
# 'https://francaisfacile.rfi.fr/br/exercices/b2/',
# 'https://francaisfacile.rfi.fr/br/exercices/c1c2/',
# 'https://francaisfacile.rfi.fr/br/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]

# FLE_CN
# urls = [
#     'https://francaisfacile.rfi.fr/cn/',
#     'https://francaisfacile.rfi.fr/cn/podcasts/journal-en-fran%C3%A7ais-facile/',
#     'https://francaisfacile.rfi.fr/cn/podcasts/s%C3%A9lection/',
#     'https://francaisfacile.rfi.fr/cn/exercices/',
#     'https://francaisfacile.rfi.fr/cn/dipl%C3%B4mes-tests/',
#     'https://francaisfacile.rfi.fr/cn/tester-son-niveau/',
#     'https://francaisfacile.rfi.fr/cn/comprendre-actualit%C3%A9-fran%C3%A7ais/',
#     'https://francaisfacile.rfi.fr/cn/communiquer-quotidien/',
#     'https://francaisfacile.rfi.fr/cn/r%C3%A9viser/',
#     'https://francaisfacile.rfi.fr/cn/enseigner/',
#     'https://francaisfacile.rfi.fr/cn/exercices/a1/',
#     'https://francaisfacile.rfi.fr/cn/exercices/a2/',
#     'https://francaisfacile.rfi.fr/cn/exercices/b1/',
#     'https://francaisfacile.rfi.fr/cn/exercices/b2/',
#     'https://francaisfacile.rfi.fr/cn/exercices/c1c2/',
#     'https://francaisfacile.rfi.fr/cn/podcasts/les-mots-de-l-actualit%C3%A9/',
# ]

# *** OBS ***

# OBS_FR
# urls = [
#     'https://observers.france24.com/fr/',
#     'https://observers.france24.com/fr/tous-les-articles/',
#     'https://observers.france24.com/fr/tag/europe/',
#     'https://observers.france24.com/fr/tag/environnement/',
#     'https://observers.france24.com/fr/tag/droits-de-l-homme/',
# ]


#OBS_EN
# urls = [
# 'https://observers.france24.com/en/',
# 'https://observers.france24.com/en/all-articles/',
# 'https://observers.france24.com/en/tag/africa/',
# 'https://observers.france24.com/en/tag/environment/',
# 'https://observers.france24.com/en/tag/human-rights/',
# ]



#OBS_AR
# urls = [
# 'https://observers.france24.com/ar/',
# 'https://observers.france24.com/ar/%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/',
# 'https://observers.france24.com/ar/%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9',
# ]


#OBS_FA
# urls = [
# 'https://observers.rfi.fr/fa/',
# 'https://observers.rfi.fr/fa/%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/',
# 'https://observers.rfi.fr/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF',
# ]


for url in urls:
    # print(url)
    # get page source
    # response = se.get(url)
    # print(response)
    # print(response.text)
    html = se.get(url)
    time.sleep(2)

    # status
    # <Response [200]>
    # print(html)

    # html
    # print(html.text)

    # Load in BeautifulSoup
    # soup = BeautifulSoup(html.text, "html.parser")
    # print(soup)

    # Make a GET request to the webpage and get its content
    response = requests.get(url)
    content = response.content

    # Parse the content using BeautifulSoup
    soup = BeautifulSoup(html.text, 'html.parser')

    # Get the page slug from the URL
    slug = url.split('/')[-2]

    # Create an array to store the metadata
    metadata = [
        ['url', 'slug', slug]
    ]
    
    
    # Find all the metadata tags on the page
    meta_tags = soup.find_all('meta')

    # Loop through each meta tag and extract its properties
    for tag in meta_tags:
        # tag_type = tag.get('property') or tag.get('name')
        tag_type_property = tag.get('property')
        tag_type_name = tag.get('name')
        tag_content = tag.get('content')
        if tag_type_property and tag_content:
            metadata.append(['property_tag',
                            tag_type_property, tag_content])
        if tag_type_name and tag_content:
            metadata.append(['name_tag', tag_type_name, tag_content])
            
    # Find the title tag and extract its text
    title_tag = soup.find('title')
    if title_tag:
        metadata.append(['title_tag', 'title', title_tag.text])

    print('\n //--- '+url)
    # Print the metadata array
    print(metadata)





    """ chat GPT query

        # query
        In python, with BeautifulSoup, can you write a parsing script that grab in the source page: the slug value, the tag title value and all the tags metadata values e.g og:image, og:locale, description, twitter:card... etc and store it in an array like the below
    
        page_asie_pacifique: [
                ['slug','asie-pacifique/'],
                // title
                ['title_tag','title', 'XXX_TEXT'],
                // property
                ['property_tag','og:image', 'XXX_TEXT'], 
                ['property_tag','og:locale', 'XXX_TEXT'], 
                ['property_tag', 'og:site_name', 'XXX_TEXT'], 
                ['property_tag', 'og:type', 'website', 'XXX_TEXT'],
                ['property_tag', 'og:title', 'XXX_TEXT'], 
                ['property_tag', 'og:description', "XXX_TEXT"], 
                ['property_tag', 'og:url', 'XXX_TEXT'], 
                ['property_tag', 'fb:app_id', 'XXX_TEXT'], 
                ['property_tag', 'fb:pages', 'XXX_TEXT'],
                // name
                ['name_tag', 'description', "XXX_TEXT"], 
                ['name_tag', 'twitter:card', 'summary'], 
                ['name_tag', 'twitter:site', 'XXX_TEXT'], 
                ['name_tag', 'twitter:creator', 'XXX_TEXT'], 
                ['name_tag', 'keywords', 'XXX_TEXT'], 
                ['name_tag', 'apple-mobile-web-app-title', 'XXX_TEXT'], 
                ['name_tag', 'application-name', 'XXX_TEXT'], 
                ['name_tag', 'msapplication-TileColor', 'XXX_TEXT'], 
                ['name_tag', 'theme-color', 'XXX_TEXT'], 
                ['name_tag', 'apple-mobile-web-app-capable', 'XXX_TEXT']
            ]

# OUTPUT FROM ChatGPT

Yes, it's possible to write a parsing script using BeautifulSoup in Python to extract the metadata from a webpage and store it in an array in the format you specified. Here's an example script that demonstrates how to do it:

from bs4 import BeautifulSoup
import requests

# URL of the webpage to parse
url = 'https://example.com/'

# Make a GET request to the webpage and get its content
response = requests.get(url)
content = response.content

# Parse the content using BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')

# Get the page slug from the URL
slug = url.split('/')[-2]

# Create an array to store the metadata
metadata = [
    ['slug', slug]
]

# Find all the metadata tags on the page
meta_tags = soup.find_all('meta')

# Loop through each meta tag and extract its properties
for tag in meta_tags:
    tag_type = tag.get('property') or tag.get('name')
    tag_content = tag.get('content')
    if tag_type and tag_content:
        metadata.append([tag.name+'_tag', tag_type, tag_content])

# Find the title tag and extract its text
title_tag = soup.find('title')
if title_tag:
    metadata.append(['title_tag', 'title', title_tag.text])

# Print the metadata array
print(metadata)

This script first makes a GET request to the webpage and gets its content. Then it uses BeautifulSoup to parse the HTML content and extract the metadata tags on the page. For each metadata tag, it checks its property or name attribute to determine its type and extracts its content attribute. It stores this information in the metadata array in the format you specified.

The script also finds the title tag on the page and extracts its text. It stores this information in the metadata array as well.

Finally, the script prints the metadata array. You can modify this script to save the metadata array to a file or database for further processing.

# TRY_1 See https://stackoverflow.com/questions/36768068/get-meta-tag-content-property-with-beautifulsoup-and-python         
title = soup.find("meta", property="og:title")
url = soup.find("meta", property="og:url")

print(title["content"] if title else "No meta title given")
print(url["content"] if url else "No meta url given")
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


