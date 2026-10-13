import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';

// This is a PUBLIC, intentionally shared secret from authenticationtest.com,
// a site built specifically for practicing OTP/2FA automation. Safe to use freely.
const OTP_SECRET = 'I65VU7K5ZQL7WB4E';

test('real TOTP login flow', async ({ page }) => {
  await page.goto('https://authenticationtest.com/totpChallenge/');

  // Generate a valid 6-digit code right now using the public test secret
  const otpCode = authenticator.generate(OTP_SECRET);
  console.log('Generated OTP:', otpCode);

  // Enter it into the page's OTP field
  await page.locator('#totp-input').fill(otpCode);
  await page.locator('#login-button').click();

  // Confirm successful verification
  await expect(page.getByText('Login success')).toBeVisible();
})