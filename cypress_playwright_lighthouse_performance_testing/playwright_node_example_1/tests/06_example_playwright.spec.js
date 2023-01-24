/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/

# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test 06_example_playwright.spec.js
npx playwright test 06_example_playwright.spec.js --debug
npx playwright test 06_example_playwright.spec.js --project=chrome --debug

Source: https://github.com/gusstavocardoso/TestingPlaywrightJS


*/



const { test, expect } = require("@playwright/test");
const config = require("../playwright.config_1.js~~");
import Login from "../src/pages/LoginPage";
import Product from "../src/pages/ProductPage";
import Cart from "../src/pages/CartPage";
import Confirmation from "../src/pages/ConfirmationPage";
import Order from "../src/pages/OrderPage";
import User from "../src/fixtures/User";

test.describe("Playwright End-to-end Testing", () => {
  let login;
  let product;
  let cart;
  let confirmation;
  let order;
  let user;

  test.beforeEach(async ({ page }) => {
    await page.goto(config.use.baseURL);
    login = new Login(page);
    product = new Product(page);
    cart = new Cart(page);
    confirmation = new Confirmation(page);
    order = new Order(page);
    user = new User();
  });

  test("Should complete a purchase order", async ({ page }) => {
    await expect(page).toHaveTitle("Swag Labs");
    await login.user(user.data.access.userName, user.data.access.password);

    expect(await product.productPage()).toContainText("Products");
    await product.add();

    await cart.iconCart();
    expect(await cart.cartPage()).toContainText("Your Cart");

    await cart.tocheckoutConfirmation();
    expect(await confirmation.confirmationPage()).toContainText(
      "Checkout: Your Information"
    );
    await confirmation.toFinishOrder(user.data.info.firstName, user.data.info.lastName, user.data.info.zipCode);

    expect(await order.resumeOrderPage()).toContainText("Checkout: Overview");
    await order.finish();

    expect(await order.finishOrderPage()).toContainText("Checkout: Complete!");
  });
});
