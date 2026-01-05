import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext, chromium } from 'playwright';
import { LoginPage } from '../../pages/authentication/LoginPage';
import { InventoryPage } from '../../pages/inventory/InventoryPage';
import { CartPage } from '../../pages/cart/CartPage';

// ... thêm nữa sau này

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;
  cartPage!: CartPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async initPages() {
    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
