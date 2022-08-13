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
python read_posts_json_python_001.py



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
 
f = open("datasets/posts_data_1.json", "r", encoding="utf-8")
data = json.load(f)
f.close()

# OUTPUT_1
# print(data)

# OUTPUT_2
# print(data["posts"][0]["post_title"])
# print(data["posts"][1]["post_title"])
# print(data["posts"][2]["post_title"])

# OUTPUT_3
# print(data["posts"][2]["post_title"])
# print(data["posts"][2]["post_content"])
# print(data["posts"][2]["post_categories"])
# print(data["posts"][2]["post_tags"])


# LOOP
for _post in data["posts"]: 
    print(_post["post_title"])



