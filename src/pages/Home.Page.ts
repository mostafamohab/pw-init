import { Locator, Page } from "@playwright/test";

export class HomePage{
    getDeleteAccountButton: Locator;

    constructor(private page: Page)
    {
    //Locators
    this.getDeleteAccountButton= page.getByRole('link',{name : 'Delete Account'});
    }
    //Methods

    public async navigate(){
      await this.page.goto('${baseUrl}');
    }

    public async navigateGeneral(path:any){
      await this.page.goto('${this.BaseURL}${path}');
    }

    public async getElementByText(text:string){

      return this.page.getByText(text);
    }
}

export default HomePage