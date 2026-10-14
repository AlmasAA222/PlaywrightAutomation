import { test, expect } from '@playwright/test';


test('Alerts for register page',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.locator('//a[@href="#CancelTab"]').click();
    page.on('dialog', async dialog => {
       // await dialog.accept(); // accepts the alert
await dialog.dismiss(); // dismisses the alert
      });
    await page.locator('//*[@id="CancelTab"]/button').click();
   await  page.waitForTimeout(7000)
   
});
test.only('Alerts  for register page for enter text',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.locator('//a[@href="#Textbox"]').click();
    page.on('dialog', async dialog => {

await dialog.accept('tom'); // accepts the alert and enters text
      });
    await page.locator('//*[@id="Textbox"]/button').click();
   await  page.waitForTimeout(7000)
   
});