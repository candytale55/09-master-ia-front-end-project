# Project Notes

Issues, decisions, and solutions documented throughout the project development.

---

## Video 01 - Setup Issues

### Issue: Blank Page When Using Tailwind CSS Classes

**Date:** February 1, 2026

**Problem:**
When implementing the ProductCard component with Tailwind CSS v4 classes, the browser displayed a completely blank page. The issue occurred specifically when:
- Importing the ProductCard component into App.tsx
- Using Tailwind utility classes (bg-white, rounded-lg, shadow-md, etc.)
- The app worked fine with plain text but broke when adding Tailwind-styled components

**Symptoms:**
- Browser showed blank page
- No console errors in browser DevTools
- Terminal showed no build errors
- App rendered correctly with inline styles or plain HTML
- Issue appeared only when importing components with Tailwind classes

**Root Cause:**
Two related issues:
1. **Default vs Named Exports**: Using default export for ProductCard caused module resolution issues
2. **Tailwind CSS Processing**: The dev server needed to be restarted for Tailwind CSS v4 to properly process utility classes

**Solution:**
1. Changed ProductCard from default export to named export:
   ```tsx
   // Before
   export default function ProductCard() { ... }
   
   // After
   export function ProductCard() { ... }
   ```

2. Updated all imports to use named imports:
   ```tsx
   // Before
   import ProductCard from './features/product-catalog/components/ProductCard'
   
   // After
   import { ProductCard } from './features/product-catalog/components/ProductCard'
   ```

3. Ensured type imports use the `type` keyword (required by `verbatimModuleSyntax: true`):
   ```tsx
   import type { Product } from './shared/types'
   ```

4. Restarted the dev server to ensure Tailwind CSS v4 properly processed all utility classes

**Prevention:**
- Use named exports for all components to avoid module resolution issues
- Always use `import type` for TypeScript types when `verbatimModuleSyntax` is enabled
- Restart dev server after major configuration changes (Tailwind, Vite plugins, etc.)

**Related Files:**
- `src/features/product-catalog/components/ProductCard.tsx`
- `src/features/product-catalog/components/ProductCard.test.tsx`
- `src/App.tsx`
- `vite.config.ts`
- `tsconfig.app.json`

---

### Issue: Outdated App Tests After UI Changes

**Date:** February 2, 2026

**Problem:**
Unit tests in [simple-product-shop/src/App.test.tsx](simple-product-shop/src/App.test.tsx) still targeted the default Vite template UI ("Vite + React" heading and "count is 0" button) after the app was updated to render the Product Shop page with ProductCard.

**Symptoms:**
- `pnpm test:run` failed with missing text and button assertions.
- Failures indicated the DOM contained Product Shop content, not the Vite template UI.

**Solution:**
- Replaced the outdated assertions with checks for the Product Shop heading and ProductCard content (sample product name, price, and "Add to Cart" button).

**Related Files:**
- [simple-product-shop/src/App.test.tsx](simple-product-shop/src/App.test.tsx)
- [simple-product-shop/src/App.tsx](simple-product-shop/src/App.tsx)
