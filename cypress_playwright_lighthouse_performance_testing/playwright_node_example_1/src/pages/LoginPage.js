import Element from "../elements/LoginPageElements";
let loginPage = new Element();

export default class Login {
  constructor(page) {
    this.page = page;
  }

  async user(userName, password) {
    await this.page.fill(loginPage.element.userName, userName);
    await this.page.fill(loginPage.element.password, password);
    await this.page.click(loginPage.element.loginButton);
  }
}
