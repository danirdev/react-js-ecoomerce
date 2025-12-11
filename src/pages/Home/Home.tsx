import Hero from '../../components/iu/Hero/Hero'
import CardProduct from '../../components/iu/CardProduct/CardProduct'
import { getProducts } from '../../service'
import {Toaster} from 'sonner'
import { useQuery } from 'react-query'
import { useState } from 'react'

const Home = () => {
  const [page, setPage] = useState(1);
  const {data, isLoading, error} = useQuery(
    ['products', page],
    () => getProducts(page),
    {
      keepPreviousData: true,
    }
  )


  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

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

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data?.map((product: any) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {!!error && (
          <div className="text-red-500 mt-4 text-center">
            Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.
          </div>
        )}
        {!error && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1 || isLoading}
              className="bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-lg transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            <span className="text-white font-semibold px-4">
              Página {page}
            </span>

            <button
              onClick={handleNextPage}
              disabled={!data || data.length === 0 || isLoading}
              className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-900 disabled:cursor-not-allowed text-gray-900 font-semibold py-2 px-6 rounded-lg transition flex items-center gap-2"
            >
              Siguiente
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
