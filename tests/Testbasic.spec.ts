import { test, expect } from '@playwright/test';

test('Test Basic', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page .getByPlaceholder('Search Amazon.in').fill('iphone 17');
  await page.waitForTimeout(5000)

 
});