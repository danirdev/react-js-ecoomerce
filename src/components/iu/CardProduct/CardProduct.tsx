import { Link } from 'react-router-dom'
import type { Product, CartProduct } from '../../../interface'
import useCartContext from '../../../hooks/useCartContext'
import {toast} from 'sonner'

interface Props {
  product: Product
}

const CardProduct: React.FC<Props> = ({ product }) => {

  const {dispatch} = useCartContext()

  const item: CartProduct = {
    id: product.id ?? 0,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  }

  const handleAddToCart = (item: CartProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
    toast.success('Producto agregado al carrito')
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition border border-gray-700">
      
      {/* Image */}
      <Link to={`/productos/${product.id}`}>
        <div className="relative bg-gray-900 h-64 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
          {product.discount > 0 && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/productos/${product.id}`}>
          <h3 className="text-white text-sm mb-3 line-clamp-2 min-h-10 hover:text-yellow-400 transition">
            {product.name}
          </h3>
        </Link>

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
        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-yellow-400">★ {product.rating}</span>
          <span className="text-gray-500">({product.reviews})</span>
        </div>

        {/* Add to Cart Button */}
        <button onClick={() => handleAddToCart(item)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2.5 px-4 rounded transition cursor-pointer">
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default CardProduct
