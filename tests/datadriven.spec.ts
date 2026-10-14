import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
const filePath = '..//utils//data.xlsx';
const sheetName = 'sheet1';
interface TestRow {
  'Item': string;
  'Expected Result': string;
  'Test result': string;
}

test('Amazon.in search validation using Excel with expect', async ({ page }) => {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const rows: TestRow[] = XLSX.utils.sheet_to_json<TestRow>(worksheet);
  for (const row of rows) {
    try {
      // Guard check
      if (!row.Item || !row['Expected Result']) {
        row['Test result'] = 'FAIL: Missing testdata or Expected Result';
        continue;
      }
      // Open Amazon
      await page.goto('https://www.amazon.in');
      // Search
      await page.fill('#twotabsearchtextbox', row.Item);
      await page.click('#nav-search-submit-button');
      
      // Assertion using expect
      const resultsText = page.locator(
        'span.a-color-state.a-text-bold'
      );
      await expect(resultsText).toContainText(
        row['Expected Result'],
        { timeout: 10000 }
      );
      // If expect passes
      row['Test result'] = 'PASS';
    } catch (error: any) {
      // If expect or any step fails
      row['Test result'] = `FAIL: ${error.message}`;
    }
  }
  // Write back to Excel
  const updatedSheet = XLSX.utils.json_to_sheet(rows);
  workbook.Sheets[sheetName] = updatedSheet;
  XLSX.writeFile(workbook, filePath);

  await page.pause()
});


