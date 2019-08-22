import { ElementFinder, ExpectedConditions, browser, element, by } from 'protractor';

export class ProductListPage{
  private buttonAddToCart: ElementFinder;

  constructor() {
    this.buttonAddToCart = element(by.css('[title="Add to cart"'));
  }
  public async goToProductAddeModal() : Promise<void> {
    await this.waitToBeClickableButtonAddToCart();
    await this.buttonAddToCart.click();
  }

  public async waitToBeClickableButtonAddToCart() : Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.buttonAddToCart), 3000);
  }
}
