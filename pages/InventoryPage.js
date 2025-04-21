class InventoryPage {
    constructor(page) {
      this.page = page;
      this.inventoryItems = page.locator('.inventory_item');
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
      this.cartIcon = page.locator('.shopping_cart_link');
      this.sortDropdown = page.locator('[data-test="product-sort-container"]');
      this.menuButton = page.locator('#react-burger-menu-btn');
      this.logoutLink = page.locator('#logout_sidebar_link');
    }
  
    async addItem(index) {
      await this.addToCartButtons.nth(index).click();
    }
  
    async logout() {
      await this.menuButton.click();
      await this.logoutLink.click();
    }
  }
  
  module.exports = { InventoryPage };
  