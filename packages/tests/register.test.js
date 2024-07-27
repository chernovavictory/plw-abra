const { test, expect} = require('@playwright/test');
const { RegistrationPage } = require('../pages/register_page');

test('registration - valid data', async ({page}) => {
    const Registration = new RegistrationPage(page);

    await Registration.open_register_page();
    await Registration.fill_email_field();
    await Registration.fill_password_field();
    await Registration.click_submit_btn();

    await expect(Registration.email_field).not.toBeVisible();
});

test('registration - invalid data')
