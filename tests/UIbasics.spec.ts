import { test, expect } from '@playwright/test';

test("Login into rakuten Ecommerce website", async ({ page }) => {
    await page.goto("https://www.rakuten.com/");
    await page.getByLabel("Username").fill("karthik");
    await page.getByLabel("Password").fill("karthik!123");
    await page.getByRole("button", { name: "Submit" }).click();

    // Verify the login actually succeeded
    await expect(page).toHaveURL(/logged-in-successfully/);
});