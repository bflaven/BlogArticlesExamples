// 002_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
k6 run --duration 10m 004_k6_example_script.js
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
  let responses = http.batch([['GET', 'http://cypress.mydomain.priv/wordpress/', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/css/main.min.css', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-content/uploads/2023/01/cropped-yalla_logo_178x180.png', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-includes/css/dist/block-library/style.min.css', params],
    ]);
  
 check(responses, {
    'Homepage loaded': (r) => JSON.stringify(r).includes('yalla_wp'),
  });
  

  sleep(4);

  // 02. View page about

responses = http.batch([
    ['GET', 'http://cypress.mydomain.priv/wordpress/about', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/css/main.min.css', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/', params],
    ['GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js', params],
  ]);

  check(responses, {
    'About Page loaded': (r) => JSON.stringify(r).includes('About'),
  });

  sleep(1);
}

