/*
- path
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test 03_example.spec.js
npx playwright test 03_example.spec.js --project=chrome --debug



Source : https://github.com/LambdaTest/playwright-sample

*/

const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest on Bing', async ({ page }) => {
    await page.goto('https://www.bing.com')
    const element = await page.$('[aria-label="Enter your search term"]')
    await element.click()
    await element.type('LambdaTest')
    await element.press('Enter')
    const title = await page.title()

    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('LambdaTest'))
  })
})