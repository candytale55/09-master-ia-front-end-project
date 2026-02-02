# Video 1: Setup + Primer Componente (15 min)

## Resultado Final
Proyecto React funcionando con ProductCard testeado.

---

## Paso 1: Crear Proyecto

```bash
pnpm create vite@latest simple-product-shop --template react-ts
cd simple-product-shop
pnpm install
pnpm install -D tailwindcss @tailwindcss/vite
```

### Prompt used:

```bash
I want you to create a new folder to start building a project. This will represent an e-commerce site with a shopping cart. Read the @AGENTS.md file to understand what it’s about and how to do it. But to start, after creating that folder, run:

pnpm create vite@latest simple-product-shop --template react-ts
cd simple-product-shop
pnpm install
pnpm install -D tailwindcss @tailwindcss/vite
```


---

## Paso 2: Configurar Tailwind

**Prompt para la IA:**
```
Estoy configurando un proyecto Vite con React y TypeScript.
Necesito integrar Tailwind CSS v4.

Requisitos:
- Usar el plugin @tailwindcss/vite
- Configurar el archivo vite.config.ts
- Actualizar src/index.css con el import de Tailwind

Dame los archivos modificados.
```

### Prompt used

```bash
I am setting up a Vite project with React and TypeScript.
I need to integrate Tailwind CSS v4.

Requirements:
- Use the @tailwindcss/vite plugin
- Configure the vite.config.ts file
- Update src/index.css with the Tailwind import

Give me the modified files.
```

---

## Paso 3: Configurar Testing

```bash
pnpm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8
```

### Prompt used

I installed it manually. 

```bash
pnpm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8
```


**Prompt para la IA:**
``` 
Necesito configurar Vitest para testing de componentes React.

Requisitos:
- Usar jsdom como environment
- Configurar setupFiles para jest-dom
- Agregar scripts en package.json: "test", "test:run", "test:coverage"

El proyecto usa Vite + React + TypeScript.
```

### Prompt used 

```bash
I need to configure Vitest for testing React components.

Requirements:
- Use jsdom as the environment
- Configure setupFiles for jest-dom
- Add scripts to package.json: "test", "test:run", "test:coverage"

The project uses Vite + React + TypeScript.
```

**Verificar**:
```bash
pnpm test
```

---

## Paso 3.1: Configurar tsconfig para Build (IMPORTANTE)

**Prompt para la IA:**
```
Necesito excluir los archivos de test del build de producción en TypeScript.

El problema: cuando hago pnpm build, TSC intenta compilar archivos .test.ts 
y .test.tsx que usan globals de Vitest (describe, it, expect).

Modifica tsconfig.app.json para excluir estos archivos del build.
```

### Prompt used

```bash
I need to exclude test files from the production build in TypeScript.

The problem: when I run pnpm build, TSC tries to compile .test.ts
and .test.tsx files that use Vitest globals (describe, it, expect).

Modify tsconfig.app.json to exclude these files from the build.
```

---

## Paso 4: Estructura de Carpetas (The Scope Rule)

### Concepto: La Regla del Scope

Organizamos el código siguiendo el mismo concepto de **scope** de JavaScript:

```javascript
// Global Scope - disponible en toda la app
let globalVariable = 'Available everywhere';

// Local Scope - solo disponible en su contexto
function localContext() {
  let localVariable = 'Available only here';
}
```

**Aplicado a la arquitectura:**

| Tipo | Ubicación | Visibilidad | Ejemplos |
|------|-----------|-------------|----------|
| **Global Scope** | `src/shared/` | Toda la app | Button, Modal, formatPrice, types |
| **Local Scope** | `src/features/X/` | Solo en feature X | ProductCard, CartItem, CartService |

**Beneficios:**
- 🧩 **Modularidad**: Cada feature es independiente
- ♻️ **Reuso eficiente**: Componentes globales sin redundancia
- ⚡ **Lazy loading**: Features locales se cargan solo cuando se necesitan
- 🔍 **Claridad**: Sabes dónde buscar cada cosa

