// 010_k6_example_script.js
/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/k6_example_1/
*
*
* launch K6 once installed
k6 run 010_k6_example_script.js
k6 run --vus 1 --duration 1m 010_k6_example_script.js
k6 run --vus 1 --no-thresholds --duration 1m 010_k6_example_script.js

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
import { sleep, check, group } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { target: 50, duration: '1m' }, // 50 virtual users (VUs)
    { target: 50, duration: '3m' },
    { target: 0, duration: '1m' },
  ],
  thresholds: {
    // Requirement to pass the tests
    http_req_duration: [
      'p(80)<5000', // 95% of response times must be below 3s
      { threshold: "p(80)>=5000", abortOnFail: false },
    ],
    http_req_failed: [
      'rate<0.01', // Error rate should be less than 1%
      { threshold: "rate>=0.05", abortOnFail: false },
    ],
  },
};


/*
thresholds: {
        'example_trend_response_time': ['med>39', 'med<95'],  
        'example_rate_successful_requests': ['rate==1'],
    },

 */
export default function main() {
  let response;

  group( 'Homepage group', function () {
    // Homepage
    response = http.get( 'https://flaven.fr/' );
    check( response, {
      'status equals 200': ( response ) => response.status.toString() === '200',
      'body contains Bruno Flaven': (
        response
      ) =>
        response.body.includes(
          'Bruno Flaven'
        ),
    } );
    sleep( 3 );
  } );

  group( 'Resume page', function () {
    // abc page
    response = http.get( 'https://flaven.fr/bruno-flaven-resume-cv/' );
    check( response, {
      'status equals 200': ( response ) => response.status.toString() === '200',
      'body contains Bruno Flaven': ( response ) =>
        response.body.includes( 'Bruno Flaven' ),
    } );
    sleep( 2 );
  } );

  group( 'Publications page', function () {
    // Blog
    response = http.get( 'https://flaven.fr/publications' );
    check( response, {
      'status equals 200': ( response ) => response.status.toString() === '200',
      'body contains Publications': ( response ) =>
        response.body.includes( 'Publications' ),
    } );
    sleep( 2 );
  } );
}