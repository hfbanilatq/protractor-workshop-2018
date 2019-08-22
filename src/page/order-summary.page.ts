import { $, ElementFinder } from 'protractor';

export class OrderSumaryPage{
  private resultOrder: ElementFinder;

  constructor () {
    this.resultOrder = $('p > strong.dark');
  }
  public async getResultOrder(): Promise<String> {
    return await this.resultOrder.getText();
  }
}
