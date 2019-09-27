import { ElementFinder, browser, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage{
  private products: ElementArrayFinder;
  constructor() {
    this.products = $$('.product-container');
  }

  public async selectProduct(productName: string): Promise<void> {
    const selectedProduct = this.findByProduct(productName);
    await browser.actions()
      .mouseMove(selectedProduct.$('img')).perform();
    await selectedProduct.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
  private findByProduct (productName: string) : ElementFinder {
    return this.products
      .filter((item: ElementFinder) =>
        item.$('.product-name')
          .getText()
          .then((content: string) => content.includes(productName)))
        .first();
  }
}
