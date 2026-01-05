import { When } from '@cucumber/cucumber';
import { InventoryAPI } from '../../../../api/InventoryAPI';
import { ApiWorld } from '../../../support/world.api';

const inventoryAPI = new InventoryAPI();

When('I request the inventory list', async function (this: ApiWorld) {
  this.response = await inventoryAPI.getInventory();
});
