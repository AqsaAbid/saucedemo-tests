class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = page.locator('.cart_item');
      this.removeButtons = page.locator('button[data-test^="remove"]');
      this.checkoutButton = page.locator('[data-test="checkout"]');
    }
  
    async removeItem(index) {
      await this.removeButtons.nth(index).click();
    }
  
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };
  