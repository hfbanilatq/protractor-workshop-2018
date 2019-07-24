import { browser } from 'protractor';

describe('Given a SDET learning protracor', () => {
  describe('When open Google page', () => {
    beforeEach(() => {
      browser.get('http://www.google.com');
    });
    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Google');
    });
  });
});