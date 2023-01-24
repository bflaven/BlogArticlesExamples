/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/tests/


# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test 04_example.spec.js
npx playwright test 04_example.spec.js --project=chrome --debug

npx playwright test /codewithmmak_playwright_assertions_demo_tests/page-title.spec.js


Source: https://github.com/nmanikiran/playwright-demos


*/




const { test } = require("../../lambdatest-setup");
const { expect } = require("@playwright/test");

test('homepage has title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page).toHaveTitle("Your Store");
    await expect(page).toHaveTitle(/Store/);
});