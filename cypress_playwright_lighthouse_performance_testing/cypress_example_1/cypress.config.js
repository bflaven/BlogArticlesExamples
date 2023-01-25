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


const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");

const { defineConfig } = require("cypress");


module.exports = defineConfig({
  env: {
    WP_FRONT_FULL_DOMAIN: 'http://cypress.mydomain.priv/wordpress/',
    WP_FRONT_SITE_TITLE: 'yalla_wp',
    WP_FRONT_TAGLINE: 'Just another WordPress site',
    WP_BACK_LOGIN_USERNAME: 'admin',
    WP_BACK_LOGIN_PASSWORD: 'admin',
    WP_BACK_DEFAULT_LANG: 'en_EN',
    WP_BACK_LOGIN_PAGE: '/wp-login.php',
    WP_BACK_FULL_DOMAIN: 'http://cypress.mydomain.priv/wordpress/wp-admin/',
    WP_BACK_SUBDIRECTORY: '/wp-admin/',
    WP_BACK_SUBDIRECTORY_FULL: '/wordpress/wp-admin/',
    WP_BACK_SUBDIRECTORY_FULL_LOGIN: '/wordpress/wp-login.php',
    WP_BACK_PROTOCOL: 'http:',
    WP_BACK_IMAGES_DIRECTORY_STATUS: 'empty',
    WP_BACK_LOSTPASSWORD_URL: 'https://cypress.mydomain.priv/wordpress/wp-login.php?action=lostpassword',
    LOCALHOST_MAIN_DOMAIN: 'cypress.mydomain.priv',
    LOCALHOST_WP_PROTOCOL: 'http://',
    LOCALHOST_WP_SUBDIRECTORY: '/wordpress/',
    CYPRESS_PROJECT_NAME: 'e2e-wp',
    CYPRESS_PROJECT_NAME_DESCRIPTION: 'This is the WP Local website for Cypress Book',
    MY_BOOLEAN: true,
    MY_INT: 9,
    MY_STRING: 'my_env_var_capital',
    YourVarNameCypressJson: 'my_env_var_camelCase',
    db: {
      host: 'localhost',
      user: 'root',
      password: 'rooty',
      database: 'wp_install_local',
    },
    db2: {
      host: 'localhost',
      user: 'root',
      password: 'rooty',
      database: 'play_wp_import_local',
    }
  },
  e2e: {
    baseUrl: 'http://cypress.mydomain.priv/wordpress/',
    // baseUrl: 'https://flaven.fr',
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    screenshotsFolder:'./po_screenshots',
    projectId: 'e2e-wp',
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    waitForAnimations: false,
    experimentalFetchPolyfill: true,
    experimentalInteractiveRunEvents: true,
    experimentalSourceRewriting: true,
    animationDistanceThreshold: 50,
    viewportWidth: 1280,
    viewportHeight: 1024,
    defaultCommandTimeout: 5000,
    slowTestThreshold: 2500,
    // baseUrl: 'http://cypress.mydomain.priv/wordpress/wp-json/',
    // viewportHeight: 200,
    //viewportWidth: 250,

    setupNodeEvents(on, config) {
      

      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        // pa11y: pa11y(console.log.bind(console)),
        pa11y: pa11y(), // calling the function is important
         
      });




      
    },
  },
});
