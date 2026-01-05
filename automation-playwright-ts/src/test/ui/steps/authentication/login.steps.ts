import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';


Given('I am on the SauceDemo login page', async function (this: CustomWorld) {
  await this.launchBrowser();
  await this.initPages();
  await this.loginPage.goto();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async function (this: CustomWorld) {
  await this.loginPage.assertLoginSuccess();
});

Then('I should see an error message containing {string}', async function (this: CustomWorld, expected: string) {
  const message = await this.loginPage.getErrorMessage();
  expect(message.toLowerCase()).toContain(expected.toLowerCase());
});
