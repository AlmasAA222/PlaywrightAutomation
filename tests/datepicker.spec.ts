import { test, expect } from '@playwright/test';


test('Date Pickers',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Datepicker.html');
    await page.locator('#datepicker1').click()
   await page.locator('//a[text()="21"]').click()
    
   await  page.waitForTimeout(7000)

});
test.only('Date Picker2',  async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Datepicker.html');
      await page.locator('#datepicker2').click()

 await page.locator('//select[@title="Change the month"]').selectOption('June')
 
 await page.locator('//select[@title="Change the year"]').selectOption('2023')
    await page.locator('//a[text()="21"]').click()

   await  page.waitForTimeout(7000)

});