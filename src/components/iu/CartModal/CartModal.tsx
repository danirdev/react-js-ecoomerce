import { Link } from 'react-router-dom'
import type { FC } from 'react'
import useCartContext from '../../../hooks/useCartContext'
import type { CartProduct } from '../../../interface'

interface Props {
  handleShowCartModal: () => void
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

  const { state: {cartItems}, dispatch } = useCartContext()

  const addToCart = (item: CartProduct) => {  
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  const removeToCart = (item: CartProduct) => {  
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  return (
    <>
      {/* Overlay con BLUR */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={handleShowCartModal}
      />

      {/* Modal */}
      <div className="fixed top-20 right-4 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-white font-bold text-xl">
            🛒 Carrito de compras (2)
          </h3>
          <button 
            className="text-gray-400 hover:text-white text-2xl"
            onClick={handleShowCartModal}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-900 sticky top-0">
              <tr>
                <th className="text-left text-gray-400 text-sm font-semibold p-3">Producto</th>
                <th className="text-center text-gray-400 text-sm font-semibold p-3">Cantidad</th>
                <th className="text-right text-gray-400 text-sm font-semibold p-3">Precio</th>
                <th className="text-center text-gray-400 text-sm font-semibold p-3">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-700">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain bg-gray-900 rounded"
                    />
                    <p className="text-white text-sm"> {item.name} </p>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => removeToCart(item)} className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded">-</button>
                    <span className="text-white font-semibold w-8 text-center"> 
                      {item.quantity} 
                    </span>
                    <button onClick={() => addToCart(item)} className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded">+</button>
                  </div>
                </td>
                <td className="p-3 text-right">
                  <p className="text-white font-bold"> {item.price} </p>
                </td>
                <td className="p-3 text-center">
                  <button className="text-red-400 hover:text-red-300">🗑️</button>
                </td>
              </tr>
              )
              )}
              

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-4 bg-gray-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-lg">Total:</span>
            <span className="text-white text-2xl font-bold">$2,599.98</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded text-center"
          >
            Proceder al Checkout
          </Link>
        </div>
      </div>
    </>
  )
}

