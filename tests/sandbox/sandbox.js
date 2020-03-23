const {
  existingData,
  signUpData
} = require('../../data/test-data');

module.exports = {

  '@tags': ['sandbox'],

  beforeEach: function(browser, done) {
    homePage = browser.page.home_page();
    loginPage = browser.page.login_page();
    accountPage = browser.page.account_page();
    orderPage = browser.page.order_page();
    personalInfoPage = browser.page.personal_info_page();
    signUpPage = browser.page.signup_page();

    homePage.navigate();
    done()
  },
  
  'Sandbox Test': function(browser) {
  },


  afterEach: function(browser, done) {
    browser
      .url('http://automationpractice.com/index.php?mylogout=')
      .deleteCookies()
      .end();
    done();
  }
}