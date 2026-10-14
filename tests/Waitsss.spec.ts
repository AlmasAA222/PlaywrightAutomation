import { test, expect } from '@playwright/test';
/*
events recive,visib,stable,editble
// 30 seconds for elemtns

*/

test('Waits time for element in playwright ',  async ({ page }) => {
    await  page.goto('https://www.demoblaze.com/');
// default waiting time for element is 30 sec 
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a1').click()

});

test.only('Waits time for asserts in playwright ',  async ({ page }) => {
    await  page.goto('https://www.demoblaze.com/');
  await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()
  // default wait for assert 5 secs
 
    await expect( page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Samsung galaxy s7')

});


test('overide Waits time for element in playwright ',  async ({ page }) => {
    await  page.goto('https://www.demoblaze.com/');
// default waiting time for element is 30 sec -->overide to 10 sec
    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a1').click({timeout:10000})

});