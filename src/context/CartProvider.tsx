import { useReducer } from 'react'
import { CartContext } from './CartContext'
import { cartReducer, initialState } from './cartReducer'

interface CartProviderProps {
    children: React.ReactNode
}

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  
    const [state, dispatch] = useReducer(cartReducer, initialState)
  
    return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
