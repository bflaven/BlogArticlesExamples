// 005_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/cypress_playwright_lighthouse_performance_testing/k6_example_1/

*
*
* launch K6 once installed
* k6 run 005_k6_example_script.js
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
https://k6.io/docs/examples/functional-testing/



 */
import http from 'k6/http';
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js';

export const options = {
  thresholds: {
    checks: ['rate == 1.00'],
  },
};

export default function () {
  describe('Hello world!', () => {
    const response = http.get('https://test-api.k6.io/public/crocodiles/');

    expect(response.status, 'response status').to.equal(200);
    expect(response).to.have.validJsonBody();
    expect(response.json(), 'croc list').to.be.an('array');
  });
}
