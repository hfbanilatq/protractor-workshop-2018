import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage{
  private buttonCheckout: ElementFinder;
  constructor() {
    this.buttonCheckout = $('[style*="display: block;"] .button-container > a');
  }
  public async goToSumaryPage() {
    await this.buttonCheckout.click();
  }
}
