const config = {
    testDire: 'src',
    timeout: 35 * 1000,
    use: {
        baseURL: "https://www.automationexercise.com",
        headless: false,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        launchOption: {
            slowMo: 50
        }
    },
    reporter : 'html'
};


export default config;