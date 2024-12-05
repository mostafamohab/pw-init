import { test , expect, chromium } from "@playwright/test"

test("user can login with valid credentials", async({page,baseURL}) => {
    await page.goto(baseURL + "/web/index.php/auth/login");
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    expect(page.url()).toBe(baseURL+"/web/index.php/dashboard/index");

})