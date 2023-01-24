/*
# [PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/cypress_playwright_lighthouse_performance_testing/playwright_node_example_1/

# [COMMANDS]
# Runs the end-to-end tests.
npx playwright test

# Runs the end-to-end tests.
npx playwright test

# Runs the tests in a specific file.
npx playwright test 05_example.spec.js
npx playwright test 05_example.spec.js --project=chrome --debug

Source: https://github.com/garrytrinder/power-playwright


*/

//@ts-check

const { firefox } = require('playwright');
const assert = require('assert');
const userMock = require('../mocks/user.json');
const { login, getFrame, getLabelByName, getButtonByName } = require('../utils');

describe('Playwright', function () {
  let browser, page, frame;

  before(async function () {
    // launch new browser instance
    browser = await firefox.launch({ headless: false, slowMo: 50 });
    // create a new browser window
    page = await browser.newPage();
    // setup mock api response
    await page.route('https://uk-001.azure-apim.net/invoke', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        headers: {
          'access-control-allow-origin': '*'
        },
        body: JSON.stringify(userMock)
      })
    });
    // navigate to powerapp in embed mode, removing office 365 banner
    await page.goto(`https://apps.powerapps.com/play/${process.env.APP_ID}?source=iframe&hidenavbar=true`);
    // perform azure ad login 
    await login(page);
    // wait for redirection back to power app
    await page.waitForNavigation({ url: 'https://apps.powerapps.com/**' });
    // initialise power app content iframe
    frame = await getFrame(page);
  });

  after(function () {
    // close browser instance
    browser.close();
  });

  beforeEach(async function () {
    // re-initialise power app content iframe
    frame = await getFrame(page);
  });

  afterEach(async function () {
    // reload browser tab
    await page.reload({ timeout: 0 });
  });

  it('should login and load', async function () {
    const counter = await getLabelByName('lblCount', frame);
    const count = await counter.innerText();

    // @ts-ignore
    assert.strictEqual(count, '0');
  });

  it('when add clicked, counter should increment', async function () {
    const button = await getButtonByName('btnAdd', frame);
    await button.click();
    const counter = await getLabelByName('lblCount', frame);
    const count = await counter.innerText();

    // @ts-ignore
    assert.strictEqual(count, '1');
  });

  it('when subtract clicked, counter should decrement', async function () {
    const subtract = await getButtonByName('btnSubtract', frame);
    await subtract.click();
    const counter = await getLabelByName('lblCount', frame);
    const count = await counter.innerText();

    // @ts-ignore
    assert.strictEqual(count, '-1');
  });

  it('displays name of the current user', async function () {
    const welcome = await getLabelByName('lblWelcome', frame);
    const text = await welcome.innerText();

    // @ts-ignore
    assert.strictEqual(text, 'Welcome User!');
  });

});