import { $, ElementFinder } from 'protractor';

export class SumaryStepPage{
  private buttonProceedToCheckout: ElementFinder;
  constructor () {
    this.buttonProceedToCheckout = $('.cart_navigation span');
  }
  public async goToSingIn() {
    await this.buttonProceedToCheckout.click();
  }
}