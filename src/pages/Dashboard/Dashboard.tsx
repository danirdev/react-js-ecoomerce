import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {

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
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl border border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Agregar nuevo producto
          </h2>

          <form className="space-y-6">
            
            {/* Información básica */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Información básica</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre del producto */}
                <div className="md:col-span-2">
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Nombre del producto *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="iPhone 15 Pro Max"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Categoría */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Categoría *
                  </label>
                  <select
                    name="category"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="audio">Audio</option>
                    <option value="tablets">Tablets</option>
                    <option value="smartwatches">Smartwatches</option>
                    <option value="cameras">Cámaras</option>
                    <option value="gaming">Gaming</option>
                    <option value="tvs">Televisores</option>
                    <option value="monitors">Monitores</option>
                    <option value="accessories">Accesorios</option>
                    <option value="drones">Drones</option>
                  </select>
                </div>

                {/* Marca */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Marca *
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Apple"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Precio */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Precio *
                  </label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="1299.99"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Precio original */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Precio original
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    step="0.01"
                    placeholder="1499.99"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Descuento */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Descuento (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    min="0"
                    max="100"
                    placeholder="13"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Stock */}
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Stock *
                  </label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="45"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Imágenes */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Imágenes</h3>
              
              {/* Imagen principal */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Imagen principal *
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Galería de imágenes */}
              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Galería de imágenes
                </label>
                <div className="space-y-2">
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Descripción y características */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Descripción y características</h3>
              
              {/* Descripción */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Descripción *
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="El iPhone más avanzado. Chip A17 Pro, cámara de 48MP..."
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Características */}
              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Características
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Pantalla Super Retina XDR de 6.7 pulgadas"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Chip A17 Pro"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Sistema de cámaras Pro"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Especificaciones técnicas */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Especificaciones técnicas</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Pantalla
                  </label>
                  <input
                    type="text"
                    name="screen"
                    placeholder="6.7 pulgadas"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Procesador
                  </label>
                  <input
                    type="text"
                    name="processor"
                    placeholder="A17 Pro"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    RAM
                  </label>
                  <input
                    type="text"
                    name="ram"
                    placeholder="8GB"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Almacenamiento
                  </label>
                  <input
                    type="text"
                    name="storage"
                    placeholder="256GB"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Cámara
                  </label>
                  <input
                    type="text"
                    name="camera"
                    placeholder="48MP + 12MP + 12MP"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Batería
                  </label>
                  <input
                    type="text"
                    name="battery"
                    placeholder="4422 mAh"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Sistema operativo
                  </label>
                  <input
                    type="text"
                    name="os"
                    placeholder="iOS 17"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Colores */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Colores disponibles</h3>
              
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Titanio Natural"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Titanio Azul"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Titanio Blanco"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Rating y Reviews */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Valoración</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Calificación *
                  </label>
                  <input
                    type="number"
                    name="rating"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="4.9"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Número de reseñas *
                  </label>
                  <input
                    type="number"
                    name="reviews"
                    placeholder="2847"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Opciones adicionales */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Opciones adicionales</h3>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    className="w-5 h-5 bg-gray-600 border-gray-500 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-300 font-semibold">
                    Producto destacado
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isNew"
                    className="w-5 h-5 bg-gray-600 border-gray-500 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-300 font-semibold">
                    Producto nuevo
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="freeShipping"
                    className="w-5 h-5 bg-gray-600 border-gray-500 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-300 font-semibold">
                    Envío gratis
                  </span>
                </label>
              </div>
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
      </div>
    </div>
  )
}

export default Dashboard
