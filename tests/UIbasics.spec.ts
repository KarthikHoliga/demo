
//Test case 1
import { test, expect } from '@playwright/test';

test("Login into application using valid credentials", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    await page.fill("#username", "myUser");
    await page.fill("#password", "myPassword");
    await page.click("#loginButton");
    await expect(page).toHaveURL("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
});