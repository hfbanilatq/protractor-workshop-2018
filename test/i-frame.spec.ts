import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Open page with Iframe ', async () => {
  const iFramePage = new IFramePage;
  const height = 350;

  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });

  describe('Changing the Iframe height', async () => {

    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(height);
    });

    it('Then the height should be changed', async () => {
      await expect(iFramePage.getFormFrameHeight()).toBe(`${height}`);
    });
  });
  afterAll(async () => {
    await browser.switchTo().defaultContent();
  });
});
