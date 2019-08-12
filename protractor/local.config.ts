import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';
export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  getPageTimeout: 3000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 12000
  }
};
