import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class SummaryStepPage{
  private buttonProceedToCheckout: ElementFinder;

  constructor () {
    this.buttonProceedToCheckout = $(
      '#center_column> p.cart_navigation.clearfix> a.button.btn.btn-default');
  }
  public async goToSignIn() : Promise<void> {
    await this.waitToBeClickableButtonProceed();
    await this.buttonProceedToCheckout.click();
  }
  private async waitToBeClickableButtonProceed() : Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.buttonProceedToCheckout), 2000);
  }
}
