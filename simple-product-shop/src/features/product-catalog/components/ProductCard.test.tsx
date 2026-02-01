import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Product } from '../../../shared/types';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
    const mockProduct: Product = {
        id: '1',
        name: 'Test Product',
        price: 29.99,
        image: 'https://example.com/product.jpg',
    };

    const mockOnAddToCart = vi.fn();

    it('displays the product name', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    it('displays the price formatted as $XX.XX', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        expect(screen.getByText('$29.99')).toBeInTheDocument();
    });

    it('displays the product image with correct alt text', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        const image = screen.getByAltText('Test Product');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/product.jpg');
    });

    it('has an "Add to Cart" button', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    it('calls onAddToCart with the product when button is clicked', async () => {
        const user = userEvent.setup();
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

        const button = screen.getByRole('button', { name: /add to cart/i });
        await user.click(button);

        expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
        expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
