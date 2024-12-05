import { test, expect, chromium, Browser } from "@playwright/test"

import HomePage from "../pages/Home.Page";
import LoginPage from "../pages/Login.Page";
import SignupPage from "../pages/Signup.Page";
import AccountCreatedPage from "../pages/AccountCreated.Page";
import AccountDeletedPage from "../pages/AccountDeleted.Page";

let homePage: HomePage;
let loginPage: LoginPage;
let signupPage: SignupPage;
let accountCreatedPage: AccountCreatedPage; 
let accountDeletedPage: AccountDeletedPage;
let randomEmail: string;
let browser: Browser;

test.beforeEach(async({page}) => {
// Launch browser and create new page instance before each test
browser = await chromium.launch({ headless: false }); 
// Change to true for headless mode
page = await browser.newPage();



homePage = new HomePage(page);
loginPage = new LoginPage(page);    
signupPage = new SignupPage(page);
accountCreatedPage = new AccountCreatedPage(page);
accountDeletedPage = new AccountDeletedPage(page);

randomEmail = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
await loginPage.navigate();

});

test.describe("Register User", async() => {
test("user can register user with valid credentials", async ({}) => {
    await loginPage.navigate();

    //1- verify "New User Signup!" is visible
    expect(await loginPage.getElementByText("New User Signup!")).toBeVisible();

    //2- Login with valid Random username and email address
    await loginPage.signup('Mohamed',randomEmail)

    //3- verify "Enter Account Information" is visible
    expect(await signupPage.getElementByText("Enter Account Information")).toBeVisible;

    //4- Fill All Account Details
    await signupPage.fillAccountInfoDetails('mohamed','Password123');

    //5- Click Create Account Button
    await expect(accountCreatedPage.getAccountCreatedText).toBeVisible();

    //6- Click on Continue Button
    await (accountCreatedPage.getContinueButton).click();

    //7- Verify that 'Logged in as Mohamed' in homepage
    expect(await homePage.getElementByText("Logged in as Mohamed")).toBeVisible;

    //8- Click on 'Delete Account' from page header
    await (await homePage.getElementByText("Delete Account")).click();

    //9- Verify that 'Account Deleted!' Text is Visible
    await expect(accountDeletedPage.getAccountDeletedText).toBeVisible();
});

});