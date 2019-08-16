import { $, ElementFinder } from 'protractor';

export class BankPaymentPage{
  private buttonConfirmOrder: ElementFinder;

  constructor() {
    this.buttonConfirmOrder = $('#center_column > form > #cart_navigation > button > span');
  }
  public async comfirmOrder(): Promise<void> {
    await this.buttonConfirmOrder.click();
  }
}
