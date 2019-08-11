import { $, ElementFinder } from 'protractor';

export class ShippingStepPage{
  private acceptTerms: ElementFinder;
  private buttonCheckout: ElementFinder;
  constructor() {
    this.acceptTerms = $('#cgv ');
    this.buttonCheckout = $('#form > p > button > span');
  }
  public async clickAcceptTerms() {
    await this.acceptTerms.click();
  }
  public async goToPaymentPage() {
    await this.buttonCheckout.click();
  }
}
