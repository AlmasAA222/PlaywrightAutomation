import { test, expect } from '@playwright/test';
/*
only  Debug one test
skip  Don’t run
fixme Known broken
fail  Expected failure
slow  Long-running test
*/


test('Login to DemoBlaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
});
test.skip('Payment flow - not implemented', async ({ page }) => {
  // will not execute
   await page.goto('https://www.myntra.in/');
});
test('Cart test - skip on firefox', async ({ page, browserName }) => {
  test.fail(browserName === 'firefox', 'Cart issue in Firefox');
  await page.goto('https://www.amazon.in/');
});
test.fixme('Signup modal validation bug', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Datepicker.html');
  await page.click('#signin2');
});
test('Invalid login shows error', async ({ page }) => {
  test.fail(true, 'Known login error message mismatch');
  await page.goto('https://www.flipkart.com/');
  await page.click('#login2');
});
test.only('Place order flow', async ({ page }) => {
 // test.slow();
  await page.goto('https://www.demoblaze.com/');
   test.slow();
  await page.click('text=Samsung galaxy s99');

});