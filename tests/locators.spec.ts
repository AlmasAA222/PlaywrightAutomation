/*
playwright locators are used to find elements on a web page. They provide a way to interact with the elements, such as clicking buttons, filling out forms, and verifying content. Playwright supports various types of locators, including CSS selectors, XPath expressions, text content, and role-based locators.
getByRole: This locator finds elements based on their ARIA role, which is useful for accessibility testing. It allows you to locate elements like buttons, links, and headings by their role and name.
getByText: This locator finds elements based on their visible text content. It is useful for locating elements that contain specific text, such as buttons or links with a particular label.
getByLabel: This locator finds form elements based on their associated label text. It is useful for locating input fields, checkboxes, and radio buttons by their labels.
getByPlaceholder: This locator finds input elements based on their placeholder text. It is useful for locating input fields that have a specific placeholder value.
getByTestId: This locator finds elements based on a custom data attribute (data-testid). It is useful for locating elements that have been assigned a unique test identifier.
getByAltText: This locator finds elements based on their alt text, which is commonly used for images. It is useful for locating images with specific alternative text.
getByTitle: This locator finds elements based on their title attribute. It is useful for locating elements that have a specific title value.
getByRole, getByText, getByLabel, getByPlaceholder, getByTestId, and getByAltText are all examples of Playwright locators that provide different ways to find elements on a web page. Each locator has its own use case and can be used in combination with other locators to create more complex queries. By using these locators effectively, you can write robust and maintainable tests for your web applications.  

*/
import { test, expect } from '@playwright/test';

test('Checking getByText ',  async ({ page }) => {
    /*
    getByText: This locator finds elements based on their visible text content. It is useful for locating elements that contain specific text, such as buttons or links with a particular label.
    To use:: For intercative elements like buttons and links, getByText is often the most straightforward way to locate them. It allows you to find elements based on the text they display, making it easy to interact with them in your tests.
    */
    await  page.goto('https://www.amazon.in/');
   // await page.getByText('Coupons').click();
   await expect(page.getByText("Video Games")).toBeVisible();

});

test('Checking getByLabel ',  async ({ page }) => {
    /*
    getByLabel: This locator finds form elements based
     on their associated label text. It is useful for locating input fields, checkboxes, and radio buttons by their labels.
     To use: filelds with labesl
     */
    await  page.goto('https://demowebshop.tricentis.com/register');
   await page.getByLabel('First name:').fill('Almas');
  // await page.getByText("Last name:").fill('Smith');
});
test('Checking getByPlaceholder ',  async ({ page }) => {
    /*
 getByPlaceholder: This locator finds input elements based on their placeholder text. It is useful for locating input fields that have a specific placeholder value.
 use: fields with placeholder
    */
    await  page.goto('https://www.amazon.in/');
   await page.getByPlaceholder('Search Amazon.in').fill('iphone 17');
   await page.pause();
});
test('Checking getByAltText ',  async ({ page }) => {
    /*
    getByAltText: This locator finds elements based on their alt text, which is commonly used for images. It is useful for locating images with specific alternative text.
    use: images with alt text
    */
    await  page.goto('https://www.amazon.in/');
 await page.getByAltText('ZEBRONICS Bluetooth Speaker').click();
   await page.pause();
});
test.only('Checking getByRole ',  async ({ page }) => {
    /*

getByRole: This locator finds elements based on their ARIA role, which is useful for accessibility testing. It allows you to locate elements like buttons, links, and headings by their role and name.
role loactors include buttons, links, headings, checkboxes, radio buttons, and more. By using getByRole, you can ensure that your tests are accessible and that the elements you interact with have the correct roles assigned to them.
use:for interactive elements like buttons and links, getByRole is often the most straightforward way to locate them. It allows you to find elements based on their role and name, making it easy to interact with them in your tests.
    */
    await  page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Almas');
    await page.getByRole('checkbox', { name: 'Cricket' }).click();
    await page.getByRole('link',{name:'WebTable'}).click();




   await page.pause();
});