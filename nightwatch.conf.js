require('dotenv').config();
const chromedriver = require('chromedriver');
const selenium = require('selenium-server');

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page_objects'],
  globals_path: 'globals.js',
  custom_commands_path: 'commands',
  output_folder: 'reports',
  
  selenium: {
    start_process: true,
    server_path: selenium.path,
    port: 4444,
    check_process_delay: 5000,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      skip_testcases_on_fail: true
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          prefs: { 'profile.managed_default_content_settings.notifications': 1 }
        }
      }
    },
    
    chromeHeadless: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          prefs: { 'profile.managed_default_content_settings.notifications': 1 },
          args: ['headless', 'no-sandbox', 'disable-gpu']
        }
      }
    }
  }
}