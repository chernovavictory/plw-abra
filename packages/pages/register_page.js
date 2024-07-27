const timeOut = 200;
exports.RegistrationPage = class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.email_field = page.locator('//*[@id="root"]/div/div/div/form/div[2]/input');
        this.password_field = page.locator('//*[@id="root"]/div/div/div/form/div[3]/input');
        this.submit_btn = page.locator('//*[@id="root"]/div/div/div/form/button');
    }

    async open_register_page() {
        this.page.goto('https://dev.abra-market.com/register');
        await this.page.waitForSelector('#root > div > div > div > form > div.RegisterForm_buttons_container_user_role__odHqW > button.Button_button__-\\+nph.Button_white__PFVOl.RegisterForm_button_user_role__ax6bX');
    }

    async fill_email_field() {
        this.email_field.focus();
        this.email_field.fill('123@gmail.com');
        await this.page.waitForTimeout(timeOut);
    }

    async fill_password_field() {
        this.password_field.focus();
        this.password_field.fill('Password1!')
        await this.page.waitForTimeout(timeOut);
    }

    async click_submit_btn() {
        this.submit_btn.click();
        await this.page.waitForTimeout(1000);
    }
}