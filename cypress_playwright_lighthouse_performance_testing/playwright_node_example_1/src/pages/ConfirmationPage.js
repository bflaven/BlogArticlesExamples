import Element from "../elements/ConfirmationPageElements";
let confirmationPage = new Element();

export default class ConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  async toFinishOrder(firstName, lastName, zipCode) {
    await this.page.fill(confirmationPage.element.firstName, firstName);
    await this.page.fill(confirmationPage.element.lastName, lastName);
    await this.page.fill(confirmationPage.element.zipCode, zipCode);

    await this.page.click(confirmationPage.element.continue);
  }

  async confirmationPage() {
    return this.page.locator(confirmationPage.element.confirmationPage);
  }
}
