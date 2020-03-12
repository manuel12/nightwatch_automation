const {
  existingData,
  signUpData
} = require('../../data/test-data');
const util = require('util');

module.exports = {

    beforeEach: function(browser, done) {
      homePage = browser.page.home_page();
      loginPage = browser.page.login_page();

      homePage.navigate();
      done();
    },

    'Run sandbox': function(browser) {
    	loginPage.login(existingData.USERNAME, existingData.PASSWORD)
    },

    afterEach: function(browser, done) {
    	browser.end();	
    	done();
    }
}