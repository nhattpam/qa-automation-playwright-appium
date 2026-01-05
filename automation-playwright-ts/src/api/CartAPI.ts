import { cartContext } from "../test/support/hooks.api";

export class CartAPI {
  async addToCart(productId: number) {
    return await cartContext.post('/carts/add', {
      data: {
        userId: 1,
        products: [{ id: productId, quantity: 1 }]
      }
    });
  }
}