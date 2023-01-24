// 002_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
* cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
* k6 run 003_k6_example_script.js
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
import http from 'k6/http';
import { sleep, check } from 'k6';

export function Homepage() {
  const params = {
    'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9',
  };

  // 01. Go to the homepage
  let responses = http.batch([
    ['GET', 'https://mywebsite.com/', params],
    ['GET', 'https://mywebsite.com/style.min.css', params],
    ['GET', 'https://website.com/header.png', params],
    ['GET', 'https://website.com/polyfill.min.js', params],
  ]);
  check(responses, {
    'Homepage loaded': (r) => JSON.stringify(r).includes('Welcome to my site'),
  });

  sleep(4);

  // 02. View products
  responses = http.batch([
    ['GET', 'https://mywebsite.com/products', params],
    ['GET', 'https://mywebsite.com/style.css', params],
    ['GET', 'https://website.com/product1.jpg', params],
    ['GET', 'https://website.com/product2.jpg', params],
    ['GET', 'https://website.com/displaylist.js', params],
  ]);
  check(responses, {
    'Products loaded': (r) => JSON.stringify(r).includes('Add to Cart'),
  });

  sleep(1);
}

