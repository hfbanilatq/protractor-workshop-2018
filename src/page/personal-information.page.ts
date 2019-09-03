import { element , by, ElementFinder, ElementArrayFinder } from 'protractor';
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
  private radioSex: ElementArrayFinder;
  private radioExperience: ElementArrayFinder;
  private checkBoxProfession: ElementArrayFinder;
  private checkBoxTools: ElementArrayFinder;
  private selectContinent: ElementFinder;
  private multiSelectCommands: ElementFinder;
  private buttonSend: ElementFinder;
  private texPageTittle: ElementFinder;
  private buttonAcceptCookies: ElementFinder;

  constructor() {
    this.fieldFirstName = element(by.name('firstname'));
    this.fieldLastName = element(by.id('lastname'));
    this.radioSex = element.all(by.name('sex'));
    this.radioExperience = element.all(by.name('exp'));
    this.checkBoxProfession = element.all(by.name('profession'));
    this.checkBoxTools = element.all(by.name('tool'));
    this.selectContinent = element(by.id('continents'));
    this.multiSelectCommands = element(by.name('selenium_commands'));
    this.buttonSend = element(by.id('submit'));
    this.texPageTittle = element(by.id('content'));
    this.buttonAcceptCookies = element(by.id('cookie_action_close_header'));
  }
  private sexOption(sex: string): ElementFinder {
    return this.radioSex
      .filter((item: ElementFinder) =>
        item.getAttribute('value')
          .then((value: string) => value.includes(sex)))
      .first();
  }
  private experienceOption (yearExperience: number): ElementFinder {
    return this.radioExperience
      .filter((item: ElementFinder) =>
        item.getAttribute('value')
          .then((value: string) => value.includes(yearExperience.toString())))
      .first();
  }
  private professionOption(profession: string): ElementFinder {
    return this.checkBoxProfession.
      filter((item: ElementFinder) =>
        item.getAttribute('value')
          .then((value: string) => value.includes(profession)))
      .first();
  }
  private toolsOption(tools: string): ElementFinder {
    return this.checkBoxTools
      .filter((item: ElementFinder) =>
        item.getAttribute('value')
          .then((value: string) => value.includes(tools)))
      .first();
  }
  private continentSelectOption(name: string): ElementFinder {
    return this.selectContinent.element(by.cssContainingText('option', name));
  }
  private seleniumCommandSelectOption(command: string) : ElementFinder {
    return this.multiSelectCommands.element(by.cssContainingText('option', command));
  }
  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.buttonAcceptCookies.click();
    await this.fieldFirstName.sendKeys(form.firstName);
    await this.fieldLastName.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.experienceOption(form.experience).click();

    for (const profession of form.profession) {
      await this.professionOption(profession).click();
    }
    for (const tool of form.tools) {
      await this.toolsOption(tool).click();
    }

    await this.continentSelectOption(form.continent).click();

    for (const command of form.commands) {
      await this.seleniumCommandSelectOption(command).click();
    }
  }
  public async submit() : Promise<void> {
    await this.buttonSend.click();
  }
  public async getPageTitle(): Promise<string> {
    return this.texPageTittle.element(by.tagName('h1')).getText();
  }
}
