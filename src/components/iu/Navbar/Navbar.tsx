import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal.tsx'

export const Navbar = () => {
  const [showCartModal, setShowCartModal] = useState(false)

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo */}
            <Link to="/" className="text-yellow-400 text-2xl font-bold">
              TechStore
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-6">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setShowCartModal(!showCartModal)}
                className="text-gray-300 hover:text-white relative"
              >
                Carrito
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <Link to="/cuenta" className="text-gray-300 hover:text-white">
                Cuenta
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal fuera del nav */}
      {showCartModal && (
        <CartModal handleShowCartModal={() => setShowCartModal(false)} />
      )}
    </>
  )
}
