// 008_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
* cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
* k6 run 008_k6_example_script.js
*
*
* * More explanations in the ressources below
*
* @more
* 
* Blog :: https://flaven.fr/
* Amazon :: https://amzn.to/2WQbRpA
* Github :: https://github.com/bflaven
* Youtube :: https://bit.ly/2WPlpAU
*
*
*
* (c) Bruno Flaven <info@flaven.fr>
 */

/*
https://k6.io/docs/testing-guides/load-testing-websites/
 */
import { chromium } from 'k6/x/browser';
import { sleep } from 'k6';

export default function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  // 01. Go to the homepage
  page
    .goto('https://mywebsite.com', { waitUntil: 'networkidle' })
    .then(() => {
      page.waitForSelector('p[class="woocommerce-result-count"]"]');
      page.screenshot({ path: 'screenshots/01_homepage.png' });

      sleep(4);

      // 02. View products
      const element = page.$(
        'a[class="woocommerce-LoopProduct-link woocommerce-loop-product__link"]'
      );
      element.click();
      page.waitForSelector('button[name="add-to-cart"]');
      page.screenshot({ path: 'screenshots/02_view-product.png' });

      sleep(1);
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}