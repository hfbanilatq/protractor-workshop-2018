import { $, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductListPage{
  private buttonAddToCart: ElementFinder;

  constructor() {
    this.buttonAddToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }
  public async goToProductAddeModal() : Promise<void> {
    await this.buttonAddToCart.click();
  }

  public isClickableButtonAddToCart() : Function {
    return ExpectedConditions.elementToBeClickable(this.buttonAddToCart);
  }
}
