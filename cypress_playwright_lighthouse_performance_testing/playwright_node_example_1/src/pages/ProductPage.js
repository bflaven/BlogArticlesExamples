import Element from "../elements/ProductPageElements";
let productPage = new Element();

export default class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async add() {
    await this.page.click(productPage.element.add);
  }

  async productPage() {
    return this.page.locator(productPage.element.productPage);
  }
}
