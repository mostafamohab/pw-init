import { test, expect, chromium } from "@playwright/test"

test("user can register user with valid credentials", async ({}) => {
    //1- generate Email Address and Launch browser
    const emailAddress = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
    const browser = await chromium.launch();
    const page = await browser.newPage();

    //2- navigate to URL automationexercise.com"
    await page.goto("https://www.automationexercise.com/login");

    //4- verify "New User Signup!" is visible
    await expect(page.getByText("New User Signup!")).toBeVisible();

    //5- enter valid username and email address
    await page.locator("[data-qa='signup-name']").fill('Mostafa')
    await page.locator("[data-qa='signup-email']").fill(emailAddress)
    await page.locator("[data-qa='signup-button']").click();

    //7- verify "Enter Account Information" is visible
    expect(page.getByText("Enter Account Information")).toBeVisible;

    //8- select title , password and date of birth
    await page.locator("//*[@id='id_gender1']").check();
    await page.locator("//*[@id='password']").fill("Password123");

    const days   = page.locator("//*[@id='days']");
    const months = page.locator("//*[@id='months']");
    const years  = page.locator("//*[@id='years']")
    await days.selectOption({value : '21'});
    await months.selectOption({label : 'December'});
    await years.selectOption({value : '1994'});

    //9- Select Chechboxes
    const newsletterCheckBoxAwait = await page.locator("//*[@for='newsletter']");
    newsletterCheckBoxAwait.check();
    await expect(newsletterCheckBoxAwait).toBeChecked();

    const optInCheckBoxAwait = await page.locator("//*[@for='optin']");
    optInCheckBoxAwait.check();
    await expect(optInCheckBoxAwait).toBeChecked();

    //10- Fill Details
    await page.locator("//*[@id='first_name']").fill("Mostafa");
    await page.locator("//*[@id='last_name']").fill("Mohab");
    await page.locator("//*[@data-qa='company']").fill("Vodafone");
    await page.locator("//*[@data-qa='address']").fill("Cairo");
    await page.locator("//*[@data-qa='address2']").fill("Cairo2");

    //11- Select Country
    const country = await page.locator("//*[@data-qa='country']");
    country.selectOption({value: 'United States'});

    //12- Fill State , City , Zip Code , Mobile Number
    await page.locator("//*[@data-qa='state']").fill("Cairo");
    await page.locator("//*[@data-qa='city']").fill("Cairo");
    await page.locator("//*[@data-qa='zipcode']").fill("90002");
    await page.locator("//*[@data-qa='mobile_number']").fill("0123 24242444");

    //13- Click Create Account Button
    await page.locator("//*[@data-qa='create-account']").click();
    await expect(page.getByText("Account Created!")).toBeVisible();

    //14- Click on Continue Button
    await page.locator("//*[@data-qa='continue-button']").click();


    await browser.close();

})