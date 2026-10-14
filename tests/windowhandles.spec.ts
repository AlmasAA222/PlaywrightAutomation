import { test, expect,chromium } from '@playwright/test';

test('switch to windows appraoch 1', async () => {
const browser=await chromium.launch()
const context=await browser.newContext()
const page1=await context.newPage()
const page2=await context.newPage()
await page1.goto('https://demo.automationtesting.in/Windows.html')
await page2.goto('https://www.selenium.dev/')

});

test('switch to windows appraoch 2', async ({ page }) => {
const browser=await chromium.launch()
const context=await browser.newContext()
const page1=await context.newPage()
  await page1.goto('https://demo.automationtesting.in/Windows.html');
  await page1.click("//a[normalize-space()='Open Seperate Multiple Windows']");
  const pageprmse=context.waitForEvent('page')
  await page1.locator("//button[@onclick='multiwindow()']").click()
  const newpage=await pageprmse;
  console.log(await newpage.title())

});

test.only('Open multiple windows', async ({ page, context }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.click("//a[normalize-space()='Open Seperate Multiple Windows']");
  await Promise.all([
    page.click("//button[@onclick='multiwindow()']"),
    context.waitForEvent('page'),
    context.waitForEvent('page'),
     context.waitForEvent('page')
  ]);
  const pages = context.pages();
  console.log('Total windows:', pages.length);
  for (const p of pages) {
   // await p.bringToFront();
    console.log(await p.title());
  }
});
