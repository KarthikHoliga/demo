import { test, expect } from '@playwright/test';

const users = [
  { user: 'standard_user',   pass: 'secret_sauce', expected: /inventory/ },
  { user: 'locked_out_user', pass: 'secret_sauce', expected: /login/ },
];

for (const { user, pass, expected } of users) {
  test(`login as ${user}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', user);
    await page.fill('#password', pass);
    await page.click('#login-button');
    await expect(page).toHaveURL(expected);
  });
}