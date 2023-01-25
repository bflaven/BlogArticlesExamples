// 009_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
k6 run 009_k6_example_script.js
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
https://k6.io/docs/javascript-api/xk6-browser/api/browser/
 */
import { chromium } from 'k6/x/browser';

export default function () {
  const browser = chromium.launch();
  const context = browser.newContext();
  const page = context.newPage();

  page
    .goto('https://test.k6.io/', {
      waitUntil: 'networkidle',
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}