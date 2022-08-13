#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/using_selenium_web_scraping_automation/parsing_csv_json_python/

[file]
python read_json_python_005.py



# to export requirements
pip freeze > web_scraping_selenium.txt


# to install
pip install -r web_scraping_selenium.txt


# update conda 
conda update -n base -c defaults conda





# to export requirements
pip freeze > web_scraping_selenium_1.txt


# to install
pip install -r web_scraping_selenium_1.txt


# update conda if needed by running
conda update -n base -c defaults conda

[SOURCE]
https://www.tech-otaku.com/mac/using-python-to-loop-through-json-encoded-data/

"""

import os
import json
# f = open(os.environ["HOME"] + "macos_data.json", "r", encoding="utf-8")
 
f = open("datasets/macos_data_advanced.json", "r", encoding="utf-8")
data = json.load(f)
f.close()

# OUTPUT_1
# print(data)

# OUTPUT_2
# print(data["versions"][0]["requirements"][0])

# OUTPUT_3
# print(data["versions"][1]["requirements"][0])
# print(data["versions"][1]["requirements"][1])


# OUTPUT_4
# print(data["versions"][0]["releases"][6]["build"])



# print(data["versions"][1]["releases"][0]["build"] +" "+ data["versions"][1]["releases"][0]["darwin"])


# print(data["versions"][0]["releases"][0]["version"] +" "+ data["versions"][0]["releases"][0]["build"] +" "+ data["versions"][0]["releases"][0]["darwin"]); \
# print(data["versions"][0]["releases"][1]["version"] +" "+ data["versions"][0]["releases"][1]["build"] +" "+ data["versions"][0]["releases"][1]["darwin"]); \
# print(data["versions"][0]["releases"][2]["version"] +" "+ data["versions"][0]["releases"][2]["build"] +" "+ data["versions"][0]["releases"][2]["darwin"])

# LOOP
# for _version in data["versions"]: 
#     print(_version["codename"])

# DOUBLE LOOPS
# for _version in data["versions"]: 
#     print(_version["codename"])
#     for _requirement in _version["requirements"]: 
#         print("  " + _requirement)

# TRIPLE LOOPS
# for _version in data["versions"]: 
#     print(_version["codename"])
#     for _requirement in _version["requirements"]: 
#         print("  " + _requirement)
#     for _release in _version["releases"]: 
#         print("    " + _release["version"])

