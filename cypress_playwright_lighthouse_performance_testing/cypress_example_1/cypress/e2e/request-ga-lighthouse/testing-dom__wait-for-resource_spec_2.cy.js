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
// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

/* 

https://www.cypress.io/assets/404.f7661cce.css
https://www.cypress.io/assets/careers.03810c47.css
https://www.cypress.io/assets/app.2b0625e3.css

*/


/**
 * Adds command "cy.waitForResource(name)" that checks performance entries
 * for resource that ends with the given name.
 * This command only applies to the tests in this spec file
 *
 * @see https://developers.google.com/web/tools/chrome-devtools/network/understanding-resource-timing
 */
Cypress.Commands.add('waitForResource', (name, options = {}) => {
  if (Cypress.browser.family === 'firefox') {
    cy.log('Skip waitForResource in Firefox')

    return
  }

  cy.log(`Waiting for resource ${name}`)

  const log = false // let's not log inner commands
  const timeout = options.timeout || Cypress.config('defaultCommandTimeout')

  cy.window({ log }).then(
    // note that ".then" method has options first, callback second
    // https://on.cypress.io/then
    { log, timeout },
    (win) => {
      return new Cypress.Promise((resolve, reject) => {
        let foundResource

        // control how long we should try finding the resource
        // and if it is still not found. An explicit "reject"
        // allows us to show nice informative message
        setTimeout(() => {
          if (foundResource) {
            // nothing needs to be done, successfully found the resource
            return
          }

          clearInterval(interval)
          reject(new Error(`Timed out waiting for resource ${name}`))
        }, timeout)

        const interval = setInterval(() => {
          foundResource = win.performance
          .getEntriesByType('resource')
          .find((item) => item.name.endsWith(name))

          if (!foundResource) {
            // resource not found, will try again
            return
          }

          clearInterval(interval)
          // because cy.log changes the subject, let's resolve the returned promise
          // with log + returned actual result
          resolve(
            cy.log('✅ success').then(() => {
              // let's resolve with the found performance object
              // to allow tests to inspect it
              return foundResource
            })
          )
        }, 100)
      })
    }
  )
})

// we allow these tests to fail and retry them because timing
// thresholds require leeway. Setting them too high makes the
// tests imprecise. Setting them to more likely values makes the tests flakey.
// @see https://www.cypress.io/blog/2020/12/03/retry-rerun-repeat/
describe('loading style', { retries: 0 }, () => {
  const timeout = 1500 // ms


  it('001 :: applies app.css styles', () => {
    cy.visit('/')
    cy.waitForResource('http://cypress.mydomain.priv/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1')
    cy.get('h2', { timeout }).should('have.css', 'font-size', '35px')

  })


  it('002 :: app.css is a tiny resource', { browser: '!firefox' }, () => {
    cy.visit('/')
    cy.waitForResource('http://cypress.mydomain.priv/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1').then((resourceTiming) => {
      expect(resourceTiming, 'got resource timing').to.not.be.null

      // there are lots of timing properties in this object
      expect(resourceTiming)
      .property('entryType')
      .to.equal('resource')

      expect(resourceTiming, 'the CSS file is very small (in bytes)')
      .property('transferSize')
      .to.be.lt(500)

      expect(resourceTiming, `loads in less than ${timeout}ms`)
      .property('duration')
      .to.be.lt(timeout)
    })
  })


describe('003 :: loading script', () => {
  it('waits for the script to load', () => {
    cy.visit('/')
    cy.window().its('console').then((console) => cy.spy(console, 'log').as('console'))
    cy.waitForResource('http://cypress.mydomain.priv/wordpress/wp-content/themes/generatepress/assets/js/menu.min.js?ver=3.1.3')
    

    // once the resource is loaded, it might take a turn to compile and run
    // thus we need to give the script time to call the console by retrying
    // cy.get('@console').should('have.been.calledOnce')
    // 
    cy.url('@console').should('eq', 'http://cypress.mydomain.priv/wordpress/')
    


  })
}) 

describe('ENDING', () => {
  it.skip('END :: ensure the minimum functioning :: Testing :: END TESTING', function () {

        // cy.BachEndUpLight()

    })
})

}) 

