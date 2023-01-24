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
/// <reference types="cypress" />
context('Navigator', () => {
  describe('stubbing navigator.cookieEnabled', () => {
    it('cookies are disabled for user', () => {
      cy.visit('/', {
        onBeforeLoad (win) {
          // stub property using https://on.cypress.io/stub
          cy.stub(win.navigator, 'cookieEnabled').value(false)
        },
      })

      // cy.get('#message').should('contain', 'Error: cookies not enabled!')
    })

    it('cookies are enabled for user', () => {
      cy.visit('/')

      // cy.get('#message').should('contain', 'Yay! cookies are enabled!')
    })
  })
})
