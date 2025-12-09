import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <span className="text-blue-400 text-sm font-semibold">🎉 Nuevos productos disponibles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              La mejor tecnología
              <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                al mejor precio
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg">
              Descubre los últimos smartphones, laptops, audio y gaming. Envío gratis en compras mayores a $50.000
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/productos"
                className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-500/50 transition-all transform hover:scale-105"
              >
                Ver Productos
              </Link>
              <Link
                to="/ofertas"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-700 transition-all"
              >
                Ver Ofertas
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-slate-400 text-sm">Productos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-slate-400 text-sm">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">4.9★</div>
                <div className="text-slate-400 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image/Product Showcase */}
          <div className="relative">
            <div className="relative z-10 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <img
                src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
                alt="iPhone 15 Pro"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -13% OFF
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Envío Gratis</div>
                  <div className="text-slate-400 text-sm">En compras +$50k</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Entrega Rápida</div>
                  <div className="text-slate-400 text-sm">24-48 horas</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
