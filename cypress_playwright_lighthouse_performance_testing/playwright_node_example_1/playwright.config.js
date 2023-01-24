const config = {
    use: {
      baseURL: 'https://www.saucedemo.com/',
      // browserName: 'chromium',
      headless: true,
      // viewport: { width: 1280, height: 720 },
      launchOptions: {
        slowMo: 50,
      },
      screenshot: 'only-on-failure', // 'on', 'off', 'only-on-failure'
      video: 'on', // 'on', 'off', 'retain-on-failure', 'on-first-retry'
      trace: 'on', // 'on', 'off', 'retain-on-failure', 'on-first-retry'
    },
    testDir: 'tests',
    retries: 2,
    timeout: 60000,
    projects: [
        {
            name: 'crocro',
            use: {
              browserName: 'chromium',
              viewport: { width: 1280, height: 720 },
            },
          }
    ],
  }
  
  module.exports = config