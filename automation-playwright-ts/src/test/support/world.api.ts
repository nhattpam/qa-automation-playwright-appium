import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { APIResponse } from '@playwright/test';

export class ApiWorld extends World {
  response?: APIResponse;
  productId?: number;
  accessToken?: string; 
  
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(ApiWorld);
