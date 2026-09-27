//Test case 1
import { test, expect } from '@playwright/test';

test("Login into application using valid credentials", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("#Username").fill("student")
    await expect(page.getByLabel("Username")).toHaveValue("student")
});