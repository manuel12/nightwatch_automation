const { timestamp } = require(__dirname + '/utils/utils');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

module.exports = {
  abortOnAssertionFailure: false,
  waitForConditionPollInterval : 1000,
  waitForConditionTimeout: 3000,

  reporter: (results, done) => {
    const options = {
      filename_prefix: 'smoke_test_report_',
      output_folder: 'reports',
      browser: 'chrome'
    }

    var reportFilename = options.filename_prefix + timestamp('-') + '.html';
    var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);

    fs.readFile('html-reporter.hbs', (err, data) => {
      if (err) throw err;

      var template = data.toString();
      var html = handlebars.compile(template)({
        results   : results,
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.browser
      });

      fs.writeFile(reportFilePath, html, (err) => {
        if (err) { 
          console.log(err);
          throw err;
        }
        console.log('Report generated: ' + reportFilePath);
        done();
      }); 
    });
  },

  beforeEach: (browser, done) => {
    browser.maximizeWindow();
    done();
  },

  afterEach: (browser, done) => {
    browser.end();
    done();
  }
}