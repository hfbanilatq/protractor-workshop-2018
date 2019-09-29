import { element , by, ElementFinder, browser, ExpectedConditions } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';

interface PersonalInformation{
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
  file?: string;
}

export class PersonalInformationPage {
  private fieldFirstName: ElementFinder;
  private fieldLastName: ElementFinder;
  private selectContinent: ElementFinder;
  private multiSelectCommands: ElementFinder;
  private buttonSend: ElementFinder;
  private texPageTitle: ElementFinder;
  private buttonAcceptCookies: ElementFinder;
  private fileInputUploadFile: ElementFinder;

  constructor() {
    this.fieldFirstName = element(by.name('firstname'));
    this.fieldLastName = element(by.id('lastname'));
    this.selectContinent = element(by.id('continents'));
    this.multiSelectCommands = element(by.name('selenium_commands'));
    this.buttonSend = element(by.id('submit'));
    this.texPageTitle = element(by.id('content')).element(by.tagName('h1'));
    this.buttonAcceptCookies = element(by.id('cookie_action_close_header'));
    this.fileInputUploadFile = element(by.id('photo'));
  }

  private getElementSexOption(option: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${option}"]`));
  }

  private getElementExperienceOption (yearExperience: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${yearExperience}"]`));
  }

  private getElementProfessionOption(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private getElementToolsOption(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }

  private getElementContinentOption(name: string): ElementFinder {
    return this.selectContinent.element(by.cssContainingText('option', name));
  }

  private getElementSeleniumCommandOption(command: string) : ElementFinder {
    return this.multiSelectCommands.element(by.cssContainingText('option', command));
  }

  private async uploadFile(relativePath: string) : Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      browser.setFileDetector(new remote.FileDetector());

      await this.fileInputUploadFile.sendKeys(fullPath);

      browser.setFileDetector(undefined);
    }
  }

  public async getFileName() : Promise<string> {
    const fullUrl: string = await browser.getCurrentUrl();

    return fullUrl.match(/fotoTest\.jpg/g).pop();
  }

  private async fillForm(form: PersonalInformation): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.buttonAcceptCookies), 3000);
    await this.buttonAcceptCookies.click();
    await this.fieldFirstName.sendKeys(form.firstName);
    await this.fieldLastName.sendKeys(form.lastName);
    await this.getElementSexOption(form.sex).click();
    await this.getElementExperienceOption(form.experience).click();

    for (const profession of form.profession) {
      await this.getElementProfessionOption(profession).click();
    }

    if (form.file) {
      await this.uploadFile(form.file);
    }

    for (const tool of form.tools) {
      await this.getElementToolsOption(tool).click();
    }

    await this.getElementContinentOption(form.continent).click();

    for (const command of form.commands) {
      await this.getElementSeleniumCommandOption(command).click();
    }
  }

  public async submit(form: PersonalInformation) : Promise<void> {
    await this.fillForm(form);
    await this.buttonSend.click();
  }

  public async getPageTitle(): Promise<string> {
    return this.texPageTitle.getText();
  }
}
