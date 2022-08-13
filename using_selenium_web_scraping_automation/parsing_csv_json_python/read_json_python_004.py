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
python read_json_python_004.py



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
 
f = open("datasets/macos_data.json", "r", encoding="utf-8")
data = json.load(f)
f.close()

# OUTPUT_1
# The deserialized JSON-encoded data is now stored in the variable data. The output has been re-formatted for clarity:
# print(data)

# OUTPUT_2
# To access a specific piece of data we can use bracket notation. For example, to get the date the information was last updated:
# print(data["updated"])

# OUTPUT_3
# print(data["versions"][0]["announced"])

# OUTPUT_4
print(data["versions"][0]["released"])
print(data["versions"][1]["released"])





