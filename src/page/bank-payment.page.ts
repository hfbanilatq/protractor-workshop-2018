import { $, ElementFinder } from 'protractor';

export class BankPaymentPage{
  private buttonConfirmOrder: ElementFinder;

  constructor() {
    this.buttonConfirmOrder = $('#cart_navigation > button > span');
  }
  public async comfirmOrder(): Promise<void> {
    await this.buttonConfirmOrder.click();
  }
}
