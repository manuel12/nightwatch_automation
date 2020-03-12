const {
  existingData,
  signUpData
} = require('../../data/test-data');
const util = require('util');

module.exports = {

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
    	homePage.expect.element('@main').to.be.present
    	homePage.expect.element('@main').to.be.visible;
    	
      browser
      .assert.elementPresent(homePage.elements.main)
      .assert.title('My Store')
    },

   'Check that catalogue is shown': function(browser) {
    	homePage.expect.element('@catalogue').to.be.present
      homePage.expect.element('@catalogue').to.be.visible;
    	
      browser.assert.elementPresent(homePage.elements.catalogue);	
    },

  'Check that addding an item to cart is possible': function(browser) {
    homePage.addToCart();
    
    const pageElements = homePage.elements;
    browser
      .assert.elementPresent(pageElements.productSuccessFullyAdded)
      .assert.containsText(pageElements.productSuccessFullyAdded, 
         'Product successfully added to your shopping cart')
  },

  'Check that user can complete checkout': function(browser) {
  	loginPage.navigate().login(existingData.USERNAME, existingData.PASSWORD);	
  	homePage.navigate().addToCart()
  	orderPage.completeCheckout();

    const pageElements = orderPage.elements;
  	browser
  	.assert.elementPresent(pageElements.orderConfirmation)
  	.assert.containsText(pageElements.orderConfirmation, 'ORDER CONFIRMATION')
  	.assert.elementPresent(pageElements.orderComplete)
  	.assert.containsText(pageElements.orderComplete, 'Your order on My Store is complete.')
    .assert.title('Order confirmation - My Store');
  },

  'Check that new user can signup': function(browser) {
  	loginPage.navigate().startSignUp(signUpData.RNDM_USERNAME);
  	signUpPage.completeSignUp(signUpData);
  	accountPage.expect.element('@pageHeading').text.to.equal('MY ACCOUNT');

  	const elements = accountPage.getElements();
  	elements.forEach(function(element) {
  		let pageElement = `@${element}`;
  		accountPage.expect.element(pageElement).to.be.present
  		accountPage.expect.element(pageElement).to.be.visible;
  	})

    const pageElements = accountPage.elements;
  	browser
  	.assert.urlEquals(accountPage.url)
  	.useCss()
  	.assert.containsText(pageElements.signUpHeading, 
      'Welcome to your account. Here you can manage all of your personal information and orders.')
    .assert.title('My account - My Store');
   },

  'Check that existing user can log in':  function(browser) {
  	loginPage.login(existingData.USERNAME, existingData.PASSWORD)
    loginPage.expect.element('@invalidCredentials').to.not.be.present
  	loginPage.expect.element('@pageHeading').text.to.equal('MY ACCOUNT');
  	
    browser
    .assert.urlEquals(accountPage.url)
    .assert.title('My account - My Store');
  },

  'Check that existing user can logout': function(browser) {
  	loginPage.login(existingData.USERNAME, existingData.PASSWORD);
  	accountPage.signOut().navigate();
  	loginPage.expect.element('@pageHeading').text.to.equal('AUTHENTICATION');
  	
    browser
    .assert.urlEquals(loginPage.url)
    .assert.title('Login - My Store');
  },

  'Check that user account data is correct': function(browser) {
  	loginPage.login(existingData.USERNAME, existingData.PASSWORD);
  	personalInfoPage.navigate();

    const pageElements = personalInfoPage.elements;
  	browser
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