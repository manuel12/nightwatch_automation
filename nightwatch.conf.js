const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const selenium = require('selenium-server');

const SANDBOX_MODE = true;
const USE_GECKO = true;
const FF_BINARY_PATH = 'C:/Program Files/Mozilla Firefox/firefox.exe';

module.exports = {
  src_folders: [SANDBOX_MODE ? 'tests/sandbox/' : 'tests/smoke_tests/'],
  page_objects_path: ['page_objects'],
  globals_path: 'globals.js',
  custom_commands_path: 'commands',
  output_folder: 'reports',
  
  webdriver: {
    start_process: false,
    port: USE_GECKO ? 4444 : 9515,
    server_path: USE_GECKO ? geckodriver.path : chromedriver.path,
    cli_args: [
      "--log", "debug"
    ]
  },

  selenium: {
    start_process: true,
    server_path: selenium.path,
    port: 4444,
    check_process_delay: 5000,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path,
    }
  },
  
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
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
    },
    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        'moz:firefoxOptions': {
          binary: FF_BINARY_PATH
        }
      }
    },
    
    firefoxHeadless: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        'moz:firefoxOptions': {
          binary: FF_BINARY_PATH,
          args: ['--headless']
        }
      }
    }
  }
}