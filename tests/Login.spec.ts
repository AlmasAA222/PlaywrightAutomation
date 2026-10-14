import { test, expect } from '@playwright/test';

test('Access the amazon page ',  async ({ page }) => {
    await  page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('iphone 17');
  //  await page.locator('#twotabsearchtextbox').fill('iphone 17');
 //   await page.locator('#nav-search-submit-button').click();
 await page.locator('//*[@id="nav-search-submit-button"]').click()
});
test('Access the demo register page ',  async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
   await page.locator('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input').fill("tom")
   await page.locator('//*[@id="basicBootstrapForm"]/div[1]/div[2]/input').fill("jerry")
   await page.locator('#checkbox1').click()
});


