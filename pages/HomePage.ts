import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly loginLink: Locator;
  readonly productLinks: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.locator('#login2');
    this.productLinks = page.locator('.card-title a');
    this.cartLink = page.locator('#cartur');
  }

  async openHomePage() {
    await this.navigate('https://www.demoblaze.com/');
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async selectProduct(productName: string) {
    await this.page.locator(`//a[text()='${productName}']`).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
