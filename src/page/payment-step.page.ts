import { $, ElementFinder } from 'protractor';

export class PaymentStepPage{
  private bankWire: ElementFinder;
  constructor() {
    this.bankWire = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }
  public async goToBankPaymentPage() {
    await this.bankWire.click();
  }
}
