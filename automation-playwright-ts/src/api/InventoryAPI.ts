import { inventoryContext } from "../test/support/hooks.api";

export class InventoryAPI {
  async getInventory() {
    return await inventoryContext.get('/products');
  }
}
