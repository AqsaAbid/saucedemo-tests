# 🚀 UI Test Automation with Playwright (SauceDemo.com)

This project automates UI test scenarios for [https://www.saucedemo.com](https://www.saucedemo.com) using **Playwright** with **JavaScript**. It covers real-world e-commerce workflows such as login, product selection, cart, sorting, and checkout.

---

## 📁 Project Structure

```
saucedemo-tests/
├── pages/                # Page Object Model classes
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/                # Automated test specs
│   ├── login.spec.js
│   ├── inventory.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── playwright.config.js  # Playwright configuration
├── package.json          # Dependencies
└── README.md             # Project documentation (this file)
```

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) – automation framework
- JavaScript (ES6)
- Node.js (>=16)

---

## 👤 Test Credentials (SauceDemo)

Use the following credentials — no signup required:

- **Username:** `standard_user`
- **Password:** `secret_sauce`

---

## 🧪 Test Coverage (11 Unique Test Cases)

- Login (valid and invalid)
- Inventory items validation
- Add/remove items to cart
- Product sorting by price
- Navigation between cart, inventory, and checkout
- Checkout form validation
- Full end-to-end checkout
- Menu toggle and logout functionality
- Cart navigation from header

---

## 📦 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/saucedemo-tests.git
cd saucedemo-tests
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running the Tests

### Run all tests in headless mode (default)

```bash
npx playwright test
```

### Run all tests in headed mode (browser visible)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/inventory.spec.js
```

### Use Playwright’s interactive test runner

```bash
npx playwright test --ui
```

---

## ✅ Project Highlights

- Uses **Page Object Model (POM)** design pattern
- Tests run **only on Chromium** as configured
- No retries or exotic frameworks used
- HTML report generated automatically after each run

---

## 🔗 License / Usage

This project is for educational and demo purposes, using a publicly available test site created by Sauce Labs.
