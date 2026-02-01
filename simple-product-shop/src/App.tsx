import { ProductCard } from './features/product-catalog/components/ProductCard'
import type { Product } from './shared/types'

function App() {
  const sampleProduct: Product = {
    id: '1',
    name: 'Sample Product',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Product Shop</h1>

      <div className="max-w-sm mx-auto">
        <ProductCard
          product={sampleProduct}
          onAddToCart={(product) => console.log('Added to cart:', product)}
        />
      </div>
    </div>
  )
}

export default App
