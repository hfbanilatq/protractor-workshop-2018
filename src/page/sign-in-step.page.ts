import { $, ElementFinder } from 'protractor';

export class SingInPage{
  private email: ElementFinder;
  private passwd: ElementFinder;
  private buttonSingin: ElementFinder;
  constructor() {
    this.email = $('#email');
    this.passwd = $('#passwd');
    this.buttonSingin = $('#SubmitLogin > span');
  }
  public async writeEmail() {
    await this.email.sendKeys('aperdomobo@gmail.com');
  }
  public async writePassword() {
    await this.passwd.sendKeys('WorkshopProtractor');
  }
  public async goToAddressPage() {
    await this.buttonSingin.click();
  }
}
