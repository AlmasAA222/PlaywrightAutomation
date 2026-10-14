import { test, expect } from '@playwright/test';

test('Css style like locators', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  /*
#-->id in css style
. represents class in css style
 remove the space between the class name in css style
 [] represents attribute in css style
  tagname.classname represents tag name with classname in css style
  tagname#id represents tag name with id in css style
  */
// await page.locator('#twotabsearchtextbox').fill('iphone 17');
 //await page.locator('.nav-search-submit').click();
 //await page.locator('[value="Go"]').click();
 // tag+classnmae---> input.nav-input nav-progressive-attribute
// await page.locator('input.nav-input nav-progressive-attribute').fill('oppo f21');
// Tag-->input#twotabsearchtextbox(tag+id)
await page.locator('input#twotabsearchtextbox').fill('iphone 17');

await page.waitForTimeout(5000)

 
});


test('Css combination', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  /*
  Relationship between the elements in css style

*/
// First li child
//await page.locator('.nav-ul li:first-child').click();
//await page.locator('.nav-ul li').first().click();
//await page.locator('.nav-ul li').last().click();
 // nth child
await page.locator('.nav-ul li:nth-child(6)').click();
await page.waitForTimeout(5000)
});


test('Advance CSS', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  /*
Advance CSS selectors
syn: tagname:has-text("text") --> tagname:has-text("text")
*/
// Find elements containing specific text:

//await page.locator('a:has-text("Bestsellers")').click();

//Find a parent element containing a matching descendant:
await page.locator('div:has(a:has-text("Bestsellers"))').click();
//Match an element by its exact text:
//await page.locator('a:text-is("Bestsellers")').click();
await page.waitForTimeout(5000)
});



test.only('Locators Chaining', async ({ page }) => {
 await page.goto('https://demo.automationtesting.in/Register.html');
  /*
Chaining locators means combining multiple locator methods to find a specific element inside another element. It is useful when a page contains repeated buttons, tables, product cards, forms, or nested elements.

In Playwright, you commonly chain locators using .locator(), .getByRole(), .getByText(), .filter(), and other locator methods.

  */

//await page.locator('.col-md-4').locator('input[placeholder="First Name"]') .fill('John');
  //  await page.locator('form').locator('input[placeholder="Last Name"]') .fill('Smith');
  //  await page.locator('.form-group').filter({ has: page.locator('input[placeholder="Last Name"]') }).fill('John');
   // await page.locator('label').filter({ hasText: 'Cricket' }).check();
    //await page.locator('label').getByText('Male', { exact: true }) .click();
   /* 
   const options = page.locator('#Skills option');
const count = await options.count();

for (let i = 0; i < count; i++) {
    console.log(await options.nth(i).textContent());
}
    */
const options1 = await page.locator('#Skills option').allTextContents();

console.log(options1);


await page.waitForTimeout(5000)
});