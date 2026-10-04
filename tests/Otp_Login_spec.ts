import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';

// In a real project, store this in an environment variable, not hardcoded.
// This is the SAME secret that was used to set up 2FA on the test account
// (e.g. the one shown when you scanned the QR code during account setup).
const OTP_SECRET = 'JBSWY3DPEHPK3PXP';

test('login with 2FA/OTP', async ({ page }) => {
  // Step 1: Normal login with username/password
  await page.goto('https://example.com/login');
  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('testpassword');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Step 2: App now shows an OTP input screen
  await expect(page.getByText('Enter your verification code')).toBeVisible();

  // Step 3: Generate a valid OTP right now, using the same secret
  // the test account's 2FA is linked to
  const otpCode = authenticator.generate(OTP_SECRET);

  // Step 4: Enter the generated OTP into the field
  await page.getByLabel('Verification code').fill(otpCode);
  await page.getByRole('button', { name: 'Verify' }).click();

  // Step 5: Confirm login succeeded
  await expect(page.getByText('Welcome back')).toBeVisible();
});