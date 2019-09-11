import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Open page to practice automation', async () => {

  const personalInformationPage = new PersonalInformationPage;

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('Filling out the form', async () => {
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        file: './resources/fotoTest.jpg',
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('Then the form should be filled', async () => {
      await expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

    it('Then the file should be loaded', async () => {
      await expect(personalInformationPage.getFileName()).toBe('fotoTest.jpg');
    });
  });
});
