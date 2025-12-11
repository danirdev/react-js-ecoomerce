import { useEffect, useState } from 'react'
import Hero from '../../components/iu/Hero/Hero'
import CardProduct from '../../components/iu/CardProduct/CardProduct'
import { getProducts } from '../../service'
import type { Product } from '../../interface'
import {Toaster} from 'sonner'

const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      
      <Toaster position="bottom-right" richColors />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Productos destacados
          </h2>
          <p className="text-gray-400">
            Las mejores ofertas en tecnología
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product: any) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        )}
        {error && (<div className="text-red-500 mt-4">
          Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.
        </div>
        )}
      </div>
    </div>
  )
}

export default Home
