import { useReducer } from 'react'
import { CartContext } from './CartContext'
import { cartReducer, initialState } from './cartReducer'

const CartProvider = ({children}) => {
  
    const [state, dispatch] = useReducer(cartReducer, initialState)
  
    return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
