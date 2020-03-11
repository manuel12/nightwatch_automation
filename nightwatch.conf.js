const chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page_objects'],
  globals_path: 'globals.js',
  custom_commands_path: 'commands', 
  output_folder: 'reports',

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    cli_args: [
      '--log', 'debug'
    ],
    port: 9515
  },

  test_settings: {
    default: {
      end_session_on_fail: false,
      skip_testcases_on_fail: false,
      
      desiredCapabilities: {
        browserName: 'chrome',
        version: 'latest-1',
        chromeOptions: {
          //args : ['headless'],
          w3c: false
        }
      }
    }
  }
}