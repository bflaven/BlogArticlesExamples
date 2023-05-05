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
cd /Users/brunoflaven/Documents/01_work/blog_articles/migrate_create_parse_website_testing_front_cypress/package_json_python/


[file]
python 001_generate_package.py

# open ai
In python, create a loop a to print out each values from the variable languages
"""


devices = ['desktop', 'tablet', 'mobile',
           'mobile-landscape', 'tablet-landscape']
devices_shortcuts = ['d', 't', 'm', 'ml', 'tl']
brands_languages = ['F24_FR', 'F24_EN', 'F24_ES', 'F24_AR']

brands_languages = ['RFI_FR', 'RFI_BR', 'RFI_CN', 'RFI_EN', 'RFI_ES', 'RFI_FA', 'RFI_FF', 'RFI_HA', 'RFI_KM', 'RFI_MA', 'RFI_PT', 'RFI_RO', 'RFI_RU', 'RFI_SW', 'RFI_TW', 'RFI_UK', 'RFI_VI', 'F24_FR', 'F24_EN', 'F24_ES', 'F24_AR', 'FLE_FR', 'FLE_AR', 'FLE_BR', 'FLE_CN', 'FLE_EN', 'FLE_ES', 'FLE_RU', 'OBS_FR', 'OBS_EN', 'OBS_AR', 'OBS_FA', 'MCD_AR']

for shortcut in devices_shortcuts:
    for device in devices:
        for brand_language in brands_languages:
                # print(device + ', ' + brand_language)
                
                print(
                    f'"cy:run:c:{brand_language}:{shortcut}": "cypress run  --browser chrome --config video=false,screenshotOnRunFailure=false --env BRAND_LANG=\\"{brand_language}\\",DEVICE_TYPE=\\"{device}\\" --config-file \"config/{brand_language}.conf.env.cypress.config.js\"",')
                # print('')
