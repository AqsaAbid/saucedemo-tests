const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('should complete the checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.addItem(0);
  await inventory.cartIcon.click();
  await cart.proceedToCheckout();
  await checkout.fillCheckoutForm('John', 'Doe', '12345');
  await checkout.completeCheckout();
  await expect(checkout.completeMessage).toHaveText('Thank you for your order!');
});
