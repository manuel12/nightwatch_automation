module.exports = {
  abortOnAssertionFailure: true,
  waitForConditionPollInterval : 1500,
  waitForConditionTimeout: 3000,

  beforeEach: (browser, done) => {
    browser.maximizeWindow();
    done();
  },

  afterEach: (browser, done) => {
    browser.end();
    done();
  }
}
