/*

BeforeAll- This hook is executed once before any of the tests starts running.
AfterAll - This hook is executed after all the tests have finished running.
BeforeEach - This hook is executed before each test case starts running.
AfterEach - This hook is executed after each test case has finished running.

*/
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('This runs once before all tests');
});

test.afterAll(async () => {
  console.log('This runs once after all tests');
});

test.beforeEach(async () => {
  console.log('This runs before each test');
}); 
test.afterEach(async () => {
  console.log('This runs after each test');
});

test('Test 1', async () => {
  console.log('Executing Test 1');
});
test('Test 2', async () => {
  console.log('Executing Test 2');
});
