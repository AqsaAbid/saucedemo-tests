const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Login Tests', () => {
  test('should load login page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await expect(login.usernameInput).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('invalid_user', 'wrong_pass');
    await expect(login.errorMessage).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(inventory.inventoryItems).toHaveCount(6);
  });
});
