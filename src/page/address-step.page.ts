import { $, ElementFinder } from 'protractor';
export class AddressStepPage{
  private buttonCheckout: ElementFinder;
  constructor() {
    this.buttonCheckout = $('#center_column > form > p > button > span');
  }
  public async goToshippingPage () {
    await this.buttonCheckout.click();
  }
}
