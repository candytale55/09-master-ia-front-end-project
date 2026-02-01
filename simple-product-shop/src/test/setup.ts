import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SVG and image imports for tests
vi.mock('/vite.svg', () => ({
    default: 'mocked-vite-svg',
}));

vi.mock('*.svg', () => ({
    default: 'mocked-svg',
}));

