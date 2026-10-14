import { test, expect } from '@playwright/test';


test('Frames for register page',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
//await page.frameLocator('#singleframe').locator('(//input[@type="text"])[1]').fill("tom");
await page.frameLocator('#singleframe').locator('input[type="text"]').fill("tom");
   await  page.waitForTimeout(7000)
   
});