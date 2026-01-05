import { Given, When } from '@cucumber/cucumber';
import { CartAPI } from '../../../../api/CartAPI';
import { ApiWorld } from '../../../support/world.api';

const cartAPI = new CartAPI();

Given('I have a product with id {int}', async function (this: ApiWorld, productId: number) {
  this.productId = productId;
});

When('I add the product to the cart', async function (this: ApiWorld) {
  if (!this.productId) throw new Error('Product ID is not defined');
  this.response = await cartAPI.addToCart(this.productId);
});