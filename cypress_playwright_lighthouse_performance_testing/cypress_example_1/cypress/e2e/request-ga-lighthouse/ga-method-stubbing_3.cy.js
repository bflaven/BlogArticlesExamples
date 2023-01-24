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

// before visiting the page, we have blocked the www.google-analytics.com host
// which prevents the GA script from ever loading. however because there
// is still a global 'window.ga' function, that means we can stub it
// and ensure its called correctly.
//
// if you pop open your dev tools you will see that the network request
// for the script tag returns 503 because it's been blocked.

describe('Google Analytics', function () {
  // using a global event handler here because likely
  // in your real app you'll always want to stub window.ga
  //
  // if not you could just add a onBeforeLoad() callback
  // to the cy.visit
  Cypress.on('window:before:load', (win) => {
  // because this is called before any scripts
  // have loaded - the ga function is undefined
  // so we need to create it.
    win.ga = cy.stub().as('ga')
  })

  beforeEach(function () {
    cy.intercept({ hostname: 'www.google-analytics.com' }, { statusCode: 503 })
    cy.visit('/')
  })

  it('001 :: can ensure window.ga is called correctly', function () {

    cy
    .get('@ga')
    .should('be.calledWith', 'create', 'UA-HJGJ-7')
    .should('be.calledWith', 'set', 'page', 'index.php')
    .and('be.calledWith', 'send', 'pageview')

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
