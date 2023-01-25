#!/usr/bin/python
# -*- coding: utf-8 -*-
"""

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/cypress_playwright_lighthouse_performance_testing/playwright_python_example_1/



[file]
# launch all files
pytest 
# launch a specific file
pytest 001_playwright_test.py




"""
import re
from playwright.sync_api import Page, expect


def test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page(page: Page):
    page.goto("https://flaven.fr/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Bruno Flaven"))

    # create a locator
    get_started = page.get_by_role("link", name="Publications")

    # Expect an attribute "to be strictly equal" to the value.
    expect(get_started).to_have_attribute(
        "href", "https://flaven.fr/publications/")
 
    # Click the get started link.
    get_started.click()

    # Expects the URL to contain intro.
    expect(page).to_have_url(re.compile(".*publications"))