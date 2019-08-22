import { ElementFinder, browser, ExpectedConditions, element, by } from 'protractor';

export class SummaryStepPage{
  private buttonProceedToCheckout: ElementFinder;

  constructor () {
    this.buttonProceedToCheckout = element(by.css('.cart_navigation .button'));
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
