import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';
import { awesomeReporter } from './helpers/awesome-reporter';
export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    awesomeReporter();
    browser.manage().timeouts().implicitlyWait(0);
  },
  getPageTimeout: 3000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 70000
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  }
};
