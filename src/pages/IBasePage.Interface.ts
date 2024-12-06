// base-page.interface.ts
import { Locator, Page } from '@playwright/test';

export interface IBasePage {

  navigate(): Promise<void>;

  navigateGeneral(path: string): Promise<void>;
  
  getElementByText(text: string): Locator;
}