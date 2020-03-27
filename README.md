# Test Automation Project

### Automated smoke tests ran over an e-commerce website
The website in question is: http://automationpractice.com/index.php. This website is a mock e-commerce shop where users can run automated tests.

__The Smoke Tests consist of 8 test cases:__

1. Check that main page is shown
2. Check that catalogue is shown
3. Check that addding an item to cart is possible
4. Check that user can complete checkout
5. Check that new user can signup
6. Check that existing user can log in
7. Check that existing user can logout
8. Check that user account data is correct

### Prerequisites

You must have node.js and git bash installed in your system.

### Installing

In order to install the repository just run:

`git clone https://github.com/manuel12/nightwatch_automation.git` - go to the repo folder, 
then run `npm install`

### The tests 

The smoke tests are located inside the _tests/smokes_tests_ folder.

In here the tests are created by instanciating the the Page Objects, located inside the _page_objects_ folder and using the functionalty provided by them for user intereactions. Then the browser object is used to make assertions of the page to test.

### Running the tests

In order to run the tests just run the following command `npm run test:chrome`

The tests can run on the chrome browser, and can be ran either on normal or headless mode, in case you want to run them
on headless mode just run `npm run test:headless:chrome`.

### Reports

After the tests run an HTML report will be generated inside the _reports_ folder.

An email report can also be sent.

__Note:__ To be able to send email an .env file should be located on root folder with the following credentials: `GMAIL_USER`, `GMAIL_PASSWORD` and `GMAIL_TARGET`. If no `GMAIL_TARGET`is specified on .env file the code will default the receiver to `GMAIL_USER`.

### Sandbox

Finally a sandbox environment is created inside _tests/sandbox_. Here new testcases can be created and launched individually before they are added to a test suite. In order to run the sanbdox tests just run `npm run test:sandbox`.

## Built With

[Nightwatch.js](https://nightwatchjs.org/) - The End-to-end testing framework used.

## Authors

Manuel Pineda





