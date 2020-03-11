const faker = require('faker');
const {
  generateNumberBetween
} = require('../utils/utils');

module.exports = {
  existingData: {
    USERNAME: 'test_user123@gmail.com',
    PASSWORD: 'automation',

    FIRST_NAME: 'Manuel',
    LAST_NAME: 'Pineda',
    DAY_OF_BIRTH: '17',
    MONTH_OF_BIRTH: 'December',
    YEAR_OF_BIRTH: '1990'
  },

  signUpData: {
    RNDM_USERNAME: faker.internet.email(),
    RNDM_PASSWORD: faker.internet.password(),

    RNDM_FIRST_NAME: faker.name.firstName(),
    RNDM_LAST_NAME: faker.name.lastName(),
    RNDM_ADDRESS: faker.address.streetAddress(),

    DAY_OF_BIRTH: generateNumberBetween(1, 31),
    MONTH_OF_BIRTH: generateNumberBetween(1, 12),
    YEAR_OF_BIRTH: generateNumberBetween(3, 30), // According to dropdown values, 
                                                // not years  

    RNDM_CITY: faker.address.city(),
    RNDM_STATE: generateNumberBetween(1, 50), //One of the 50 states
    RNDM_ZIPCODE: '00000',
    COUNTRY: 2, //Only USA(2) possible

    RNDM_PHONE_NUMBER: '000-0000-000'
  }
}