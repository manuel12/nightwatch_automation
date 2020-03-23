const { SIGNIN_OUT } = require('../data/logs');
const {
  clickOnElement,
  getElements
} = require('../utils/page-objects');

const accountPageCommands = {
  clickOnElement,
  getElements,
  signOut() {
    return this
      .clickOnElement('@signOutButton');
  }
}

module.exports = {
  url: 'http://automationpractice.com/index.php?controller=my-account',
  elements: {
    pageHeading: '#center_column > h1',
    signUpHeading: '#center_column > p',
    orderHistoryAndDetails: '#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a',
    myCreditSlips: '#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a',
    myAddresses: '#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a',
    myPersonalInformation: '#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a',
    myWishLists: '#center_column > div > div:nth-child(2) > ul > li > a',
    signOutButton: '#header > div.nav > div > div > nav > div:nth-child(2)'
  },

  commands: [accountPageCommands]
}