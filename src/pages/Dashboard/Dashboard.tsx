import { useEffect, useState } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import type { Product } from "../../interface"
import { createProduct } from "../../service/products.service"

const Dashboard = () => {
    
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    originalPrice: 0,
    discount: 0,
    image: '',
    rating: 0,
    reviews: 0,
    freeShipping: false
  })

  const navigate = useNavigate()

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin')
    if(!userLogin) {
      navigate('/login')
    }
    }, [])

  const handleLogout = () => {
    localStorage.removeItem('userLogin')
    navigate('/login')
  }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target
    
    setProduct({
        ...product,
        [name]: type === 'checkbox' ? checked : value
    })
    }

  const mutation = useMutation((newProduct: Product) => {
    return createProduct(newProduct)
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(product as Product)
  }

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Panel de administración
            </h1>
            <p className="text-gray-400">
              Agrega nuevos productos a tu tienda
            </p>
          </div>
          
          {/* Botón Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar sesión
          </button>
        </div>

        {/* Formulario */}
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-2xl border border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Agregar nuevo producto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Nombre del producto */}
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm font-semibold mb-2">
                Nombre del producto
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="iPhone 15 Pro Max"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            {/* Precio y Precio original */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-gray-400 text-sm font-semibold mb-2">
                  Precio
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="1299"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="originalPrice" className="block text-gray-400 text-sm font-semibold mb-2">
                  Precio original (opcional)
                </label>
                <input
                  type="number"
                  id="originalPrice"
                  name="originalPrice"
                  value={product.originalPrice}
                  onChange={handleChange}
                  placeholder="1499"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Descuento */}
            <div>
              <label htmlFor="discount" className="block text-gray-400 text-sm font-semibold mb-2">
                Descuento (%)
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={product.discount}
                onChange={handleChange}
                placeholder="15"
                min="0"
                max="100"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            {/* URL de la imagen */}
            <div>
              <label htmlFor="image" className="block text-gray-400 text-sm font-semibold mb-2">
                URL de la imagen
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            {/* Rating y Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="rating" className="block text-gray-400 text-sm font-semibold mb-2">
                  Calificación
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={product.rating}
                  onChange={handleChange}
                  placeholder="4.8"
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="reviews" className="block text-gray-400 text-sm font-semibold mb-2">
                  Número de reseñas
                </label>
                <input
                  type="number"
                  id="reviews"
                  name="reviews"
                  value={product.reviews}
                  onChange={handleChange}
                  placeholder="248"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Envío gratis */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="freeShipping"
                value={product.freeShipping.toString()}
                checked={product.freeShipping}
                onChange={handleChange}
                id="freeShipping"
                className="w-5 h-5 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
              />
              <label htmlFor="freeShipping" className="ml-3 text-gray-400 font-semibold">
                Envío gratis
              </label>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Agregar producto
              </button>
              <button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>

        {/* Vista previa de productos (opcional) */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Productos recientes
            </h3>
            <div className="text-gray-400 text-center py-8">
              No hay productos agregados aún
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard