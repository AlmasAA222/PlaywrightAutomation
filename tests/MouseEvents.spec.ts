import { test, expect } from '@playwright/test';


test('Mouse Events drag and drop',  async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
   const drag=  page.frameLocator('//iframe[@src="/resources/demos/droppable/default.html"]').locator('#draggable')
    const drop=  page.frameLocator('//iframe[@src="/resources/demos/droppable/default.html"]').locator('#droppable')
  await drag.dragTo(drop);
   await  page.waitForTimeout(7000)

});
test('Mouse Events Hover',  async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
   // await page.locator('//a[@href="https://jqueryui.com/themeroller/"]').hover()
   await page.getByRole('list',{name: 'Themes'}).hover() 
   await  page.waitForTimeout(7000)

});
test('Mouse Events clicks',  async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
   // await page.locator('//a[@href="https://jqueryui.com/themeroller/"]').dblclick()
 //  await page.getByText('Themes').dblclick() 
    await page.locator('//a[@href="https://jqueryui.com/themeroller/"]').click({button:'right'})
   await  page.waitForTimeout(7000)

});

test('Mouse Events scroll',  async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
   
    await page.locator('//a[@href="https://jqueryui.com/themeroller/"]').hover()
    await page.mouse.wheel(0,500)

   await  page.waitForTimeout(7000)
   
});
test.only('Mouse Events scroll to sepcific ',  async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
   
    await page.locator('//a[@href="https://jqueryui.com/themeroller/"]').hover()
 //   await page.mouse.wheel(0,500)
 /*const m= page.locator('//a[@href="https://jqueryui.com/support/"]')
 await m.scrollIntoViewIfNeeded();
 */
await page.locator('//a[@href="https://jqueryui.com/support/"]').evaluate("element=> element.scrollIntoView()")
   await  page.waitForTimeout(7000)
   
});