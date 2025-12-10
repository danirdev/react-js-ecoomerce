export const initialState = {
  cartItems: [],
}

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
        const {id} = action.payload
        const existingItem = state.cartItems.find((item: any) => item.id === id)
        if (existingItem) {
            return {
                ...state,
                cartItems: state.cartItems.map((item: any) =>
                    item.id === id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
                ),
            }
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        }
    }
    case 'REMOVE_FROM_CART': {
        const {id: removeItemID} = action.payload
        const existingItem = state.cartItems.find((item: any) => item.id === removeItemID)
        if (existingItem.quantity === 1) {
            return {
                ...state,
                cartItems: state.cartItems.filter((item: any) => item.id !== removeItemID),
            }
        } else {
            return {
                ...state,
                cartItems: state.cartItems.map((item: any) =>
                    item.id === removeItemID ? { ...existingItem, quantity: existingItem.quantity - 1 } : item
                ),
            }
        }
    }
    case 'CLEAR_CART':
        return {
            ...state,
            cartItems: [],
        }
    default:
        return state
  }
}
