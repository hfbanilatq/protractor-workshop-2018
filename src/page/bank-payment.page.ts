import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage{
  private buttonConfirmOrder: ElementFinder;

  constructor() {
    this.buttonConfirmOrder = element(by.cssContainingText('button', 'I confirm my order'));
  }
  public async comfirmOrder(): Promise<void> {
    await this.buttonConfirmOrder.click();
  }
}
