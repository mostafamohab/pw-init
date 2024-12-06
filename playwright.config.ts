import { devices ,defineConfig} from '@playwright/test';

export default defineConfig ({
    workers: 8, // Increase the number of workers for parallel execution
    testDir: 'src',
    timeout: 35 * 1000,
    use: {
        baseURL: "https://www.automationexercise.com",
        headless: false,
        trace: 'on', // This will generate a trace for every test
        screenshot: 'only-on-failure',
        launchOptions: {
            slowMo: 50
        }
    },
    reporter : [
    ['html'],
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