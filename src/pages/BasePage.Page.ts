import { Locator, Page } from '@playwright/test';
import { IBasePage } from './IBasePage.Interface';

// base-page.ts
export class BasePage implements IBasePage {
  // Define shared properties
  protected baseUrl: string = 'https://www.automationexercise.com'; // Define a default base URL

  // Define locators

  constructor(protected page: Page) {
    // Initialize locators
  
  }

  // Define shared methods
  public async navigate(): Promise<void> {
    await this.page.goto(this.baseUrl);
  }

  public async navigateGeneral(path: string): Promise<void> {
    await this.page.goto(`${this.baseUrl}${path}`);
  }

  public getElementByText(text: string): Locator {
    return this.page.locator(`text=${text}`);
  }
}