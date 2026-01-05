import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';
import { LoginPage } from '../../../../pages/authentication/LoginPage';

Then('I should see the SauceDemo logo', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.assertLogoVisible();
});

Then('I should see the username input', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.assertUsernameInputVisible();
});

Then('I should see the password input', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.assertPasswordInputVisible();
});

Then('I should see the login button', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.assertLoginButtonVisible();
});

Then('the username placeholder should be {string}', async function (this: CustomWorld, expected: string) {
  const loginPage = new LoginPage(this.page);
  expect(await loginPage.getUsernamePlaceholder()).toBe(expected);
});

Then('the password placeholder should be {string}', async function (this: CustomWorld, expected: string) {
  const loginPage = new LoginPage(this.page);
  expect(await loginPage.getPasswordPlaceholder()).toBe(expected);
});

When('I click the login button', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLoginButton();
});
