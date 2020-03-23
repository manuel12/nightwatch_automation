const {
  existingData,
  signUpData
} = require('../../data/test-data');
module.exports = {
  '@tags': ['smoke-tests'],

  beforeEach: function(browser, done) {
    homePage = browser.page.home_page();
    loginPage = browser.page.login_page();
    accountPage = browser.page.account_page();
    orderPage = browser.page.order_page();
    personalInfoPage = browser.page.personal_info_page();
    signUpPage = browser.page.signup_page();

    homePage.navigate();
    done();
  },

  'Check that main page is shown': function(browser) {
    browser
      .assert.elementPresent(homePage.elements.main)
      .assert.title('My Store')
  },

  'Check that catalogue is shown': function(browser) {
    browser.assert.elementPresent(homePage.elements.catalogue);
  },

  'Check that addding an item to cart is possible': function(browser) {
    homePage.addToCart();

    const pageElements = homePage.getElements();
    browser
      .assert.not.containsText(pageElements.shoppingCartLink, 'empty')
      .assert.elementPresent(pageElements.productSuccessFullyAdded)
      .assert.containsText(pageElements.productSuccessFullyAdded,
        'Product successfully added to your shopping cart')
  },

  'Check that user can complete checkout': function(browser) {
    homePage.addToCart();
    loginPage.login(existingData.USERNAME, existingData.PASSWORD);
    orderPage.navigate();
      
    browser
    .useCss()
    .getText('#center_column', (result) => {
      const SHOPPING_CART_BTN_TEXT = result.value;

      //  Retry adding to cart if it failed the first time
      if(SHOPPING_CART_BTN_TEXT.includes('Your shopping cart is empty.')) 
        homePage.addToCart();
    })
    
    orderPage.completeCheckout();

    const pageElements = orderPage.getElements();
    browser
      .assert.urlContains('http://automationpractice.com/index.php?controller=order-confirmation')
      .assert.elementPresent(pageElements.orderConfirmation)
      .assert.containsText(pageElements.orderConfirmation, 'ORDER CONFIRMATION')
      .assert.elementPresent(pageElements.orderComplete)
      .assert.containsText(pageElements.orderComplete, 'Your order on My Store is complete.')
      .assert.title('Order confirmation - My Store');
  },

  'Check that new user can signup': function(browser) {
    loginPage.startSignUp(signUpData.RNDM_USERNAME);
    signUpPage.completeSignUp(signUpData);

    const pageElements = accountPage.getElements();
    browser
      .assert.urlEquals(accountPage.url)
      .assert.containsText(pageElements.pageHeading, 'MY ACCOUNT')
      .assert.containsText(pageElements.signUpHeading,
        'Welcome to your account. Here you can manage all of your personal information and orders.')
      .assert.title('My account - My Store');
  },

  'Check that existing user can log in': function(browser) {
    loginPage.login(existingData.USERNAME, existingData.PASSWORD)

    const pageElements = loginPage.getElements();
    browser
      .assert.urlEquals(accountPage.url)
      .assert.not.elementPresent(pageElements.invalidCredentials)
      .assert.containsText(pageElements.pageHeading, 'MY ACCOUNT')
      .assert.title('My account - My Store');
  },

  'Check that existing user can logout': function(browser) {
    loginPage.login(existingData.USERNAME, existingData.PASSWORD);
    accountPage.signOut();
    loginPage.navigate();

    const pageElements = loginPage.getElements();
    browser
      .assert.urlEquals(loginPage.url)
      .assert.containsText(pageElements.pageHeading, 'AUTHENTICATION')
      .assert.title('Login - My Store');
  },

  'Check that user account data is correct': function(browser) {
    loginPage.login(existingData.USERNAME, existingData.PASSWORD);
    personalInfoPage.navigate();

    const pageElements = personalInfoPage.getElements();
    browser
      .assert.urlEquals(personalInfoPage.url)
      .assert.value(pageElements.firstName, existingData.FIRST_NAME)
      .assert.value(pageElements.lastName, existingData.LAST_NAME)
      .assert.value(pageElements.email, existingData.USERNAME)
      .assert.containsText(pageElements.dayOfBirth, existingData.DAY_OF_BIRTH)
      .assert.containsText(pageElements.monthOfBirth, existingData.MONTH_OF_BIRTH)
      .assert.containsText(pageElements.yearOfBirth, existingData.YEAR_OF_BIRTH)
      .assert.title('Identity - My Store');
  },

  afterEach: function(browser, done) {
    browser
      .url('http://automationpractice.com/index.php?mylogout=')
      .deleteCookies()
      .end();
     done();
  }

}