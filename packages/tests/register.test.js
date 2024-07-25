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


// testtt('registration', async ({page}) => {
//     const Registration = new RegistrationPage(page);
//
//     await Registration.open_register_page();
//     await page.waitForTimeout(1000);
//     await Registration.fill_email();
//     await page.waitForTimeout(1000);
//     await Registration.fill_password();
//     await page.waitForTimeout(1000);
//     await Registration.focus_email_field();
//     await page.waitForTimeout(1000);
//     await Registration.fill_confirm_password();
//     await page.waitForTimeout(1000);
//     await Registration.focus_email_field();
//     await page.waitForTimeout(1000);
//     await Registration.click_submit_button();
//     await page.waitForTimeout(4000);
//     await expect(page).toHaveURL('http://34.141.58.52:8080/#/profile');
// })