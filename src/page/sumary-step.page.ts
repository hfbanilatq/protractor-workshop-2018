import { $, ElementFinder } from 'protractor';

export class SumaryStepPage{
  private proceeedToCheckout: ElementFinder;
  constructor () {
    this.proceeedToCheckout = $('.cart_navigation span');
  }
  public async goToSingIn() {
    await this.proceeedToCheckout.click();
  }
}
