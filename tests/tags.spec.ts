import { test, expect } from '@playwright/test';

test('Demo Register Page @e2e ', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Alerts');
  await page.locator('//a[@href="#Textbox"]').click()
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept("hello babu")
  // await dialog.dismiss();
  });
  await page.locator('//*[@id="Textbox"]/button').click()
});

test('DemoBlaze @sanity', async ({ page }) => {
  await page.goto('https://www.demoblaze.in');

});