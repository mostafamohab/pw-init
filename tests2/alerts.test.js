import { test , expect , chromium } from "@playwright/test"

test("Accept Alerts",async({}) =>{
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

//Handle Accept Alert Dialog
page.on("dialog",async dialog => {
    console.log(dialog.message());
    await dialog.accept('Hi , i am trying to learn playwright');

});

//click on accpet alert then verify result
await page.getByText("Click for JS Alert").click();
expect(await page.locator('#result').innerText()).toContain("You successfully clicked an alert");

//click on confirm alert then verify result
await page.getByText("Click for JS Confirm").click();
expect(await page.locator('#result').innerText()).toContain("You clicked: Ok");


//click on prompt alert then add text "Hi , i am trying to learn playwright" then verify result
await page.getByText("Click for JS Prompt").click();
expect(await page.locator('#result').innerText()).toContain("You entered: Hi , i am trying to learn playwright");


})

test("Dismiss Alerts",async({}) =>{
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

//dismiss Alert
page.on("dialog",async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();

});

//confirm js and Verify Test Result
await page.getByText("Click for JS Confirm").click();
expect(await page.locator('#result').innerText()).toContain("You clicked: Cancel");

//click on prompt alert then verify result
await page.getByText("Click for JS Prompt").click();
expect(await page.locator('#result').innerText()).toContain("You entered: null");

})