import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';

Then('the cart should contain {string}', async function (this: CustomWorld, productName: string) {
  const items = await this.cartPage.getCartItems();
  expect(items).toContain(productName);
});

Then('the cart should not contain {string}', async function (this: CustomWorld, productName: string) {
  const items = await this.cartPage.getCartItems();
  expect(items).not.toContain(productName);
});

When('I remove {string} from the cart in cart page', async function (this: CustomWorld, productName: string) {
  await this.cartPage.removeProduct(productName);
});

When('I click the checkout button', async function (this: CustomWorld) {
  await this.cartPage.clickCheckout();
});

Then('I should be redirected to the checkout page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
});
