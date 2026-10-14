import { test, expect } from '@playwright/test';


test('dropdowns select a value ',  async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
   await page.locator('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input').fill("tom")
   //await page.locator('#Skills').selectOption('Client Support');
  // await page.locator('#Skills').selectOption({label:'Client Support'});
  await page.locator('#Skills').selectOption({index:3});
   await page.pause();
});
test('select all values fromdrop down ',  async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
    const dropdown = await page.locator('#Skills').allTextContents();
    //console.log(dropdown);
dropdown.forEach(async (value) => {
    console.log(value);
});
//   await page.pause();


});
test.only('select all values from multi drop down ',  async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('#msdd').click()
/*    await page.locator('//a[text()="Croatian"]').click()
    await page.locator('//a[text()="Danish"]').click()
    await page.locator('//a[text()="English"]').click()
    await page.locator('//a[text()="French"]').click()
    */
   var lang:Array<string>=["Croatian","Danish","English","French","Spanish","Turkish"];
   for (var i=0;i<lang.length;i++)
   {
    await page.locator('//a[text()="'+lang[i]+'"]').click()
   }
    await page.pause();
});

