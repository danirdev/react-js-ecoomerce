import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()  
    if(userData.email.trim() === '' || userData.password.trim() === '') {
      alert('Por favor, completa todos los campos')
      return
    }
    localStorage.setItem(
        'userLogin', 
        JSON.stringify(userData.email)
    )
    navigate('/dashboard')
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="text-gray-400">
            Inicia sesión para continuar
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 text-sm font-semibold mb-2">
                Contraseña
              </label>
              <input
                name="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                />
                <span className="ml-2 text-gray-400 text-sm">
                  Recordarme
                </span>
              </label>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar sesión
            </button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-500">O continúa con</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Google
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6">
          ¿No tienes cuenta?{' '}
          <a href="#" className="text-yellow-400 hover:text-yellow-300 font-semibold transition">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
