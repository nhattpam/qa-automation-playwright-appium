import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  // Static locators
  readonly cartTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTitle = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  private productItem(productName: string): Locator {
    return this.cartItems.filter({ hasText: productName });
  }

  async isLoaded(): Promise<boolean> {
    return this.page.url().includes('cart.html');
  }

  async assertPageLoaded(): Promise<void> {
    await expect(this.cartTitle).toHaveText('Your Cart');
  }

  async getCartItems(): Promise<string[]> {
    const names: string[] = [];
    const itemNames = this.page.locator('.cart_item .inventory_item_name');
    const count = await itemNames.count();

    for (let i = 0; i < count; i++) {
      names.push((await itemNames.nth(i).textContent())?.trim() ?? '');
    }
    return names;
  }

  async assertCartItemStructure(): Promise<void> {
    await expect(this.cartItems.locator('.inventory_item_name')).toBeVisible();
    await expect(this.cartItems.locator('.inventory_item_desc')).toBeVisible();
    await expect(this.cartItems.locator('.inventory_item_price')).toBeVisible();
    await expect(this.cartItems.locator('.cart_quantity')).toBeVisible();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.productItem(productName)
      .locator('button:has-text("Remove")')
      .click();
  }

  async assertCheckoutButtonVisible(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
