import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class MenuContentPage{
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('#header .container > .row > #block_top_menu > ul >li:nth-child(3) >a');
  }
  public async goToTShirtMenu (): Promise<void> {
    await this.waitToBeClickableTShirtMenu();
    await this.tShirtMenu.click();
  }
  private async waitToBeClickableTShirtMenu() : Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.tShirtMenu), 3000);
  }
}
