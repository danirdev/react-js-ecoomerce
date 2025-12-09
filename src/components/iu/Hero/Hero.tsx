import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a MiTienda
          </h1>
          <p className="text-xl mb-8">
            Encuentra los mejores productos al mejor precio
          </p>
          <Link
            to="/productos"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
