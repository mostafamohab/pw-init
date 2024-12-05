import { test , expect , chromium } from "@playwright/test"

test("Add Product to Cart",async({}) =>{
  //1- generate Email Address and Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  //2- navigate to URL automationexercise.com"
  await page.goto("https://www.automationexercise.com/");

  //3- Add Item 'Men Tshirt' to Cart and Verify "Your product has been added to cart." is visible
  await page.locator("//a[@data-product-id='2']").nth(0).click();
  await expect (page.getByText("Your product has been added to cart.")).toBeVisible();

  //4- Click on Continue Shopping Button
  await page.getByRole("button",{name: 'Continue Shopping'}).click();

  //5- Add Item 'Stylish Dress' to Cart and Verify "Your product has been added to cart." is visible
  await page
  .locator('.productinfo')
  .filter({hasText:'Stylish Dress'})
  .locator('.add-to-cart')
  .nth(0)
  .click();

  await expect (page.getByText("Your product has been added to cart.")).toBeVisible();

  //6- Click on Continue Shopping Button
  await page.getByRole("button",{name: 'Continue Shopping'}).click();


  //7- Click on view product on item "Summer White Top" 
  await page
  .locator('.product-image-wrapper')
  .filter({hasText:'Summer White Top'})
  .locator('.choose')
  .filter({hasText:'View Product'})
  .click();

  expect( page.url()).toContain("product_details")
})