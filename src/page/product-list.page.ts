import { $, ElementFinder } from 'protractor';

export class ProductListPage{
  private buttonAddToCar: ElementFinder;
  constructor() {
    this.buttonAddToCar = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }
  public async goToProductAddeModal() {
    await this.buttonAddToCar.click();
  }
}
