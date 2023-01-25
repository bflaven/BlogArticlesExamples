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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/cypress_playwright_lighthouse_performance_testing/playwright_python_example_1/




[file]
# launch all files
pytest 
# launch a specific file
pytest 008_playwright_test.py

# with few parameters
pytest 008_playwright_test.py --headed --slowmo 1000

python -m pytest tests --headed --slowmo 1000

# directory tests created and need to run all the tests
python -m pytest tests


"""

# old version

# from playwright.sync_api import expect, Page

# def test_basic_duckduckgo_search(page: Page) -> None:

#     # Given the DuckDuckGo home page is displayed
#     page.goto('https://www.duckduckgo.com')

#     # When the user searches for a phrase
#     page.locator('#search_form_input_homepage').fill('panda')
#     page.locator('#search_button_homepage').click()

# new version 
from playwright.sync_api import Page
from pages.search import DuckDuckGoSearchPage


def test_basic_duckduckgo_search(page: Page) -> None:
    search_page = DuckDuckGoSearchPage(page)

    # Given the DuckDuckGo home page is displayed
    search_page.load()

    # When the user searches for a phrase
    search_page.search('panda')
