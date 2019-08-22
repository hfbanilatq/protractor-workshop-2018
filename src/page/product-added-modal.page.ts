import {  ElementFinder, ExpectedConditions, browser, element, by } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;

  constructor() {
    this.buttonCheckoutProductAdded = element(by.cssContainingText('span', 'Proceed to checkout'));
  }
  public async goToSummaryPage() : Promise<void> {
    await this.waitToBeClickableButtonCheckout();
    await this.buttonCheckoutProductAdded.click();
  }
  private async waitToBeClickableButtonCheckout() :Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.buttonCheckoutProductAdded), 3000);
  }
}
