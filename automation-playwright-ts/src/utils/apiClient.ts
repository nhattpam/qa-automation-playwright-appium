import { request, APIRequestContext } from '@playwright/test';

export class APIClient {
  static async createClient(baseURL: string): Promise<APIRequestContext> {
    return await request.newContext({
      baseURL,
      extraHTTPHeaders: { 'Content-Type': 'application/json' }
    });
  }
}
