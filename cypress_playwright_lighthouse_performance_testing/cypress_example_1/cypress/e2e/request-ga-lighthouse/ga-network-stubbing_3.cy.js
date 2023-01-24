/**
 * @usage
* 
* step_1 :: go to the dir where cypress is installed
* cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/cypress_example_1/
*
*
* launch Cypress once installed
* npx cypress open
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

/// <reference types="cypress" />
  const interceptToPageEvent = (intercept) => {
    return cy.wrap(intercept, { log: false }).its('request.url', { log: false })
    .then((s) => new URL(s)).its('searchParams', { log: false }).then((url) => {
      return {
        type: url.get('t'),
        page: url.get('dp'),
      }
    })
  }

/// <reference types="cypress" />
describe('Google Analytics', () => {
  // we can arrange the intercepts to be in a particular order in each test
  // by making small utility functions rather than using "beforeEach" hooks

  beforeEach(() => {
    cy.log('**stub all GA calls**')
    // Do not let collect network calls get to Google Analytics. Instead intercept them
    // returning the status code 200. Since different events use different endpoints
    // let's define two intercepts to be precise
    cy.intercept('POST', 'https://www.google-analytics.com/j/collect*', { statusCode: 200 }).as('collect')
    cy.intercept('GET', 'https://www.google-analytics.com/collect*', { statusCode: 200 }).as('gifCollect')

    cy.log('**visiting the page**')
    cy.visit('/')
    // its('ga').should('be.a', 'function')
  })

/*
https://www.google-analytics.com/j/collect?v=1&_v=j98&a=9769103&t=pageview&_s=1&dl=http%3A%2F%2Fcypress.mydomain.priv%2Fwordpress%2F&dp=index.php&ul=es-419&de=UTF-8&dt=yalla_wp%20%E2%80%93%20Just%20another%20WordPress%20site&sd=30-bit&sr=1470x956&vp=1000x660&je=0&_u=YEBAAEABAAAAACAAI~&jid=45219904&gjid=1650348736&cid=1805040184.1673871183&tid=UA-HJGJ-7&_gid=744814495.1673871183&_r=1&_slc=1&z=1464873468

 */


  it('001 :: makes collect calls', () => {
      
    cy.wait('@collect').its('request.url').then((s) => new URL(s)).its('searchParams').invoke('get', 't').should('equal', 'pageview')
  })

it('002 :: makes collect calls', () => {
      
    cy.wait('@collect').its('request.url').then((s) => new URL(s)).its('searchParams').invoke('get', '_u').should('eq', 'YEBAAEABAAAAACAAI~')
  })

it('003 :: makes collect calls', () => {
 
cy.wait('@collect').its('request.url')
    .then((s) => new URL(s)).its('searchParams').then((url) => {
      return {
        v:  url.get('v'),
        t:  url.get('t'),
        ul: url.get('ul'),
        de: url.get('de'),
      }
    }).should('deep.equal', {
      v: '1',
      t: 'pageview',
      ul: 'es-419',
      de: 'UTF-8',
    })

 })

})

/*

Suppose that you add the GA code into your Website files or CMS
--- Extract from the code

<!-- FOR CYPRESS TEST -->
<script type="text/javascript">
      // standard google analytics code
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-HJGJ-7', 'auto');
      ga('set', 'page', 'index.php');
      ga('send', 'pageview');

      window.onhashchange = function () {
        // an example of calling into GA whenever there is a
        // hashchange. this is used for demonstration purposes
        ga('send', 'pageview', window.location.hash)
      }

</script>

*/
