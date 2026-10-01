import { test, expect } from '@playwright/test';

test("Login into application using valid credentials", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel("Username").fill("student");
    await expect(page.getByLabel("Username")).toHaveValue("student");

    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();

    // Verify the login actually succeeded
    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.getByText("Logged In Successfully")).toBeVisible();
});