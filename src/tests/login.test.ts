import { test, expect} from "@playwright/test"
import { BaseTest } from "./basetest.test";

test.describe("Login User", async() => {
let basetest : BaseTest;

 // Before each test, create an instance of BaseTest
test.beforeEach(async() => {

    basetest=new BaseTest();
    await basetest.setup();// Set up the browser, page, and page objects

    await basetest.loginPage.navigate();

});


// After each test, clean up
test.afterEach(async () => {
    await basetest.teardown(); // Close the browser

});


test('user can login with valid credentials', async() => {

    // Write Valid Credentials then Submit
    await basetest.loginPage.login('mohamed999@gmail.com','Password123');


    const isLoggedIn = basetest.homePage.getElementByText(' Logged in as Mohamed');
    
    // Verify that "Logged in as username" is visible
    await expect(isLoggedIn).toBeVisible();

});

test('user can login with invalid credentials', async() => {

    // Write Invalid Credentials then Submit
    await basetest.loginPage.login('mohamed999345@gmail.com','Password123');

    const hasError= basetest.loginPage.getElementByText('Your email or password is incorrect!');

    // Verify that "Your email or password is incorrect" is visible
    await expect (hasError).toBeVisible();
});

});