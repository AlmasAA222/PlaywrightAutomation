/*

BeforeAll- This hook is executed once before any of the tests starts running.
AfterAll - This hook is executed after all the tests have finished running.
BeforeEach - This hook is executed before each test case starts running.
AfterEach - This hook is executed after each test case has finished running.

*/
import { test, expect,Page } from '@playwright/test';

// Point 1-->without hooks

/*
    test('should display homepage title', async ({ page }) => {
       await page.goto('https://www.demoblaze.com/');
      await expect(page).toHaveTitle('STORE');
    });

    test('should list products', async ({ page }) => {
      const products = page.locator('.card-title');
     // await expect(products).toHaveCountGreaterThan(0);
    });

    test('should login with valid credentials', async ({ page }) => {
       await page.goto('https://www.demoblaze.com/');
      await page.click('#login2');
      await page.fill('#loginusername', 'demo');
      await page.fill('#loginpassword', 'demo');
      await page.click('button:has-text("Log in")');

      await expect(page.locator('#logout2')).toBeVisible();
    });

*/

/*
//  issuses when using page in hooks
// with hooks
  test.beforeAll(async ({ page }) => {
    // Runs once before all tests in the block
    console.log('Before All: Setting up test environment');
await page.goto('https://www.demoblaze.com/');
  });
  test('should display homepage title', async ({ page }) => {
   //    await page.goto('https://www.demoblaze.com/');
      await expect(page).toHaveTitle('STORE');
    });

    test.afterAll(async ({ page }) => {
    // Runs once before all tests in the block
await page.close();
    console.log('After All: Cleaning up test environment');
  });
  
*/
  
 // with hooks
 let page:Page;

  test.beforeAll(async ({ browser }) => {
    // Runs once before all tests in the block
    console.log('Before All: Setting up test environment');
    page=await browser.newPage();
await page.goto('https://www.demoblaze.com/');
  });
  test('should display homepage title', async ({ }) => {
   //    await page.goto('https://www.demoblaze.com/');
      await expect(page).toHaveTitle('STORE');
    });

    test.afterAll(async ({ }) => {
    // Runs once before all tests in the block
await page.close();
    console.log('After All: Cleaning up test environment');
  });
  