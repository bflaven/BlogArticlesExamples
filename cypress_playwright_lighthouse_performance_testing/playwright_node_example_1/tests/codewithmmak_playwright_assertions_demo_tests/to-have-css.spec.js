/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/tests/


# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test /codewithmmak_playwright_assertions_demo_tests/to-have-css.spec.js --project=crocro --debug

npx playwright test /codewithmmak_playwright_assertions_demo_tests/to-have-css.spec.js --project=crocro

npx playwright test /codewithmmak_playwright_assertions_demo_tests/to-have-css.spec.js --debug



Source: https://github.com/nmanikiran/playwright-demos


*/
const { test } = require("../../lambdatest-setup");
const { expect } = require("@playwright/test");

test('First name on Registration page to have CSS test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const firstname = page.locator("#input-firstname");
    await expect(firstname).toHaveCSS("display", "block");
    console.log('\n---firstname :: '+firstname+'')
});