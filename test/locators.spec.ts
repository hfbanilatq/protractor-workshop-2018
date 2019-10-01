import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/sercive';

describe('Open page to practice automation', async () => {

  const personalInformationPage = new PersonalInformationPage;
  const urlFormFilled = 'https://www.toolsqa.com/automation-practice-form/?firstname=Alejandro&sex=Male&exp=7&profession=Automation+Tester&photo=fotoTest.jpg&tool=Selenium+Webdriver&continents=SA&selenium_commands=Browser+Commands&selenium_commands=Navigation+Commands&selenium_commands=Switch+Commands&selenium_commands=Wait+Commands&selenium_commands=WebElement+Commands&submit=';

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('Filling out the form', async () => {

    beforeAll(async () => {
      await personalInformationPage.submit({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        file: './resources/fotoTest.jpg',
        downloadFile: true,
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
      await expect(browser.getCurrentUrl()).toBe(urlFormFilled);
      await expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

    it('Then the file should be loaded', async () => {
      await expect(personalInformationPage.getFileName()).toBe('fotoTest.jpg');
    });

    it('The should be created a file in temp folder', () => {
      const service = new DownloadService();
      const file = service.readFileFromTtemp('Test-File-to-Download.xlsx');

      expect(file.length).toEqual(8764);
    });
  });
});
