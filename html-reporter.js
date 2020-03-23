const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const Email = require('./utils/email');
const { formatResults } = require('./utils/utils');

module.exports = {
  write : function(results, options, done) {
    const REPORT_FILE_NAME = options.filename_prefix + (Math.floor(Date.now() / 1000)) + '.html';
    const REPORT_FILE_PATH = path.join(__dirname, options.output_folder, REPORT_FILE_NAME);

    fs.readFile('html-reporter.hbs', function(err, data) {
      if (err) throw err;

      const TEMPLATE = data.toString();
      const html = handlebars.compile(TEMPLATE)({
        results   : formatResults(results),
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.filename_prefix.split('_').join(' ')
      });

      if(process.env.USE_EMAIL==1) 
        Email.sendEmail(html);
      
      fs.writeFile(REPORT_FILE_PATH, html, function(err) {
        if (err) throw err;
        console.log('Report generated: ' + REPORT_FILE_PATH);
        done();
      });        
      
    });
  }
};

