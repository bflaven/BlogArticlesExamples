// 002_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
* cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
* k6 run 002_k6_example_script.js
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
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  // const res = http.get('https://httpbin.test.k6.io/');
  const res = http.get('http://cypress.mydomain.priv/wordpress/');
 
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}