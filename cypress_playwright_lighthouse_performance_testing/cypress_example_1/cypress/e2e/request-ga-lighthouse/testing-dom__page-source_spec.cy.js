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

describe('Page source', () => {
  Cypress.on('uncaught:exception', (err) => {
    // cypress.io has a few React exceptions related to state hydration,
    // but these exceptions do not impact this test
    if (err.message.includes('Minified React error')) {
      return false
    }

    return true
  })

  it('gets the currently loaded document HTML', () => {
    cy.visit('/')
    cy.document().its('documentElement.outerHTML')
    .should('be.a', 'string')
    // let's show the HTML as text right in the browser
    // we need to sanitize the "<", ">", "&" characters
    .invoke('replace', /&/g, '&amp;')
    .invoke('replace', /</g, '&lt;')
    .invoke('replace', />/g, '&gt;')
    .then((sanitized) => {
      cy.document().invoke('write', sanitized)
    })
  })
})
