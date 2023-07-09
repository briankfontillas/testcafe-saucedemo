import { Selector, t } from 'testcafe';

export class LoginPage {
  static URL = 'https://saucedemo.com';

  constructor() {
    this.username = Selector('[data-test="username"]');
    this.password = Selector('[data-test="password"]');
    this.loginBtn = Selector('[data-test="login-button"]');
    this.errorMessage = Selector('[data-test="error"]');
  }

  async login(user, pw) {
    await t
      .typeText(this.username, user, { paste: true })
      .typeText(this.password, pw, { paste: true });
    await t.click(this.loginBtn);
  }
}