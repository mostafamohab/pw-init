import { test, expect, chromium, Browser } from "@playwright/test"

import HomePage from "../pages/Home.Page";
import LoginPage from "../pages/Login.Page";

let loginPage: LoginPage;
let homePage: HomePage;
let browser: Browser;

test.beforeEach(async({page}) => {

// Launch browser and create new page instance before each test
browser = await chromium.launch({ headless: false }); 
// Change to true for headless mode
page = await browser.newPage();


loginPage = new LoginPage(page);
homePage = new HomePage(page);
await loginPage.navigate();

})


test.describe("Login User", async() => {
test('user can login with valid credentials', async() => {

    // Write Valid Credentials then Submit
    await loginPage.login('mohamed999@gmail.com','Password123');


    const isLoggedIn = await homePage.getElementByText(' Logged in as Mohamed');
    
    // Verify that "Logged in as username" is visible
    expect(isLoggedIn).toBeVisible();

});

test('user can login with invalid credentials', async() => {

    // Write Invalid Credentials then Submit
    await loginPage.login('mohamed999345@gmail.com','Password123');

    const hasError= await loginPage.getElementByText('Your email or password is incorrect!');

    // Verify that "Your email or password is incorrect" is visible
    expect (hasError).toBeVisible();
});

});