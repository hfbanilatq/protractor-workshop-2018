import { $, ElementFinder } from 'protractor';

export class BankPaymentPage{
  private buttonComfirnOrder: ElementFinder;
  constructor() {
    this.buttonComfirnOrder = $('#cart_navigation > button > span');
  }
  public async comfirmOrder() {
    await this.buttonComfirnOrder.click();
  }
}
