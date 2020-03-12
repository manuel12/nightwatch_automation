const { timestamp } = require(__dirname + '/utils/utils');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

module.exports = {
  abortOnAssertionFailure: false,
  waitForConditionPollInterval : 1000,
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