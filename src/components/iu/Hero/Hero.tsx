import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Tecnología al mejor precio
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Envío gratis en compras mayores a $50.000
          </p>
          <Link
            to="/productos"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-500"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
