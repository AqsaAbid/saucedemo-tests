class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstName = page.locator('#first-name');
      this.lastName = page.locator('#last-name');
      this.zipCode = page.locator('#postal-code');
      this.continueButton = page.locator('[data-test="continue"]');
      this.finishButton = page.locator('[data-test="finish"]');
      this.completeMessage = page.locator('.complete-header');
    }
  
    async fillCheckoutForm(first, last, zip) {
      await this.firstName.fill(first);
      await this.lastName.fill(last);
      await this.zipCode.fill(zip);
      await this.continueButton.click();
    }
  
    async completeCheckout() {
      await this.finishButton.click();
    }
  }
  
  module.exports = { CheckoutPage };
  