import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../../support/world';
import { CartPage } from '../../../../pages/cart/CartPage';

Then('the cart title should be visible', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page);
  await cartPage.assertPageLoaded();
});

Then('the cart item should show name, price, description and quantity', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page);
  await cartPage.assertCartItemStructure();
});

Then('the checkout button should be visible', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page);
  await cartPage.assertCheckoutButtonVisible();
});
