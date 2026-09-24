import { test, expect } from '@playwright/test'

test('Login into application using valid credentials', async function({page}) {
  //launch the url
  //fill the username
  //fill the password
  //click on login button
  //validate the login is successfully
 
  await page.goto("https://practicetestautomation.com/practice-test-login/")

  await page.getByRole("textbox", {name: "Username"})

  await page.getByLabel("username").fill("student")

  await expect(page.getByLabel("username")).toHaveValue("student")

  await page.locator("#password").presssequentially("Password123!")
})
