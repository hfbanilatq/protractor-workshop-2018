import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage{
  private buttonAddToCart: ElementFinder;

  constructor() {
    this.buttonAddToCart = $(
      '#center_column > ul > li > div > .right-block > ' +
      '.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'
      );
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
