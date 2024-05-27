import { test, expect,chromium } from '@playwright/test';
import { loginpage } from '../pages/login';
import { openPage } from '../pages/openpage';

test('open login', async () => {
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    const openpage1 = new openPage(page);
    await openpage1.openpage("https://working.kantimehealth.net/identity/v2/Accounts/Authorize");
});

test('login test', async ({ page }) => {
    const loginPage1 = new loginpage(page);
    await loginPage1.enterUsername("white@CKT.com");
    await loginPage1.enterPassword("test@1234");
    await loginPage1.loginClick()
});


test('test', async ({ page }) => {
    await page.goto('https://working.kantimehealth.net/identity/v2/Accounts/Authorize');
    await page.getByPlaceholder('User Name').fill('test');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('ysaada');
    await page.getByRole('button', { name: 'Login' }).click();
});