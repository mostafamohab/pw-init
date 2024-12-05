import { Locator, Page } from "@playwright/test"

export class AccountDeletedPage{

    getAccountDeletedText: Locator;
    getContinueButton: Locator;

    constructor(private page: Page)
    {
    //Locators
    this.getAccountDeletedText = page.getByText("Account Deleted!");
    this.getContinueButton = page.locator("//*[@data-qa='continue-button']");
    }

    public async getElementByText(text:string){

        return this.page.getByText(text);
    }

    public async verifyAccountDeleted() {
        await this.getAccountDeletedText.isVisible();
    }
}

export default AccountDeletedPage


