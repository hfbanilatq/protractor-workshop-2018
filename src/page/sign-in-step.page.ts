import { $, ElementFinder } from 'protractor';

export class SignInPage{
  private fieldEmail: ElementFinder;
  private fieldPasswd: ElementFinder;
  private buttonSubmit: ElementFinder;

  constructor() {
    this.fieldEmail = $('#email');
    this.fieldPasswd = $('#passwd');
    this.buttonSubmit = $('#SubmitLogin > span');
  }
  public async writeEmail() :Promise<void> {
    await this.fieldEmail.sendKeys('aperdomobo@gmail.com');
  }
  public async writePassword(): Promise<void> {
    await this.fieldPasswd.sendKeys('WorkshopProtractor');
  }
  public async submit() : Promise<void> {
    await this.buttonSubmit.click();
  }
}
