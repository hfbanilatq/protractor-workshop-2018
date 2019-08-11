import { $, ElementFinder } from 'protractor';

export class OrderSumaryPage{
  private resultOrder: ElementFinder;
  constructor () {
    this.resultOrder = $('#center_column > div > p > strong');
  }
  public async getResultOrder() {
    return await this.resultOrder.getText();
  }
}