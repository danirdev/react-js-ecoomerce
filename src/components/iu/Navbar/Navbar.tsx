import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900">
            MiTienda
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link to="/productos" className="text-gray-700 hover:text-blue-600">
              Productos
            </Link>
            <Link to="/carrito" className="text-gray-700 hover:text-blue-600">
              Carrito
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
