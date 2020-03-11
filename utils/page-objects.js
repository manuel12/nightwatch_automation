const {
  CLICKING,
  GETTING_ELEMENTS,
  TYPING_USER_DATA,
  SUBMITTING_USER_DATA,
} = require('../data/logs');

function getElements() {
  this.logAction(GETTING_ELEMENTS)
  return Object.keys(this.elements);
}

function clickOnElement(selector) {
  return this
    .waitForElementPresent(selector, `${CLICKING} on selector [${selector}]`)
    .click(selector)
}

function typeData(selector, value) {
  return this
    .waitForElementPresent(selector, `${TYPING_USER_DATA} with [${value}] on selector [${selector}]`)
    .clearValue(selector)
    .setValue(selector, value)
}

function submit(selector) {
  return this
    .waitForElementPresent(selector, `${SUBMITTING_USER_DATA} on selector [${selector}]`)
    .click(selector)
}


module.exports = {
  getElements,
  clickOnElement,
  typeData,
  submit
}