const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let loginPage;
const env = config.default.use.env;


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test('Login with valid data', async ({ page }) => {
        await loginPage.login('anna.kochura@gmail.com', 'Klever2020@');
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
    });
    test('Click on Sign up link', async ({ page }) => {
        await loginPage.signUpLink.click();
        //await expect(page.locator("[class='logo']")).toBeVisible;
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });

});
