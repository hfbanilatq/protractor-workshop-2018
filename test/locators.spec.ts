import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Open page to practice automation', async () => {

  const personalInformationPage = new PersonalInformationPage;
  const urlFormFilled = 'https://www.toolsqa.com/automation-practice-form/?firstname=Alejandro&sex=Male&exp=7&profession=Automation+Tester&photo=&tool=Selenium+Webdriver&continents=SA&selenium_commands=Browser+Commands&selenium_commands=Navigation+Commands&selenium_commands=Switch+Commands&selenium_commands=Wait+Commands&selenium_commands=WebElement+Commands&submit=';

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
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });

      await personalInformationPage.submit();
    });

    it('Then the form should be filled', async () => {
      await expect(browser.getCurrentUrl()).toBe(urlFormFilled);
      await expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
