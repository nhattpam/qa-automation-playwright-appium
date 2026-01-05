import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Selectors
  readonly logo: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly inventoryList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.login_logo');
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.inventoryList = page.locator('.inventory_list');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submitLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submitLogin();
  }

  async assertLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory/);
    await expect(this.inventoryList).toBeVisible();
  }

  async assertErrorVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }

  async assertLogoVisible(): Promise<void> {
    await expect(this.logo).toBeVisible();
  }

  async assertUsernameInputVisible(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
  }

  async assertPasswordInputVisible(): Promise<void> {
    await expect(this.passwordInput).toBeVisible();
  }

  async assertLoginButtonVisible(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }

  async getUsernamePlaceholder(): Promise<string> {
    return (await this.usernameInput.getAttribute('placeholder')) ?? '';
  }

  async getPasswordPlaceholder(): Promise<string> {
    return (await this.passwordInput.getAttribute('placeholder')) ?? '';
  }
  
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string> {
    await this.assertErrorVisible();
    return (await this.errorMessage.textContent())?.trim() ?? '';
  }
}
