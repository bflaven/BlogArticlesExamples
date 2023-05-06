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



[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/class_explained_chatgpt

[file]
python 002_example_python_class_explained_chatgpt.py

# other module
# go to the env
pip install requests
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog
pip install beautifulsoup4 

"""

# Sure, here's an example implementation of the UtilityFov class in Python:

class UtilityFov:
    def __init__(self, site, region):
        self.site = site
        self.region = region
        self.section_pages = self.get_section_pages()
        self.title_tag = self.get_title_tag()
        self.property_tag = self.get_property_tag()

    def get_section_pages(self):
        if self.site == 'RFI_FR':
            section_pages = {
                'page_afrique': 'afrique/',
                'page_asie_pacifique': 'asie-pacifique/',
                'page_monde': 'monde/'
            }
        elif self.site == 'F24_ES':
            section_pages = {
                'page_france': 'francia/',
                'page_europe': 'europa/',
                'page_sports': 'deportes/'
            }
        else:
            raise ValueError(f"Invalid site: {self.site}")
        return section_pages

    def get_title_tag(self):
        return f"{self.site} {self.region} title"

    def get_property_tag(self):
        return f"{self.site} {self.region} meta"

'''
Here's a brief explanation of what each method in this class does:

The __init__ method initializes the UtilityFov object with the given site and region. It also calls the get_section_pages, get_title_tag, and get_property_tag methods to populate the object's section_pages, title_tag, and property_tag attributes.

The get_section_pages method returns a dictionary of section pages for the current site. It checks the site attribute to determine which set of pages to return .

The get_title_tag method returns a string representing the title tag for the current site and region. It concatenates the site and region attributes with the word "noticias" (which means "news" in Spanish and French).

The get_property_tag method returns a string representing the property tag for the current site and region. It concatenates the site, "noticias", and region attributes.

To use this class , you could create a new instance with the desired site and region, like so:
'''

fov = UtilityFov('RFI_FR', 'afrique/')

# Then, you could access the object's attributes:

print(fov.section_pages)
# Output: {'page_afrique': 'afrique/', 'page_asie_pacifique': 'asie-pacifique/', 'page_monde': 'monde/'}

print(fov.title_tag)
# Output: "RFI_FR afrique/ title"

print(fov.property_tag)
# Output: "RFI_FR afrique/ meta"


