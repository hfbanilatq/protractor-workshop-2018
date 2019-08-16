import { $, ElementFinder } from 'protractor';

export class PaymentStepPage{
  private bankWire: ElementFinder;

  constructor() {
    this.bankWire = $(
      '#center_column > div.paiement_block > #HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }
  public async goToBankPaymentPage(): Promise<void> {
    await this.bankWire.click();
  }
}
