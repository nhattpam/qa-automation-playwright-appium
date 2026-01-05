import { authContext } from "../test/support/hooks.api";

export class AuthAPI {
  async login(username: string, password: string) {
    return await authContext.post('/auth/login', {
      data: { username, password },
      headers: { 'Content-Type': 'application/json' }
    });
  }
}