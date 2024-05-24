import { test, expect } from 'playwright@test'
import { loginpage } from '../pages/login'
import { openPage } from '../pages/openpage'

test.beforeAll("open login", ({ page }) => {
    const openpage = new openPage(page)
    openpage.openpage("https://working.kantimehealth.net/identity/v2/Accounts/Authorize")
});

test("login test", ({ page }) => {
    const loginPage = new loginpage(page)
    loginPage.enterUsername("white@CKT.com")
    loginPage.enterPassword("test@1234")
    loginPage.loginClick()
});