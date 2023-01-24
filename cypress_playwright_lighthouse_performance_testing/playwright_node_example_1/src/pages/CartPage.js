import Element from "../elements/CartPageElements";
let cartPage = new Element();

export default class CartPage {
  constructor(page) {
    this.page = page;
  }

  async iconCart() {
    await this.page.click(cartPage.element.iconCart);
  }

  async tocheckoutConfirmation() {
    await this.page.click(cartPage.element.tocheckoutConfirmation);
  }

  async cartPage() {
    return this.page.locator(cartPage.element.cartPage);
  }
}
