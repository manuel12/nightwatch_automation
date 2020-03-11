const {
  clickOnElement
} = require('../utils/page-objects');
const {
  COMPLETING_CHECK_OUT
} = require('../data/logs');

const orderPageCommands = {
  clickOnElement,
  completeCheckout() {
    return this
      .navigate()
      .clickOnElement('@step1CheckoutButton')
      // Step 2- Sign In step: Skipped step, assume user is already logged in
      .clickOnElement('@step3CheckoutButton')
      .clickOnElement('@termsAndConditionsButton')
      .clickOnElement('@step4CheckoutButton')
      .clickOnElement('@payByBankWire')
      .clickOnElement('@step5CheckoutButton')
  }
}

module.exports = {
  url: 'http://automationpractice.com/index.php?controller=order',
  elements: {
    orderStepsColumn: '#order_step',

    orderSummary: {
      selector: '//*[@id="order_step"]/li[1]',
      locateStrategy: 'xpath'
    },
    signIn: {
      selector: '//*[@id="order_step"]/li[2]',
      locateStrategy: 'xpath'
    },
    address: {
      selector: '//*[@id="order_step"]/li[3]',
      locateStrategy: 'xpath'
    },
    shipping: {
      selector: '//*[@id="order_step"]/li[4]',
      locateStrategy: 'xpath'
    },
    payments: {
      selector: '//*[@id="order_step"]/li[5]',
      locateStrategy: 'xpath'
    },
    termsAndConditionsButton: {
      selector: '//*[@id="cgv"]',
      locateStrategy: 'xpath'
    },
    step1CheckoutButton: {
      selector: '//*[@id="center_column"]/p[2]/a[1]',
      locateStrategy: 'xpath'
    },
    //	There is no step 2 checkout button, as this step is about signin in, 
    //	once this is done the flow jumps to step 3 automatically
    step3CheckoutButton: {
      selector: '//*[@id="center_column"]/form/p/button',
      locateStrategy: 'xpath'
    },
    step4CheckoutButton: {
      selector: '//*[@id="form"]/p/button',
      locateStrategy: 'xpath'
    },
    step5CheckoutButton: {
      selector: '//*[@id="cart_navigation"]/button',
      locateStrategy: 'xpath'
    },
    payByBankWire: {
      selector: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a',
      locateStrategy: 'xpath'
    },
    payByCheck: {
      selector: '//*[@id="HOOK_PAYMENT"]/div[2]/div/p/a',
      locateStrategy: 'xpath'
    },
    orderConfirmation: '#center_column > h1',
    orderComplete: '#center_column > div > p'

  },

  commands: [orderPageCommands]
}