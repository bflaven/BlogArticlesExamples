import Element from "../elements/OrderPageElements";
let orderPage = new Element();

export default class OrderPage {
  constructor(page) {
    this.page = page;
  }

  async finish() {
    await this.page.click(orderPage.element.finish);
  }

  async resumeOrderPage() {
    return this.page.locator(orderPage.element.orderPage);
  }

  async finishOrderPage() {
    return this.page.locator(orderPage.element.orderPage);
  }
}
