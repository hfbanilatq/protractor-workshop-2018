import { ElementFinder, element, by } from 'protractor';

export class PaymentStepPage{
  private bankWire: ElementFinder;

  constructor() {
    this.bankWire = element(by.css('.payment_module > .bankwire'));
  }
  public async goToBankPaymentPage(): Promise<void> {
    await this.bankWire.click();
  }
}
