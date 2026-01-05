# 🧪 SauceDemo UI & API Automation Testing

End-to-end UI testing project for [SauceDemo](https://www.saucedemo.com) and API testing for [DummyJSON] using **Playwright**, **Cucumber**, **TypeScript**, and **Page Object Model (POM)**.  

---

## 🧰 Tech Stack

- 🎭 Playwright – browser automation
- 🥒 Cucumber – BDD with Gherkin
- ⌨️ TypeScript – strict typing
- 📐 Page Object Model – reusable page abstraction
- 🧪 Playwright assertions
- 🔑 dotenv – environment variables management
---

## 📁 Project Structure

```
src/
├── api/                  # API endpoint classes
│   ├── AuthAPI.ts
│   ├── CartAPI.ts
│   └── InventoryAPI.ts
│
├── pages/                # Page Object Model (UI)
│   ├── authentication/   # LoginPage.ts
│   ├── inventory/        # InventoryPage.ts
│   └── cart/             # CartPage.ts
│
├── test/
│   ├── api/
│   │   ├── features/     # API feature files
│   │   └── steps/        # API step definitions
│   │       └── common/   # Common reusable steps
│   ├── ui/
│   │   ├── features/     # UI feature files
│   │   └── steps/        # UI step definitions
│   └── support/
│       ├── world.ts      # UI context
│       ├── world.api.ts  # API context
│       ├── hooks.ts      # Shared hooks
│       └── hooks.api.ts  # API-specific hooks
│
├── .env                  # Environment variables
└── cucumber.js           # Cucumber configuration

```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run all UI tests or E2E tests

```bash
npx cucumber-js --tags "@ui" or npx cucumber-js --tags "@e2e"
```
### 3. Run all API tests

```bash
npx cucumber-js --tags "@api"
```

### 4. Run a specific feature

```bash
npx cucumber-js src/test/ui/features/authentication/login.feature
npx cucumber-js src/test/api/features/authentication/login.feature

```

### 5. Run tests by multiple tags

```bash
npx cucumber-js --tags "@login and @api"
npx cucumber-js --tags "@inventory and @api"

```
---

## ✅ Features Covered

| Feature      | Description                                  |
|--------------|----------------------------------------------|
| `login`      | Valid/invalid login, locked-out user         |
| `inventory`  | Add/remove items, verify product listing     |
| `cart`       | Cart add/remove, checkout button             |
| `UI checks`  | Verify UI elements across pages              |

---

## 💡 Sample Scenario

```gherkin
Scenario: Add a product to cart
  Given I am on the SauceDemo login page
  When I login with username "standard_user" and password "secret_sauce"
  And I add "Sauce Labs Backpack" to the cart
  Then the cart badge should show 1
```

---

## 📌 Notes

- SauceDemo is a **UI-only demo site**.
- DummyJSON is a **Fake API testing**.
- This project is for **demo, practice, and portfolio use**.
- Followed **Page Object Model (POM)** for clean architecture.

---

## 📄 License

Nhat Pham (https://www.linkedin.com/in/nhattpam02/)
