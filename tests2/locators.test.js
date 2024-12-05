import { test , expect , chromium } from "@playwright/test"

test("Login using different PW locators", async({page,baseURL}) => {
    // 1- open login page
    await page.goto(baseURL + "/web/index.php/auth/login");

    // 2- get company company-branding logo , then make sure it's visible
    //const logoXpath = page.locator("//img[@alt='company-branding']");
    //const logoCSS = page.locator("[alt='company-branding']");
    const logoPW = page.getByAltText("company-branding");

    //await expect(logoXpath).toBeVisible();
    //await expect(logoCSS).toBeVisible();
    await expect(logoPW).toBeVisible();

    // 3- find form header, and make sure it's visible
    //const formHeaderXpath = page.locator("//div[@class='orangehrm-login-slot']//h5");
    //const formHeaderCSS = page.locator(".orangehrm-login-slot > h5");
    const formHeaderPW = page.getByRole("heading",{name:'login'});

    //await expect(formHeaderXpath).toBeVisible();
    //await expect(formHeaderCSS).toBeVisible();
    await expect(formHeaderPW).toBeVisible();

    // 4- find username, then type 'Admin'
    //const usernameXpath = page.locator("//input[@name='username']");
    //const usernameCSS = page.locator("[name='username']");
    const usernamePW = page.getByPlaceholder("username");
    
    //await usernameXpath.type('Admin');
    //await usernameCSS.type('Admin');
    await usernamePW.fill('Admin');

    // 5- find password, then type 'admin123'
    //const passwordXpath = page.locator("//input[@name='password']");
    //const passwordCSS = page.locator("[name='password']");
    const passwordPW = page.getByPlaceholder("Password");
    
    //await passwordXpath.type('admin123');
    //await passwordCSS.type('admin123');
    await passwordPW.fill('admin123');


    // 6- find forget password, and make sure it's visible
    //const forgetPasswordXpath = page.locator("//div[@class='orangehrm-login-forgot-header']//p");
    //const forgetPasswordCSS = page.locator(".orangehrm-login-forgot-header > p");
    const forgetPasswordPW = page.getByText("Forgot your password? ");

    //await expect(forgetPasswordXpath).toBeVisible();
    //await expect(forgetPasswordCSS).toBeVisible();
    await expect(forgetPasswordPW).toBeVisible();

    // 7- find login button, make sure the btn state is enabled then click on it
    //const submitButtonXpath = page.locator("//button[@type='submit']");
    //const submitButtonCSS = page.locator("[type='submit']");
    const submitButtonPW = page.getByRole('button',{type:"submit"});

    //expect(await submitButtonXpath.isEnabled());
    //expect(await submitButtonCSS.isEnabled());
    expect(await submitButtonPW.isEnabled());

    await submitButtonPW.click();

    // 8- verify user is redirected to dashboard page
    expect(page.url()).toBe(baseURL+"/web/index.php/dashboard/index");

})