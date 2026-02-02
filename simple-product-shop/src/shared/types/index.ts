// Shared TypeScript types used across the application

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
