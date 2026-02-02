import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the Product Shop heading', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: /product shop/i })).toBeInTheDocument();
    });

    it('renders the ProductCard content', () => {
        render(<App />);
        expect(screen.getByText('Sample Product')).toBeInTheDocument();
        expect(screen.getByText('$49.99')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });
});
