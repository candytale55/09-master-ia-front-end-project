/// <reference types="vitest" />
// ^ Enables TypeScript intellisense for Vitest's 'test' config option
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Enables global test APIs (describe, it, expect) without imports
    environment: 'jsdom', // Simulates browser DOM for React component testing
    setupFiles: './src/test/setup.ts', // Runs before each test file (loads jest-dom matchers)
    css: true,
  },
})
