# Demo – Playwright Test Automation (TypeScript)

A test automation project built with **Playwright + TypeScript**, covering UI and API testing with Allure reporting and CI via GitHub Actions.

## Tech Stack
- Playwright (TypeScript)
- Node.js
- Allure Reports
- GitHub Actions (CI)

## Project Structure



## Prerequisites
- Node.js 18+
- npm

## Setup
```bash
git clone https://github.com/KarthikHoliga/demo.git
cd demo
npm install
npx playwright install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run a specific file
npx playwright test tests/<file-name>.spec.ts

# Run in headed mode
npx playwright test --headed
```

## Reports
```bash
# Playwright HTML report
npx playwright show-report

# Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## What's Covered
- UI automation of <your application / site>
- API testing for <endpoints>
- Data-driven tests, assertions, and reusable helpers

## Author
**Karthik Holiga** – QA Automation Engineer
