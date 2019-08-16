import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class AddressStepPage{
  private buttonCheckout: ElementFinder;

  constructor() {
    this.buttonCheckout = $('#center_column > form > p > button > span');
  }
  public async goToShippingPage (): Promise<void> {
    await this.waitToClickableButtonCheckout();
    await this.buttonCheckout.click();
  }

  private async waitToClickableButtonCheckout() : Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.buttonCheckout), 3000);
  }
}
