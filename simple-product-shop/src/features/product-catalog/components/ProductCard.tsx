import type { Product } from '../../../shared/types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    );
}
