import { test, expect, chromium, Browser } from "@playwright/test"
import { BaseTest } from "./basetest";

test.describe("Register User", async() => {
let basetest: BaseTest;
let randomEmail: string;

test.beforeEach(async({}) => {

    basetest=new BaseTest();
    await basetest.setup();// Set up the browser, page, and page objects

    generateRandomEmail();
    await basetest.loginPage.navigate();

});

function generateRandomEmail(): string 
{
  randomEmail = (Math.random() + 1).toString(36).substring(2) + "@gmail.com";
  return randomEmail;
}


test("user can register user with valid credentials", async ({}) => {
    await basetest.loginPage.navigate();

    //1- verify "New User Signup!" is visible
    expect(basetest.loginPage.getElementByText("New User Signup!")).toBeVisible();

    //2- Login with valid Random username and email address
    await basetest.loginPage.signup('Mohamed',generateRandomEmail())

    //3- verify "Enter Account Information" is visible
    expect(basetest.signupPage.getElementByText("Enter Account Information")).toBeVisible;

    //4- Fill All Account Details
    await basetest.signupPage.fillAccountInfoDetails('mohamed','Password123');

    //5- Click Create Account Button
    await expect(basetest.accountcreatedPage.getAccountCreatedText).toBeVisible();

    //6- Click on Continue Button
    await (basetest.accountcreatedPage.getContinueButton).click();

    //7- Verify that 'Logged in as Mohamed' in homepage
    expect(basetest.homePage.getElementByText("Logged in as Mohamed")).toBeVisible;

    //8- Click on 'Delete Account' from page header
    await basetest.homePage.getElementByText("Delete Account").click();

    //9- Verify that 'Account Deleted!' Text is Visible
    await expect(basetest.accountdeletedPage.getAccountDeletedText).toBeVisible();
});

});

