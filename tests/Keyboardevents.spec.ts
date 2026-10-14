import { test, expect } from '@playwright/test';


test('Keyboard Events',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input').fill("tom");
    await page.keyboard.press('Tab');
    await page.keyboard.type('Jerry');
    await page.keyboard.press('Tab');
    await page.keyboard.type('India');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
     await page.keyboard.press('Tab');
     await page.keyboard.type('1234444')
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');

  // await  page.waitForTimeout(77000)
  await page.pause()
   
});