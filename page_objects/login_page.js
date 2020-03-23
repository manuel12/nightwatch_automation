const {
  LOG_IN,
  STARTING_SIGN_UP
} = require('../data/logs');
const {
  getElements,
  typeData,
  submit
} = require('../utils/page-objects')

const loginPageCommands = {
  submit,
  typeData,
  getElements,

  login(user, pass) {
    return this
      .navigate()
      .typeData('@usernameForm', user)
      .typeData('@passwordForm', pass)
      .submit('@signInButton')
  },

  startSignUp(user) {
    return this
      .navigate()
      .typeData('@signUpEmailForm', user)
      .submit('@signUpButton')
  }
}


module.exports = {
  url: 'http://automationpractice.com/index.php?controller=authentication',
  elements: {
    pageHeading: '#center_column > h1',

    loginForm: '#login_form',
    usernameForm: '#email',
    passwordForm: '#passwd',
    signInButton: '#SubmitLogin',

    signUpEmailForm: '#email_create',
    signUpButton: '#SubmitCreate',

    invalidCredentials: '#center_column > div.alert.alert-danger',
  },
  commands: [loginPageCommands]
}