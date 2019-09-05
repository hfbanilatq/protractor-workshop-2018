import { element , by, ElementFinder, browser, ExpectedConditions } from 'protractor';

interface PersonalInformation{
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
}

export class PersonalInformationPage {
  private fieldFirstName: ElementFinder;
  private fieldLastName: ElementFinder;
  private selectContinent: ElementFinder;
  private multiSelectCommands: ElementFinder;
  private buttonSend: ElementFinder;
  private texPageTittle: ElementFinder;
  private buttonAcceptCookies: ElementFinder;

  constructor() {
    this.fieldFirstName = element(by.name('firstname'));
    this.fieldLastName = element(by.id('lastname'));
    this.selectContinent = element(by.id('continents'));
    this.multiSelectCommands = element(by.name('selenium_commands'));
    this.buttonSend = element(by.id('submit'));
    this.texPageTittle = element(by.id('content')).element(by.tagName('h1'));
    this.buttonAcceptCookies = element(by.id('cookie_action_close_header'));
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

  public async fillForm(form: PersonalInformation): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.buttonAcceptCookies), 3000);
    await this.buttonAcceptCookies.click();
    await this.fieldFirstName.sendKeys(form.firstName);
    await this.fieldLastName.sendKeys(form.lastName);
    await this.getElementSexOption(form.sex).click();
    await this.getElementExperienceOption(form.experience).click();

    for (const profession of form.profession) {
      await this.getElementProfessionOption(profession).click();
    }

    for (const tool of form.tools) {
      await this.getElementToolsOption(tool).click();
    }

    await this.getElementContinentOption(form.continent).click();

    for (const command of form.commands) {
      await this.getElementSeleniumCommandOption(command).click();
    }
  }

  public async submit() : Promise<void> {
    await this.buttonSend.click();
  }

  public async getPageTittle(): Promise<string> {
    return this.texPageTittle.getText();
  }
}
