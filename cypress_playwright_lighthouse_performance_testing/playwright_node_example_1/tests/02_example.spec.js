/*
- path
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/

# Runs the end-to-end tests.
npx playwright test



# Runs the tests only on Desktop Chrome.
npx playwright test --project=chrome

# Runs the tests in a specific file.
npx playwright test 02_example.spec.js


npx playwright test 02_example.spec.js --project=chrome


# Runs the tests in debug mode.
npx playwright test --debug


# Auto generate tests with Codegen.
npx playwright codegen

# We suggest that you begin by typing:
npx playwright test

*/
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
