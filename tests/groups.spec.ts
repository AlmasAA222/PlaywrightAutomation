import { test, expect } from '@playwright/test';

test.describe('Demoblaze Application', () => {
  // ----------------------------
  // Home Page Tests
  // ----------------------------

  test.describe('Home Page', () => {
    test('should display homepage title', async ({ page }) => {
       await page.goto('https://www.demoblaze.com/');
      await expect(page).toHaveTitle('STORE');
    });

    test('should list products', async ({ page }) => {
      const products = page.locator('.card-title');
     // await expect(products).toHaveCountGreaterThan(0);
    });
  });


  // ----------------------------
  // Login Tests
  // ----------------------------
  test.describe('Login Functionality', () => {

    test('should login with valid credentials', async ({ page }) => {
       await page.goto('https://www.demoblaze.com/');
      await page.click('#login2');
      await page.fill('#loginusername', 'demo');
      await page.fill('#loginpassword', 'demo');
      await page.click('button:has-text("Log in")');

      await expect(page.locator('#logout2')).toBeVisible();
    });

    test('should show error for invalid login', async ({ page }) => {
       await page.goto('https://www.demoblaze.com/');
      await page.click('#login2');
      await page.fill('#loginusername', 'wronguser');
      await page.fill('#loginpassword', 'wrongpass');
      await page.click('button:has-text("Log in")');

      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Wrong password');
        await dialog.accept();
      });
    });

  });

  // ----------------------------
  // Cart Tests
  // ----------------------------
  test.describe('Cart Functionality', () => {

    test('should add product to cart', async ({ page }) => {
      await page.click('a:has-text("Samsung galaxy s6")');
      await page.click('a:has-text("Add to cart")');

      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
      });
    });

    test('should open cart page', async ({ page }) => {
      await page.click('#cartur');
      await expect(page).toHaveURL(/cart.html/);
    });

  });

});
