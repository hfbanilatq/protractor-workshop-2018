import { $, ElementFinder } from 'protractor';

export class SignInPage{
  private fieldEmail: ElementFinder;
  private fieldPasswd: ElementFinder;
  private buttonSubmit: ElementFinder;

  constructor() {
    this.fieldEmail = $(
      '#center_column > div > div:nth-child(2) > #login_form > div >div:nth-child(1)> #email');
    this.fieldPasswd = $(
      '#center_column > div > div:nth-child(2) > #login_form > div > div:nth-child(2)> span>#passwd'
      );
    this.buttonSubmit = $(
      '#center_column > div > div:nth-child(2) > #login_form >div > p.submit > #SubmitLogin');
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
