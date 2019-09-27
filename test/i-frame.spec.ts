import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Open page with Iframe ', async () => {
  const iFramePage = new IFramePage;
  const height = 350;

  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });

  it('then shoul be a tittle', async() => {
    await expect(iFramePage.getPageTitle()).toBe('Sample Iframe page');
  });
  describe('Changing the Iframe height', async () => {

    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(height);
    });

    it('Then the height should be changed', async () => {
      await expect(iFramePage.getFormFrameHeight()).toBe(`${height}`);
    });

    describe('Switching to frame', async () => {
      // const personalInformationPage = new PersonalInformationPage;
      beforeAll(async () => {
        await iFramePage.switchToFrame();
      });

      it('then should have other tittle', async () => {
        await expect(iFramePage.getPageTitle()).toBe('Automation Tools Tutorial');
      });
      describe('finally return to main page', async () => {

        beforeAll(async () => {
          await iFramePage.switchToMainPage();
        });

        it('then should have a tittle', async () => {
          await expect(iFramePage.getPageTitle()).toBe('Sample Iframe page');
        });
      });
    });
  });
});
