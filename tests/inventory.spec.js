const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // Wait until inventory page is fully loaded
  await expect(page).toHaveURL(/inventory/);
});

test('should add a single item to the cart', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addItem(0);
  await expect(inventory.cartBadge).toHaveText('1');
});

test('should add multiple items and verify cart count', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addItem(0);
  await inventory.addItem(1);
  await inventory.addItem(2);
  await expect(inventory.cartBadge).toHaveText('3');
});

test('should sort items by price (low to high)', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await expect(inventory.sortDropdown).toBeVisible({ timeout: 10000 });
  await inventory.sortDropdown.selectOption('lohi');
  await expect(inventory.inventoryItems.first()).toBeVisible();
});

test('should logout user', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('should navigate to cart page when clicking cart icon', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.cartIcon.click();
  await expect(page).toHaveURL(/cart/);
});
