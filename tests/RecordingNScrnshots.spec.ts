import { test, expect } from '@playwright/test';

test('Screenshot in Plywright',  async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
        await page.locator('//*[@id="navbarExample"]/ul/li[5]/a').click()

        // element screenshot
 await page.locator('//*[@id="navbarExample"]/ul/li[5]/a').screenshot({ path: 'screenshot1.png' });
    await page.locator('#loginusername').fill('demo')
    await page.locator('#loginpassword').fill('demo')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

    await expect( page.locator('#nameofuser')).toHaveText('Welcome demo')
    //  screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

   await  page.waitForTimeout(7000)

});
test('Recording in Plywright',  async ({ page ,browser}) => {
    const context = await browser.newContext({
        recordVideo: {
          dir: 'videos/',
          size: { width: 800, height: 600 }

          }
    });
    await page.goto('https://www.demoblaze.com/');
        await page.locator('//*[@id="navbarExample"]/ul/li[5]/a').click()


    await page.locator('#loginusername').fill('demo')
    await page.locator('#loginpassword').fill('demo')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

    await expect( page.locator('#nameofuser')).toHaveText('Welcome demo')
  
    

   await  page.waitForTimeout(7000)

});


test.only('Screenshot and record  on failure in Plywright',  async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
        await page.locator('//*[@id="navbarExample"]/ul/li[5]/a').click()
    await page.locator('#loginusername').fill('demo')
    await page.locator('#loginpassword').fill('demo')
    await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[2]').click()

    await expect( page.locator('#nameofuser')).toHaveText('Welcome temo')
 
   await  page.waitForTimeout(7000)

});