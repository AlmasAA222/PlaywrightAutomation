import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly placeOrderBtn: Locator;
  readonly cartRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderBtn = page.locator("//button[text()='Place Order']");
    this.cartRows = page.locator('tr.success');
  }

  async getCartItemCount() {
    return await this.cartRows.count();
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }
}
