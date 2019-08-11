import { $, ElementFinder } from 'protractor';

export class SingInPage{
  private fieldEmail: ElementFinder;
  private fieldPasswd: ElementFinder;
  private buttonSubmit: ElementFinder;
  constructor() {
    this.fieldEmail = $('#email');
    this.fieldPasswd = $('#passwd');
    this.buttonSubmit = $('#SubmitLogin > span');
  }
  public async writeEmail() {
    await this.fieldEmail.sendKeys('aperdomobo@gmail.com');
  }
  public async writePassword() {
    await this.fieldPasswd.sendKeys('WorkshopProtractor');
  }
  public async submit() {
    await this.buttonSubmit.click();
  }
}
