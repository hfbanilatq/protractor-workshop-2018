import { ElementFinder, ExpectedConditions, browser, by, element } from 'protractor';

export class AddressStepPage{
  private buttonCheckout: ElementFinder;

  constructor() {
    this.buttonCheckout = element(
         by.cssContainingText('button', 'Proceed to checkout')
      );
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
