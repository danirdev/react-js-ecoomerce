import { createContext } from "react";
import type { CartState, CartAction } from "./cartReducer";

interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>
}

export const CartContext = createContext({} as CartContextType);