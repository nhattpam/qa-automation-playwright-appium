import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';


Then('the inventory list should be visible', async function (this: CustomWorld) {
  const isVisible = await this.inventoryPage.isLoaded();
  expect(isVisible).toBe(true);
});

When('I add {string} to the cart', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.addProductToCart(productName);
});

When('I remove {string} from the cart', async function (this: CustomWorld, productName: string) {
  await this.inventoryPage.removeProductFromCart(productName);
});

Then('the cart badge should show {int}', async function (this: CustomWorld, expectedCount: number) {
  const count = await this.inventoryPage.getCartBadgeCount();
  expect(count).toBe(expectedCount);
});

When('I click the cart icon', async function (this: CustomWorld) {
  await this.inventoryPage.goToCart();
});

Then('I should be redirected to the cart page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*cart\.html/);
});
