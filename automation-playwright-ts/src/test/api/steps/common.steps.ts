// src/test/api/steps/common/common.steps.ts
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('the response status should be {int}', async function (statusCode: number) {
  expect(this.response?.status()).toBe(statusCode);
});

Then('the response header {string} should contain {string}', async function (headerName: string, expectedValue: string) {
  const header = this.response?.headers()[headerName.toLowerCase()];
  expect(header).toContain(expectedValue);
});

Then('the response body should have property {string}', async function (propertyName: string) {
  const body = await this.response?.json();
  expect(body).toHaveProperty(propertyName);
});