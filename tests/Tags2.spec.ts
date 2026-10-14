import { test, expect } from '@playwright/test';

test('Login to DemoBlaze app', {tag:"@smoke"}, async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // await page.click('#login2');
});
test('Access the myntra app', {tag:"@regression"}, async ({ page }) => {
  // will not execute
   await page.goto('https://www.myntra.in/');
});
test('Access the Amzon app', {tag:"@sanity"}, async ({ page, browserName }) => {
  await page.goto('https://www.amazon.in/');
});
test('Access the flipkart app', {tag:"@regression"}, async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
});
test('Access the demo app', {tag:"@smoke"}, async ({ page }) => {
  await page.goto('http://demo.automationtesting.in/Register.html');
  //await page.click('#login2');
});