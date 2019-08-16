import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ShippingStepPage{
  private boxAcceptTerms: ElementFinder;
  private buttonCheckoutShippingStep: ElementFinder;

  constructor() {
    this.boxAcceptTerms = $('#cgv ');
    this.buttonCheckoutShippingStep = $('#form > p > button > span');
  }
  public async clickAcceptTerms() : Promise<void> {
    await browser.wait(this.isToBeSelectedBoxAcceptTerms(), 2000);
    await this.boxAcceptTerms.click();
  }
  public async goToPaymentPage() :Promise<void> {
    await this.buttonCheckoutShippingStep.click();
  }
  private async isToBeSelectedBoxAcceptTerms() : Promise<Function> {
    return await ExpectedConditions.elementToBeSelected(this.boxAcceptTerms);
  }
}
