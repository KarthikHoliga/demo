# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIbasics.spec.ts >> fill and submit basic form
- Location: tests\UIbasics.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Enter your name')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('fill and submit basic form', async ({ page }) => {
  4  |   // 1. Open the page
  5  |   await page.goto('https://www.sreenidhirajakrishnan.com/ai-testing-kit');
  6  | 
  7  |   // 2. Fill the fields
> 8  |   await page.getByPlaceholder('Enter your name').fill('Karthik');
     |                                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  |   await page.getByPlaceholder('Enter password').fill('Test@1234');
  10 |   await page.getByPlaceholder('Enter email').fill('karthik@example.com');
  11 |   await page.getByPlaceholder('Enter phone').fill('9876543210');
  12 |   await page.getByPlaceholder('Tell us about yourself').fill('Test engineer');
  13 | 
  14 |   // 3. Click Submit
  15 |   await page.getByRole('button', { name: 'Submit' }).click();
  16 | 
  17 |   // 4. Check the status text changed
  18 |   await expect(page.getByText('Not submitted')).toBeHidden();
  19 | 
  20 |   // 5. Click Reset and check the fields are empty
  21 |   await page.getByRole('button', { name: 'Reset' }).click();
  22 |   await expect(page.getByPlaceholder('Enter your name')).toBeEmpty();
  23 |   await expect(page.getByText('Not submitted')).toBeVisible();
  24 | });
```