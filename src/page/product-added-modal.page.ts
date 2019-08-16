import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;

  constructor() {
    this.buttonCheckoutProductAdded = $(
      '#layer_cart >.clearfix > .layer_cart_cart.col-xs-12.col-md-6 > .button-container > a');
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
