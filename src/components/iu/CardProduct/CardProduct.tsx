import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  rating: number
  reviews: number
  freeShipping: boolean
}

interface CardProductProps {
  product: Product
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <Link to={`/productos/${product.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-700 h-full flex flex-col">
        
        {/* Image Container - TAMAÑO FIJO */}
        <div className="relative bg-gray-900 h-64 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
          {product.discount && product.discount > 0 && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col grow">
          <h3 className="text-white text-sm mb-3 line-clamp-2 min-h-10">
            {product.name}
          </h3>

          {/* Price */}
          <div className="mb-3">
            {product.originalPrice && (
              <span className="text-gray-500 text-xs line-through block mb-1">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <div className="text-2xl font-bold text-white">
              ${product.price.toLocaleString()}
            </div>
          </div>

          {/* Free Shipping */}
          {product.freeShipping && (
            <div className="text-green-400 text-xs font-semibold mb-3">
              ✓ Envío gratis
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mt-auto">
            <span className="text-yellow-400">★ {product.rating}</span>
            <span className="text-gray-500">({product.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardProduct
