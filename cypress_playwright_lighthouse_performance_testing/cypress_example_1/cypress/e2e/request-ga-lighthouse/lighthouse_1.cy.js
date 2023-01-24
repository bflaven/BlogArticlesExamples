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
describe('Lighthouse', () => {
  /*
  it('001 :: should run performance audits', () => {
    cy.visit('/');
    cy.lighthouse();
  });
  */
 
            it("002 :: should pass the audits and check scores", function () {
                        cy.visit('/');
                        // cy.lighthouse();
                          cy.lighthouse({
                            accessibility: 50,
                            "best-practices": 50,
                            seo: 50,
                            pwa: 20,
                          });
                        // Does not work
                        // cy.pa11y();

            });
});




