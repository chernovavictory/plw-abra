exports.RegistrationPage = class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.role_toggle_seller = page.locator('//*[@id="root"]/div/div/div/form/div[1]/button[2]');
        this.email_field = page.locator('//*[@id="root"]/div/div/div/form/div[2]/input');
        this.password_field = page.locator('//*[@id="root"]/div/div/div/form/div[3]/input');
    }

    async open_register_page() {
        this.page.goto('https://dev.abra-market.com/register');
        await this.page.waitForSelector('#root > div > div > div > form > div.RegisterForm_buttons_container_user_role__odHqW > button.Button_button__-\\+nph.Button_white__PFVOl.RegisterForm_button_user_role__ax6bX');
    }

    async choose_seller_form() {
        this.role_toggle_seller.click();
    }

    async fill_email_field() {
        this.email_field.focus();
        this.email_field.fill('jonive7823@hostlace.com');
    }

    async fill_password_field() {
        this.password_field.focus();
        this.password_field.fill('Password1!')
    }
}