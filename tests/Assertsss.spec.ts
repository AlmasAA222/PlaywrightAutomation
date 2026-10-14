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
    //await page.locator('//*[@id="navbarExample"]/ul/li[4]/a').click()

   // await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
    ///  content/attribute
   // await expect( page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Samsung galaxy s6')
 //   await expect( page.locator('//*[@id="tbodyid"]/h2')).toContainText('Samsung')
 //await expect(page.locator('//img[@width="400"]')).toHaveAttribute('src','imgs/galaxy_s6.jpg')
// await expect(page.locator('//td[text()="Samsung galaxy s6"]')).toHaveCount(2)

// page validations
//await expect(page).toHaveTitle('STORE')
//await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')

// element validations



   await  page.waitForTimeout(7000)

});




test('Elememnet Assert in Plywright',  async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
   await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
    ///  element based validations
//await expect(page.locator('//*[@id="tbodyid"]/div[2]/div/a')).toBeEnabled()
await expect(page.locator('//*[@id="tbodyid"]/div[2]/div/a')).toBeVisible()

   await  page.waitForTimeout(7000)

});

test.only('soft Assert in Plywright',  async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
   await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
await expect.soft(page.locator('//*[@id="tbodyid"]/div[9]/div/a')).toBeVisible()
console.log('good morning')

   await  page.waitForTimeout(7000)

});