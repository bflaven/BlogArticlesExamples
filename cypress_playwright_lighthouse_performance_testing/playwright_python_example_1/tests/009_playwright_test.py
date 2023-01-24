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
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_python_example_1/tests/



[file]
# launch all files
pytest 
# launch a specific file
pytest 009_playwright_test.py




"""
from playwright.sync_api import expect, Page

from pages.search import DuckDuckGoSearchPage
from pages.result import DuckDuckGoResultPage

def test_basic_duckduckgo_search(page: Page) -> None:
    search_page = DuckDuckGoSearchPage(page)
    result_page = DuckDuckGoResultPage(page)

    # Given the DuckDuckGo home page is displayed
    search_page.load()

    # When the user searches for a phrase
    search_page.search('panda')

    # Then the search result query is the phrase
    expect(result_page.search_input).to_have_value('panda')

    # And the search result links pertain to the phrase
    assert result_page.result_link_titles_contain_phrase('panda')

    # And the search result title contains the phrase
    expect(page).to_have_title('panda at DuckDuckGo')
    
    
