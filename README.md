# nightwatch_automation

### Smoke Tets Automation ran over an e-commerce website
The website in question is: http://automationpractice.com/index.php

This website is a mock e-commerce shop where users can run automated tests.


_These tests cover basic funcitonality that should be working in order 
to proceed with more tests, or in case any test fail, report any errors for fixing  ._

__The Smoke Tests consist of 8 test cases:__

1. Check that main page is shown
2. Check that catalogue is shown
3. Check that addding an item to cart is possible
4. Check that user can complete checkout
5. Check that new user can signup
6. Check that existing user can log in
7. Check that existing user can logout
8. Check that user account data is correct

In order to run the smoke test just clone the repository, run `npm install` 
and then run `npm test` 

The tests will run on the chrome browser and can be ran either on normal or headless mode, in case you want to run them
on headless mode just uncomment `args : ['headless'],` property of chromeOptions on nightwatch.conf.js  


After the test run an HTML report will be generated on the reports folder.

**Note:** remember you will need credentials of an existing user on the automationpractice.com website in order to ran 
login related tests, and require them on data/test-data.js. I recommed to add these credentials in a .env file. 

