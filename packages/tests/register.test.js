const { test, expect} = require('@playwright/test');
const { RegistrationPage } = require('../pages/register_page');

test('registration - valid data', async ({page}) => {
    const Registration = new RegistrationPage(page);

    await Registration.open_register_page();
    await Registration.choose_seller_form();
    await page.waitForTimeout(2000);
    await Registration.fill_email_field();
    await page.waitForTimeout(2000);
    await Registration.fill_password_field();
    await page.waitForTimeout(2000);
    // await expect(Registration.email_field).toContainText('123@gmail.com');

})
