exports.loginpage = class loginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator('id=txt_username')
        this.password = page.locator('id=txt_password')
        this.login = page.locator('id=btn_login')
    }

    async enterUsername(username) {
        await this.username.fill(username)
    }

    async enterPassword(password) {
        await this.password.fill(password)
    }

    async loginClick() {
        await this.login.click()

    }
}