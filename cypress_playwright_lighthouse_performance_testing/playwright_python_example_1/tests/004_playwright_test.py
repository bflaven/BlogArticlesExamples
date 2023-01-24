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
pytest 004_playwright_test.py




"""


def test_basic_duckduckgo_search() -> None:
    # Given the DuckDuckGo home page is displayed
    # When the user searches for a phrase
    # Then the search result query is the phrase
    # And the search result links pertain to the phrase
    # And the search result title contains the phrase
    pass

