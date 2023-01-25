/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/tests/


# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test /codewithmmak_playwright_assertions_demo_tests/page-url-not-have.spec.js --project=crocro --debug

npx playwright test /codewithmmak_playwright_assertions_demo_tests/page-url-not-have.spec.js --project=crocro


Source: https://github.com/nmanikiran/playwright-demos


*/




const { test } = require("../../lambdatest-setup");
const { expect } = require("@playwright/test");

test('LambdaTest Playground URL Not To Have test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page).not.toHaveURL("https://abc.lambdatest.io");
    await expect(page).not.toHaveURL(/404/);
});