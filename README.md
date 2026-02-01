# Master en Desarrollo con IA - Frontend Project

## 📚 Learning Project Overview

This repository contains a comprehensive frontend development project built as part of **Big School's Master en Desarrollo con IA** program. It's a hands-on learning experience applying modern web development practices with AI-assisted development.

## 🎯 Project Goal

**Simple Product Shop** - A fully functional e-commerce platform demonstrating:
- Test-Driven Development (TDD) best practices
- Component-based architecture with proper scope organization
- Business logic implementation (discounts, cart management)
- Authentication and security
- End-to-end testing
- Code quality standards and CI/CD integration

## 💻 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (fast development & optimized builds)
- **Styling**: Tailwind CSS v4
- **Testing**: 
  - Unit/Integration: Vitest + Testing Library
  - E2E: Playwright
- **Code Quality**: ESLint + SonarJS
- **Package Manager**: pnpm
- **Monitoring**: Sentry (error tracking)
- **Git Hooks**: Husky (quality gates on commit/push)

## 📁 Project Structure

The actual project code is located in:

```
simple-product-shop/
├── src/
│   ├── shared/          # Reusable components, types, utilities
│   ├── features/        # Feature-specific components
│   ├── context/         # Global state management
│   └── infrastructure/  # External services (Sentry, etc.)
├── e2e/                 # Playwright end-to-end tests
└── vitest.config.ts     # Test configuration
```

##  Key Features by Video Deliverable

| Video | Deliverable |
|-------|-------------|
| 01 | Project setup, Tailwind v4, Vitest, ProductCard TDD |
| 02 | Product types, ProductCatalog component |
| 03 | Business logic (pricing, discounts) |
| 04 | Cart components (CartItem, CartSummary) |
| 05 | CartContext with useReducer, localStorage |
| 06 | Discount strategies pattern |
| 07 | Playwright E2E testing |
| 08 | ESLint, code quality, context refactoring |
| 09 | Authentication & password validation |
| 10 | Accessibility (a11y), Skeleton, Toast components |
| 11 | Sentry integration, error boundaries |
| 12 | Git hooks, CI/CD gates |

## ✅ Quality Standards

All code must pass validation:
- ✅ 0 lint errors
- ✅ 0 TypeScript errors
- ✅ ~89 unit/integration tests passing
- ✅ 7 E2E tests passing
- ✅ Successful production build

Run `pnpm verify` to validate everything before completing a feature.

## 📖 Learning Approach

This project follows **TDD (Test-Driven Development)**:
1. Write test FIRST → Run → MUST FAIL (RED)
2. Implement MINIMUM code to pass (GREEN)
3. Refactor keeping tests green (REFACTOR)

## 📝 Notes

- All components follow the **Scope Rule**: `src/shared/` for reusable code, `src/features/X/` for feature-specific code
- Context is split into 3 files following react-refresh best practices
- Git workflows use Husky to enforce code quality gates
- The project uses AI assistance as a learning tool while maintaining rigorous development standards

---

**Start Date**: February 2026  
**Program**: Master en Desarrollo con IA - Big School
