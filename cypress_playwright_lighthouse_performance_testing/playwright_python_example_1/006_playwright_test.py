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
pytest 006_playwright_test.py

# with few parameters
pytest 006_playwright_test.py --headed --slowmo 1000

python -m pytest tests --headed --slowmo 1000

# directory tests created and need to run all the tests
python -m pytest tests


"""

from playwright.sync_api import expect, Page


def test_basic_duckduckgo_search(page: Page) -> None:
# def test_basic_duckduckgo_search(page: Page):
    # Given the DuckDuckGo home page is displayed
    page.goto('https://www.duckduckgo.com')

    # When the user searches for a phrase
    page.fill('#search_form_input_homepage', 'panda')
    page.click('#search_button_homepage')

    # Then the search result query is the phrase
    expect(page.locator('#search_form_input')).to_have_value('panda')

    # And the search result links pertain to the phrase
    # And the search result title contains the phrase
    pass
