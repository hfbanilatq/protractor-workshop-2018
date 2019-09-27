import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;
  private labelDocumentTitle: ElementFinder;

  constructor() {
    this.iframe1 = $('#IF1');
    this.labelDocumentTitle = $('#content h1');
  }

  public async setFormFrameHeight(height: number): Promise<void> {
    return await browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<number> {
    return await browser.executeScript('return arguments[0].height;', this.iframe1);
  }

  public async switchToFrame(): Promise<void> {
    return await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage() {
    return browser.switchTo().defaultContent();
  }

  public async getPageTitle() : Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.labelDocumentTitle), 3000);
    return await this.labelDocumentTitle.getText();
  }

}
