const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
});

test('should display added items in cart', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  await inventory.addItem(0);
  await inventory.cartIcon.click();
  await expect(cart.cartItems).toHaveCount(1);
});

test('should remove item from cart', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  await inventory.addItem(0);
  await inventory.cartIcon.click();
  await cart.removeItem(0);
  await expect(cart.cartItems).toHaveCount(0);
});
