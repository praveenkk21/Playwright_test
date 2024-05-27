import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');
import { loginpage } from '../pages/login'
import { openPage } from '../pages/openpage'


let browser;
let context;
let page;
let loginPage;
let openpage;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    openpage = new openPage(page);
    loginPage = new loginpage(page);
});

test.afterAll(async () => {
    await browser.close();
});

test.describe('browser config', () => {

    test('Open main page and check title', async () => {
        await openpage.openpage("https://working.kantimehealth.net/identity/v2/Accounts/Authorize");
        await expect(page).toHaveTitle(/KanTime/);
    });

    test('Login test', async () => {
        await loginPage.enterUsername("white@CKT.com");
        await loginPage.enterPassword("test@1234");
        await loginPage.loginClick();
        await expect(page).toHaveTitle(/Medicare/);
        // Add additional assertions to verify successful login if needed
    });

});