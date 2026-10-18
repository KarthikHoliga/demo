import { test, expect } from '@playwright/test';

test('fill and submit basic form', async ({ page }) => {
  // 1. Open the page
  await page.goto('https://www.sreenidhirajakrishnan.com/ai-testing-kit');

  // 2. Fill the fields
  await page.getByPlaceholder('Enter your name').fill('Karthik');
  await page.getByPlaceholder('Enter password').fill('Test@1234');
  await page.getByPlaceholder('Enter email').fill('karthik@example.com');
  await page.getByPlaceholder('Enter phone').fill('9876543210');
  await page.getByPlaceholder('Tell us about yourself').fill('Test engineer');

  // 3. Click Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // 4. Check the status text changed
  await expect(page.getByText('Not submitted')).toBeHidden();

  // 5. Click Reset and check the fields are empty
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.getByPlaceholder('Enter your name')).toBeEmpty();
  await expect(page.getByText('Not submitted')).toBeVisible();
});