---

**Prompt para la IA:**
```
Crea la estructura de carpetas para una aplicación e-commerce 
siguiendo la "Scope Rule":

GLOBAL SCOPE (src/shared/) - Disponible en toda la app:
- types/       → Tipos TypeScript compartidos
- utils/       → Funciones de utilidad (formatPrice, etc.)
- constants/   → Constantes de negocio
- components/  → Componentes UI genéricos (Button, Modal, Skeleton)
- hooks/       → Custom hooks reutilizables

LOCAL SCOPE (src/features/) - Específico de cada funcionalidad:
- product-catalog/
  - components/   → ProductCard, ProductCatalog
- shopping-cart/
  - components/   → CartItem, CartSummary, ShoppingCart

ESTADO GLOBAL:
- src/context/    → Contexts de React (CartContext)

INFRAESTRUCTURA:
- src/infrastructure/  → Servicios externos (Sentry, API clients)
- src/test/           → Configuración de tests

Crea archivos index.ts vacíos donde sea necesario para los exports.
```

### Prompt Used

```bash
Create the folder structure for an e-commerce application
following the “Scope Rule”:

GLOBAL SCOPE (src/shared/) – Available throughout the app:
- types/       → Shared TypeScript types
- utils/       → Utility functions (formatPrice, etc.)
- constants/   → Business constants
- components/  → Generic UI components (Button, Modal, Skeleton)
- hooks/       → Reusable custom hooks

LOCAL SCOPE (src/features/) – Specific to each feature:
- product-catalog/
  - components/   → ProductCard, ProductCatalog
- shopping-cart/
  - components/   → CartItem, CartSummary, ShoppingCart

GLOBAL STATE:
- src/context/    → React contexts (CartContext)

INFRASTRUCTURE:
- src/infrastructure/  → External services (Sentry, API clients)
- src/test/            → Test configuration

Create empty index.ts files where necessary for exports.
```

### Estructura Resultante

```
src/
├── shared/                    # 🌍 GLOBAL SCOPE
│   ├── types/
│   │   └── index.ts          # Product, CartItem
│   ├── utils/
│   │   └── index.ts          # formatPrice, calculateSubtotal
│   ├── constants/
│   │   └── businessRules.ts  # Reglas de negocio
│   ├── components/
│   │   └── index.ts          # Button, Skeleton, Toast
│   └── hooks/
│       └── index.ts          # useLocalStorage, etc.
│
├── features/                  # 📦 LOCAL SCOPE
│   ├── product-catalog/
│   │   ├── components/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.test.tsx
│   │   └── ProductCatalog.tsx
│   │
│   └── shopping-cart/
│       ├── components/
│       │   ├── CartItem.tsx
│       │   └── CartSummary.tsx
│       └── ShoppingCart.tsx
│
├── context/                   # 🔄 ESTADO GLOBAL
│   └── CartContext.tsx
│
├── infrastructure/            # 🔧 SERVICIOS EXTERNOS
│   └── sentry.ts
│
└── test/                      # 🧪 CONFIG DE TESTS
    └── setup.ts
```

### Regla Simple para Decidir

> **¿Lo usa más de una feature?** → `shared/` (Global Scope)
> 
> **¿Solo lo usa una feature?** → `features/X/` (Local Scope)

---

## Paso 5: TDD - ProductCard

### 5.1 Test Primero (RED)

**Prompt para la IA:**
```
Voy a crear un componente ProductCard usando TDD.
El componente NO existe todavía - necesito el test primero.

Requisitos del componente:
- Recibe un producto con: id, name, price, image
- Recibe un callback onAddToCart
- Muestra el nombre del producto
- Muestra el precio formateado como $XX.XX
- Tiene un botón "Add to Cart" que llama onAddToCart con el producto

Ubicación del test: src/features/product-catalog/components/ProductCard.test.tsx

Genera SOLO el archivo de test. El componente lo implementaré después
de ver que el test falla.
```

