import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Demoblaze POM flow – login and add product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await homePage.openHomePage();

  await homePage.clickLogin();
  await page.waitForSelector('#loginusername');

  await loginPage.login('demo', 'demo');

  await page.waitForTimeout(2000); // demo site is slow 😄

  await homePage.selectProduct('Nexus 6');
  //await homePage.selectProduct('Samsung galaxy s6');

await page.waitForTimeout(5000)
  await page.on('dialog', dialog => dialog.accept());
  await page.locator("//a[text()='Add to cart']").click();
  await page.waitForTimeout(2000); // demo site is slow 😄

  await homePage.goToCart();
    await page.waitForTimeout(2000); // demo site is slow 😄

console.log('Number of items in cart:', await cartPage.getCartItemCount());
  expect(await cartPage.getCartItemCount()).toBeGreaterThan(0);
});
