import { $, ElementFinder } from 'protractor';

export class SummaryStepPage{
  private buttonProceedToCheckout: ElementFinder;

  constructor () {
    this.buttonProceedToCheckout = $('.cart_navigation span');
  }
  public async goToSignIn() : Promise<void> {
    await this.buttonProceedToCheckout.click();
  }
}
