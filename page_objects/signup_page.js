const {
  COMPLETING_SIGN_UP,
  SELECTING_USER_DATA
} = require('../data/logs');
const {
  clickOnElement,
  typeData,
  submit
} = require('../utils/page-objects');

const signUpPageCommands = {
  clickOnElement,
  typeData,
  submit,
  selectFromDropdown(selector, value) {
    return this
      .useXpath()
      .waitForElementPresent(`//*[@id="uniform-${selector}"]`, 
        `${SELECTING_USER_DATA} with [//*[@id="uniform-${selector}"]] with value [${value}]`)
      .click(`//*[@id="uniform-${selector}"]`, () => {
        this
        .click(`//*[@id="${selector}"]/option[${value}]`)
      });
      
  },
  completeSignUp(data) {
    return this
      .clickOnElement('@genderForm')
      .typeData('@firstNameForm', data.RNDM_FIRST_NAME)
      .typeData('@lastNameForm', data.RNDM_LAST_NAME)
      .typeData('@passwordForm', data.RNDM_PASSWORD)

      .selectFromDropdown('days', data.DAY_OF_BIRTH)
      .selectFromDropdown('months', data.MONTH_OF_BIRTH)
      .selectFromDropdown('years', data.YEAR_OF_BIRTH)

      .typeData('@addressFirstName', data.RNDM_FIRST_NAME)
      .typeData('@addressLastName', data.RNDM_LAST_NAME)
      .typeData('@addressForm', data.RNDM_ADDRESS)

      .typeData('@cityForm', data.RNDM_CITY)
      .typeData('@zipcodeForm', data.RNDM_ZIPCODE)
      .selectFromDropdown('id_country', data.COUNTRY)
      .selectFromDropdown('id_state', data.RNDM_STATE)
      .typeData('@phoneForm', data.RNDM_PHONE_NUMBER)
      .typeData('@aliasAddressForm', data.RNDM_ADDRESS)

      .submit('@registerButton')
  }

};

module.exports = {
  url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
  elements: {
    genderForm: '#id_gender1',
    firstNameForm: '#customer_firstname',
    lastNameForm: '#customer_lastname',

    emailForm: '#email',
    passwordForm: '#passwd',

    dayOfBirthForm: '#days',
    monthOfBirthForm: '#months',
    yearOfBirthForm: '#years',

    addressFirstName: '#firstname',
    addressLastName: '#lastname',
    addressForm: '#address1',

    cityForm: '#city',
    stateDropdown: '#id_state',
    zipcodeForm: '#postcode',
    countryDropdown: '#id_country',

    phoneForm: '#phone_mobile',
    aliasAddressForm: '#alias',
    registerButton: '#submitAccount'
  },

  commands: [signUpPageCommands]
}