import { Selector } from 'testcafe';
import { LoginPage } from '../pages/login.js';
import userData from '../data/user.json';

const loginPage = new LoginPage();

fixture('Login tests')
  .page(LoginPage.URL);

test('Valid login', async t => {
  await loginPage.login(userData.usernames.standard, userData.password);
  await t.expect(Selector('.title').innerText).eql('Products');
  await t.expect(Selector('#inventory_container').exists).ok();
  await t.expect(await t.eval(() => window.location.href)).contains('inventory.html');
});

test('Invalid login', async t => {
  await loginPage.login('InvalidUsername', userData.password);
  await t.expect(Selector('#inventory_container').exists).notOk();
  await t.expect(loginPage.errorMessage).ok();
  await t.expect(await t.eval(() => window.location.href)).eql('https://www.saucedemo.com/');
});
