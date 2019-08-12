import { browser } from 'protractor';

describe('Given a SDET learning protracor', () => {
  describe('When open Google page', () => {
    it('then should have a title', async () => {
      await browser.get('http://www.google.com');
      await expect(browser.getTitle()).toEqual('Google');
    });
  });
});
