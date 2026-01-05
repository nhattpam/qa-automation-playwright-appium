import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { request, APIRequestContext } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

let authContext: APIRequestContext;
let inventoryContext: APIRequestContext;
let cartContext: APIRequestContext;

BeforeAll(async () => {
  console.log('🔑 Loading API environment variables...');
  console.log('BASE_URL_AUTH:', process.env.BASE_URL_AUTH);
  console.log('BASE_URL_INVENTORY:', process.env.BASE_URL_INVENTORY);
  console.log('BASE_URL_CART:', process.env.BASE_URL_CART);

  authContext = await request.newContext({
    baseURL: process.env.BASE_URL_AUTH,
    extraHTTPHeaders: { 'Content-Type': 'application/json' }
  });

  inventoryContext = await request.newContext({
    baseURL: process.env.BASE_URL_INVENTORY,
    extraHTTPHeaders: { 'Content-Type': 'application/json' }
  });

  cartContext = await request.newContext({
    baseURL: process.env.BASE_URL_CART,
    extraHTTPHeaders: { 'Content-Type': 'application/json' }
  });

  console.log('🚀 API contexts initialized');
});

AfterAll(async () => {
  await authContext.dispose();
  await inventoryContext.dispose();
  await cartContext.dispose();
  console.log('✅ API contexts disposed');
});

export { authContext, inventoryContext, cartContext };
