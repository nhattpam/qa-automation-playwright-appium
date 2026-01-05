import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../../support/world';
import { InventoryPage } from '../../../../pages/inventory/InventoryPage';

Then(
  'each product card should show a name, description, price and Add to cart button',
  async function (this: CustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.assertAllProductsHaveRequiredElements();
  }
);

Then('the shopping cart icon should be visible', async function (this: CustomWorld) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.assertCartIconVisible();
});
