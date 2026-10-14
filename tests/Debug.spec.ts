import { test, expect } from '@playwright/test';
/*
hard  assert
soft assert

*/


test('Assert in Plywright',  async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
        await page.locator('//*[@id="navbarExample"]/ul/li[5]/a').click()


    await page.locator('#loginusername').fill('demo')
    await page.locator('#loginpassword').fill('demo')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()
    const catText = await page.locator('#cat').textContent();
    console.log(catText);

    ///  content/attribute
    await expect( page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Samsung galaxy s6')

   await  page.waitForTimeout(7000)

});