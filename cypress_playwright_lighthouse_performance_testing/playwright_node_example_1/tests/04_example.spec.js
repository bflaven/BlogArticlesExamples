/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/

# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test 04_example.spec.js
npx playwright test 04_example.spec.js --project=chrome --debug

Source: https://github.com/nmanikiran/playwright-demos


*/



const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('homepage has title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page).toHaveTitle("Your Store");
    await expect(page).toHaveTitle(/Store/);
});


test('Multi Select List of Country', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    const countrySelectorLoc = page.locator("#multi-select");
    await countrySelectorLoc.selectOption(["California", "Florida", "New Jersey"]);
    await expect(countrySelectorLoc).toHaveValues([/California/, /Florida/, /New Jersey/]);
});