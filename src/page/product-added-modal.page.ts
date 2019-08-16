import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;

  constructor() {
    this.buttonCheckoutProductAdded = $('[style*="display: block;"] .button-container > a');
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
