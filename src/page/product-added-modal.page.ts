import { $, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;

  constructor() {
    this.buttonCheckoutProductAdded = $('[style*="display: block;"] .button-container > a');
  }
  public async goToSummaryPage() : Promise<void> {
    await this.buttonCheckoutProductAdded.click();
  }
  public isClickableButtonCheckout() : Function {
    return ExpectedConditions.elementToBeClickable(this.buttonCheckoutProductAdded);
  }
}