### Prompt Used

<!-- TODO: IMPORTANT RULE - COPY FOR FUTURE USE -->

```bash
I am going to create a ProductCard component using TDD.
The component does NOT exist yet — I need the test first.

Component requirements:
- Receives a product with: id, name, price, image
- Receives an onAddToCart callback
- Displays the product name
- Displays the price formatted as $XX.XX
- Has an "Add to Cart" button that calls onAddToCart with the product

Test location: src/features/product-catalog/components/ProductCard.test.tsx

Generate ONLY the test file. I will implement the component later
after seeing the test fail.

```

**Ejecutar (debe fallar)**:
```bash
pnpm test ProductCard
```

### 5.2 Implementar (GREEN)

**Prompt para la IA:**
```
Tengo este test fallando para ProductCard:

[Pegar el contenido del test generado]

Implementa el componente ProductCard.tsx que pase todos los tests.

Ubicación: src/features/product-catalog/components/ProductCard.tsx

Requisitos adicionales:
- Estilos con Tailwind (card con sombra, hover en botón)
- Código mínimo para pasar los tests, nada más
```

<!-- TODO: IMPORTANT RULE - COPY FOR FUTURE USE -->

### Prompt used:

```bash
I have this failing test for ProductCard:

[Paste the contents of the generated test]

Implement the ProductCard.tsx component so that it passes all the tests.

Location: src/features/product-catalog/components/ProductCard.tsx

Additional requirements:
- Styles with Tailwind (card with shadow, button hover)
- Minimal code to pass the tests, nothing more
```
NOTE: I copied the whole content of ProductCard.test.tsx into the prompt.

**Ejecutar (debe pasar)**:
```bash
pnpm test ProductCard
```

---

## Paso 6: Ver en Browser

**Prompt para la IA:**
```
Modifica App.tsx para mostrar un ProductCard de prueba.

Requisitos:
- Importar ProductCard
- Renderizar uno con datos hardcodeados (cualquier producto de ejemplo)
- El onAddToCart puede ser un console.log por ahora
```

### Prompt used:

```bash
Modify App.tsx to display a test ProductCard.

Requirements:
- Import ProductCard
- Render one with hardcoded data (any example product)
- onAddToCart can be a console.log for now
```

**Verificar**:
```bash
pnpm dev
# Abrir http://localhost:5173
```

There were issues, see [Issue: Blank Page When Using Tailwind CSS Classes](/docs/notes.md#issue-blank-page-when-using-tailwind-css-classes).

After fixing them: 

![Product Sample Card](/docs/shots/scsh-01%20sample%20product%20card.png)

---

## Paso 7: Verificación Final

```bash
# Ejecutar TODOS estos comandos - todos deben pasar
pnpm test:run      # Tests unitarios
pnpm build         # Build exitoso (verifica que tsconfig excluye tests)
```

### Promt used:

```bash
# Run ALL of these commands — all must pass
pnpm test:run      # Unit tests
pnpm build         # Successful build (verify that tsconfig excludes tests)
```

There was an issue that with outdated tests explained in notes.md [Issue: Outdated App tests after UI changes](/docs/notes.md#issue-outdated-app-tests-after-ui-changes)

> ⚠️ **IMPORTANTE**: A partir de este video, SIEMPRE verificar con estos comandos antes de dar por completado cualquier feature.

---

## Checkpoint

Al final del video tienes:
- ✅ Proyecto Vite + React + TypeScript
- ✅ Tailwind CSS funcionando
- ✅ Vitest + Testing Library configurado
- ✅ tsconfig.app.json excluyendo archivos de test
- ✅ Estructura de carpetas lista
- ✅ ProductCard con tests pasando
- ✅ App mostrando el componente
- ✅ Build exitoso
