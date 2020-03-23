const {
  getElements
} = require('../utils/page-objects');
const {
  generateNumberBetween
} = require('../utils/utils');
const { 
  CHOOSING_RANDOM_PRODUCT,
  ADDING_PRODUCT_TO_CART 
} = require('../data/logs');

const homePageCommands = {
  getElements,
  addToCart() {
    const PRODUCT_NUMBER = generateNumberBetween(1, 7);
    const PRODUCT_TO_SELECT = `@product${PRODUCT_NUMBER}`;
    const ADD_TO_CART_BUTTON_SELECTOR = 
    `//*[@id="homefeatured"]/li[${PRODUCT_NUMBER}]/div/div[2]/div[2]/a[1]`;

    return this
      .waitForElementPresent(PRODUCT_TO_SELECT, CHOOSING_RANDOM_PRODUCT)
      .moveToElement(PRODUCT_TO_SELECT, 10, 10)
      .useXpath()
      .waitForElementPresent(ADD_TO_CART_BUTTON_SELECTOR, 
        `${ADDING_PRODUCT_TO_CART} with number [${PRODUCT_NUMBER}]`)
      .click(ADD_TO_CART_BUTTON_SELECTOR)
  }
};

module.exports = {
  url: 'http://automationpractice.com/index.php',
  elements: {
    main: '#index',
    logo: '#header_logo',
    catalogue: '#columns',
    product1: {
      selector: '//*[@id="homefeatured"]/li[1]/div',
      locateStrategy: 'xpath'
    },
    product2: {
      selector: '//*[@id="homefeatured"]/li[2]/div',
      locateStrategy: 'xpath'
    },
    product3: {
      selector: '//*[@id="homefeatured"]/li[3]/div',
      locateStrategy: 'xpath'
    },
    product4: {
      selector: '//*[@id="homefeatured"]/li[4]/div',
      locateStrategy: 'xpath'
    },
    product5: {
      selector: '//*[@id="homefeatured"]/li[5]/div',
      locateStrategy: 'xpath'
    },
    product6: {
      selector: '//*[@id="homefeatured"]/li[6]/div',
      locateStrategy: 'xpath'
    },
    product7: {
      selector: '//*[@id="homefeatured"]/li[7]/div',
      locateStrategy: 'xpath'
    },
    shoppingCartLink: '#header > div:nth-child(3) > div > div > div:nth-child(3) > div',
    cartLayer: '#layer_cart',
    productSuccessFullyAdded: '#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2',
    closeCartLayerButton: {
      selector: '//*[@id="layer_cart"]/div[1]/div[1]/span',
      locateStrategy: 'xpath'
    }
  },
  commands: [homePageCommands]
}