import { Locator, Page } from "@playwright/test"
 
export class AccountCreatedPage{

    getAccountCreatedText: Locator;
    getContinueButton: Locator;

    constructor(private page: Page)
    {
    //Locators
    this.getAccountCreatedText = page.getByText("Account Created!");
    this.getContinueButton = page.locator("//*[@data-qa='continue-button']");
    }


    public async navigate(){
        await this.page.goto('${baseUrl}'+'/account_created');
    }

    public async getElementByText(text:string){

        return this.page.getByText(text);
    }

}

export default AccountCreatedPage