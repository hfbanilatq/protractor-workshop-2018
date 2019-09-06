import { $, browser, ElementFinder } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#IF1');
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    return await browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
  public async getFormFrameHeight(): Promise<number> {
    return await browser.executeScript('return arguments[0].height;', this.iframe1);
  }
}
