import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');
import { loginpage } from '../pages/login'
import { openPage } from '../pages/openpage'

test.only('broswer config',async()=>{
    const c= await chromium.launch();
    const context=await c.newContext();
    const page1= await context.newPage();
    const openpage = new openPage(page1)
    await openpage.openpage("https://working.kantimehealth.net/identity/v2/Accounts/Authorize")
    await expect(page1).toHaveTitle(/KanTime/);
    //await new Promise(() => {});
    const loginPage = new loginpage(page1)
    await page1.pause();
    await loginPage.enterUsername("white@CKT.com")
    await expect(loginPage.username).toHaveValue(/white@CKT.com/);
    await loginPage.enterPassword("test@1234")
    await loginPage.loginClick()
})

test("open login", ({ page }) => {
    const openpage = new openPage(page)
    openpage.openpage("https://working.kantimehealth.net/identity/v2/Accounts/Authorize")
});

test("login test", ({ page }) => {
    const loginPage = new loginpage(page)
    loginPage.enterUsername("white@CKT.com")
    loginPage.enterPassword("test@1234")
    loginPage.loginClick()
});