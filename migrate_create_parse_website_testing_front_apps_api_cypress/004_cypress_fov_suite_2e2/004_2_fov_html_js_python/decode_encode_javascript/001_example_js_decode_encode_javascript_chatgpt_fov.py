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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/decode_encode_javascript

[file]
python 001_example_js_decode_encode_javascript_chatgpt_fov.py

# open ai
In python, can you write a script that 
decode an array of slugs named "NavActualitesSlugNewsByRegion" with the decodedUrl function then test the slug decoded obtained against a string that contains the same string in an array named "NavActualitesSlugNewsByRegionVersus"

NavActualitesSlugNewsByRegion: [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/']
            ], 

NavActualitesSlugNewsByRegionVersus: [
            ['page_france', 'فرنسا/'],
            ['page_maghreb', 'المغاربية/']
            ], 


"""

"""
Certainly, here's a possible implementation in Python:

"""

import urllib.parse

NavActualitesSlugNewsByRegion = [
    ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
    ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/']
]

NavActualitesSlugNewsByRegionVersus = [
    ['page_france', 'فرنسا/'],
    ['page_maghreb', 'المغاربية/']
]

for i in range(len(NavActualitesSlugNewsByRegion)):
    slug, encoded_url = NavActualitesSlugNewsByRegion[i]
    decoded_url = urllib.parse.unquote(encoded_url)
    expected_slug, expected_decoded_url = NavActualitesSlugNewsByRegionVersus[i]

    if slug != expected_slug:
        print(f"Error: expected slug '{expected_slug}', but got '{slug}'")
    elif decoded_url != expected_decoded_url:
        print(
            f"Error: expected decoded URL '{expected_decoded_url}', but got '{decoded_url}'")
    else:
        # print(f"Slug '{slug}' decoded correctly as '{decoded_url}'")

        print(f"Slug '{slug}' decoded correctly as '{decoded_url}'")



"""
NavActualitesSlugNewsByRegion: [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
            ['page_moyen_orient', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/']
        ],
    
"""


"""

This script first imports the urllib.parse module to use its unquote function, which can decode the URL-encoded strings in the NavActualitesSlugNewsByRegion array.

It then iterates over the elements in the NavActualitesSlugNewsByRegion array, decoding the URL-encoded string using unquote and comparing the resulting decoded URL and slug against the expected values in the NavActualitesSlugNewsByRegionVersus array. If there are any mismatches, an error message is printed to the console. Otherwise, a message indicating that the slug was decoded correctly is printed.

Note that this implementation assumes that the NavActualitesSlugNewsByRegion and NavActualitesSlugNewsByRegionVersus arrays have the same length and that their elements are ordered in the same way. If this is not the case, additional checks may be needed to ensure that the correct elements are being compared.

"""