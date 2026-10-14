import { test, expect } from '@playwright/test';
import { sreealmas } from "./myfixture";

test('Mobile view', async ({ page }) => {
  await page.goto('https://www.amazon.in');
 // await page .getByPlaceholder('Search Amazon.in').fill('iphone 17');
   await page .getByPlaceholder('Search Amazon.in').fill(sreealmas.mobile);
  await page.waitForTimeout(5000)

 
});

test('Mobile view2', async ({ page }) => {
  await page.goto('https://www.myntra.in');
   await page.waitForTimeout(5000)

 
});