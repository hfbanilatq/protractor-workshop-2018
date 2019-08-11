import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;
  constructor() {
    this.buttonCheckoutProductAdded = $('[style*="display: block;"] .button-container > a');
  }
  public async goToSumaryPage() {
    await this.buttonCheckoutProductAdded.click();
  }
}
