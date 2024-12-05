import { devices ,defineConfig} from '@playwright/test';

export default defineConfig ({
    testDir: 'src',
    timeout: 35 * 1000,
    use: {
        baseURL: "https://www.automationexercise.com",
        headless: false,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 50
        }
    },
    reporter : [
    ['html'],
    [
        "allure-playwright",
        {
          open: "always",
          outputFolder: "reports/allure-results",
          detail: true
        }
    ],
    ],

    projects: [
        {
          name: 'chrome',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'MicrosoftEdge',
          use: { ...devices['Desktop Edge'] },
        },
      ],
});