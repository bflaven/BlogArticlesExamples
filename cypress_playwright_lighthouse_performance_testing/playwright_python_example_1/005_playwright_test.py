#!/usr/bin/python
# -*- coding: utf-8 -*-
"""

[env]
# Conda Environment
conda create --name playwright_test python=3.9.7
conda info --envs
source activate playwright_test
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# install requirements
# to export requirements
pip freeze > requirements_for_tuto.txt


# to install requirements
pip install -r requirements_for_tuto.txt




[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_python_example_1/



[file]
# launch all files
pytest 
# launch a specific file
pytest 005_playwright_test.py

# with few parameters
pytest 005_playwright_test.py --headed --slowmo 1000

python -m pytest tests --headed --slowmo 1000

# directory tests created and need to run all the tests
python -m pytest tests


"""

from playwright.sync_api import Page

# values

# TARGET_URL = 'https://www.duckduckgo.com'
TARGET_URL = 'https://flaven.fr'

def test_basic_duckduckgo_search(page):
    # Given the DuckDuckGo home page is displayed
    # page.goto('https://www.duckduckgo.com')
    # page.goto('https://www.duckduckgo.com', wait_until='networkidle')
    
    # Given the flaven.fr home page is displayed
    # page.goto(''+TARGET_URL+'')
    # page.goto(''+TARGET_URL+'', wait_until='networkidle')

    
