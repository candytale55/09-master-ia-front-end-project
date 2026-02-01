import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the heading', () => {
        render(<App />);
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
    });

    it('renders the button with initial count', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
    });
});
