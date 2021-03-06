const {
  getElements,
  clickOnElement
} = require('../utils/page-objects');

personalInfoPageCommands = {
  getElements,
  clickOnElement
}

module.exports = {
  url: 'http://automationpractice.com/index.php?controller=identity',
  elements: {
    socialTitle: '#id_gender1',
    firstName: '#firstname',
    lastName: '#lastname',
    email: '#email',
    dayOfBirth: '#uniform-days',
    monthOfBirth: '#uniform-months',
    yearOfBirth: '#uniform-years'
  },
  commands: [personalInfoPageCommands]
}