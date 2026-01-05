import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AuthAPI } from '../../../../api/AuthAPI';
import { ApiWorld } from '../../../support/world.api';

const authAPI = new AuthAPI();

Given('I loginn with username {string} and password {string}', async function (this: ApiWorld, username: string, password: string) {
 this.response = await authAPI.login(username, password);
  const body = await this.response.json();

  expect(this.response.status()).toBe(200);
  expect(body.accessToken).toBeTruthy();

  // Lưu token vào world
  this.accessToken = body.accessToken;
});
Then('the response should contain a token', async function (this: ApiWorld) {
  const body = await this.response?.json();
  expect(body.token).toBeTruthy();
});
