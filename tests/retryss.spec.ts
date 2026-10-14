import { test, expect } from '@playwright/test';
test('Retry the Testcase', async ({ page}) => {
  await page.goto('https://www.demoblaze.com/');
await page.locator('#login2').click();
await expect(page.locator('#loginusername')).toBeVisible();
await page.locator('#loginusername').fill('demo');
await page.locator('#loginpassword').fill('demo');
await page.locator("//button[text()='Log in']").click();
await expect(page.locator('#logout')).toBeVisible();
});

test.only('Falky test  Testcase', async ({ page}) => {
  await page.goto('https://www.demoblaze.com/');
await page.locator('#login2').click();
await expect(page.locator('#loginusername')).toBeVisible();
await page.locator('#loginusername').fill('demo');
await page.locator('#loginpassword').fill('demo');
await page.locator("//button[text()='Log in']").click();
await expect(page.locator('#logout2')).toBeVisible();
});