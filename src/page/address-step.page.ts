import { $, ElementFinder } from 'protractor';

export class AddressStepPage{
  private buttonCheckout: ElementFinder;

  constructor() {
    this.buttonCheckout = $('#center_column > form > p > button > span');
  }
  public async goToShippingPage (): Promise<void> {
    await this.buttonCheckout.click();
  }
}
