import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import {toast} from 'sonner'

interface CardState {
  number: string
  name: string
  expiry: string
  cvc: string
  focus: 'number' | 'name' | 'expiry' | 'cvc' | ''
}

const CardCredit = () => {
  const [cardData, setCardData] = useState<CardState>({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: ''
  })

  const [loading, setLoading] = useState(false)

  const { number, name, expiry, cvc } = cardData

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    })
  }

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name as 'number' | 'name' | 'expiry' | 'cvc' | ''
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validación
    if ([number, name, expiry, cvc].some(field => field === '')) {
      toast.error('Por favor, completa todos los campos de la tarjeta.')
      return
    }

    // Simular procesamiento
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCardData({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
      })
      alert('¡Pago procesado con éxito! 🎉')
    }, 2000)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-6">
        Información de pago
      </h2>

      {/* Tarjeta visual */}
      <div className="mb-6">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={cardData.focus as any}
        />
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Número de tarjeta */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Número de tarjeta
          </label>
          <input
            type="tel"
            name="number"
            placeholder="1234 5678 9012 3456"
            maxLength={16}
            value={number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Nombre en la tarjeta
          </label>
          <input
            type="text"
            name="name"
            placeholder="JUAN PEREZ"
            value={name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Fecha y CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Fecha de expiración
            </label>
            <input
              type="tel"
              name="expiry"
              placeholder="MM/AA"
              maxLength={4}
              value={expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              CVV
            </label>
            <input
              type="tel"
              name="cvc"
              placeholder="123"
              maxLength={3}
              value={cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Botón de compra */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 mt-6"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando pago...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Procesar pago
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default CardCredit
