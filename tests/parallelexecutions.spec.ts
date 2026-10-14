import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });
test('Login to DemoBlaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // await page.click('#login2');
});
test('Payment flow - not implemented', async ({ page }) => {
  // will not execute
   await page.goto('https://www.myntra.in/');
});
test('Cart test - skip on firefox', async ({ page, browserName }) => {
  await page.goto('https://www.amazon.in/');
});
test('Signup modal validation bug', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
});
test('Invalid login shows error', async ({ page }) => {
  await page.goto('http://demo.automationtesting.in/Register.html');
  //await page.click('#login2');
});