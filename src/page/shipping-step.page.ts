import { $, ElementFinder } from 'protractor';

export class ShippingStepPage{
  private boxAcceptTerms: ElementFinder;
  private buttonCheckoutShippingStep: ElementFinder;
  constructor() {
    this.boxAcceptTerms = $('#cgv ');
    this.buttonCheckoutShippingStep = $('#form > p > button > span');
  }
  public async clickAcceptTerms() {
    await this.boxAcceptTerms.click();
  }
  public async goToPaymentPage() {
    await this.buttonCheckoutShippingStep.click();
  }
}
