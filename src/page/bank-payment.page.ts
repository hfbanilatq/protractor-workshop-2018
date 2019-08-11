import { $, ElementFinder } from 'protractor';

export class BankPaymentPage{
  private buttonComfirmOrder: ElementFinder;

  constructor() {
    this.buttonComfirmOrder = $('#cart_navigation > button > span');
  }
  public async comfirmOrder(): Promise<void> {
    await this.buttonComfirmOrder.click();
  }
}
