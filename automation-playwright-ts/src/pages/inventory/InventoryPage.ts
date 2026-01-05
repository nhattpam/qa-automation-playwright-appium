import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  // Static locators
  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  private productItem(productName: string): Locator {
    return this.page.locator('.inventory_item').filter({
      hasText: productName,
    });
  }

  async isLoaded(): Promise<boolean> {
    return await this.inventoryList.isVisible();
  }

  async assertPageLoaded(): Promise<void> {
    await expect(this.inventoryList).toBeVisible();
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.productItem(productName)
      .locator('button:has-text("Add to cart")')
      .click();
  }

  async removeProductFromCart(productName: string): Promise<void> {
    await this.productItem(productName)
      .locator('button:has-text("Remove")')
      .click();
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }

  async getCartBadgeCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      const text = await this.cartBadge.textContent();
      return Number(text ?? '0');
    }
    return 0;
  }

   async assertAllProductsHaveRequiredElements(): Promise<void> {
    const count = await this.inventoryItems.count();

    for (let i = 0; i < count; i++) {
      const product = this.inventoryItems.nth(i);
      await expect(product.locator('.inventory_item_name')).toBeVisible();
      await expect(product.locator('.inventory_item_desc')).toBeVisible();
      await expect(product.locator('.inventory_item_price')).toBeVisible();
      await expect(product.locator('button:has-text("Add to cart")')).toBeVisible();
    }
  }

  async assertCartIconVisible(): Promise<void> {
    await expect(this.cartLink).toBeVisible();
  }
}
