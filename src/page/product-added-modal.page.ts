import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckoutProductAdded: ElementFinder;

  constructor() {
    this.buttonCheckoutProductAdded = $('[style*="display: block;"] .button-container > a');
  }
  public async goToSumaryPage() : Promise<void> {
    await this.buttonCheckoutProductAdded.click();
  }
}
