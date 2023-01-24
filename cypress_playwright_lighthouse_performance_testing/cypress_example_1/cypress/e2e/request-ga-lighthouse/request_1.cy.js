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
describe(' exploration of request command ', () => {
  
/*
  it('001 :: request', () => {
    cy.visit('/')

        cy.request('GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js')
      .then((resp) => {
        expect(resp.status).to.eq(200)
        cy.log(resp)
      })
  })


it('002 :: cy.request() - make an XHR request foir JS fiel', () => {
    cy.request('http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js?ver=3.1.3')
      .should((response) => {
        expect(response.status).to.eq(200)
        // cy.log(response)
        // expect(response).to.have.property('function')
         
      })
  })
*/


it('003 :: request', () => {
    cy.visit('/')
    cy.request('GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js')
      .then((resp) => {
        
        // cy.log('resp.status :: '+resp.status)
        // cy.log('resp.body :: '+resp.body)

        let res_lenght = (resp.body).length
        // cy.log('res_lenght :: '+res_lenght)
        

        // YEP
        expect(resp.status).to.eq(200)
        expect(resp.status, 'status code').to.equal(200)
        expect(resp.body, 'at least 3 caracters').to.have.length.gt(3)
        expect(res_lenght).to.be.greaterThan(5)
        expect(resp.body).not.to.be.empty
        expect(resp.body).to.contain('function')


      })

  })

})      



/*

# SOURCE
https://docs.cypress.io/guides/references/assertions

# EXAMPLE_1
expect(response.body).to.have.property('length').and.be.oneOf([500, 5000])
expect(response).to.have.property('duration')
expect(response).should('be.a', '!function(){}')

# EXAMPLE_2
cy.request('GET', 'http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js?ver=3.1.3', attributes)
  .then((resp) => {
    expect(resp.status).to.eq(200)
  })


 */

