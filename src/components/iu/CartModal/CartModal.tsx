import type { FC } from 'react'
import { Table } from '../Table/Table'
import { useNavigate } from 'react-router-dom'


interface Props {
  handleShowCartModal: () => void
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {
 
  const navigate = useNavigate()

  const handleNavigate = () => {
    handleShowCartModal()
    navigate('/checkout')
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
            🛒 Carrito de compras
          </h3>
          <button 
            className="text-gray-400 hover:text-white text-2xl"
            onClick={handleShowCartModal}
          >
            ✕
          </button>
        </div>
        {/* Table */}
        <Table />
        {/* Footer */}
        <div className="border-t border-gray-700 p-4 bg-gray-900">
          <button
            onClick={handleNavigate}
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded text-center"
          >
            Proceder al Checkout
          </button>
        </div>
      </div>
    </>
  )
}

