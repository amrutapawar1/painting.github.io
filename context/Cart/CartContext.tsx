import { createContext, useContext } from "react";
import { IProduct } from "../../types/product";

export type CartContextData = {
    cartItems: IProduct[];
    wishlistItems: IProduct[];
};

export type CartContextUpdate = {
    addToCart: (prodcut: IProduct) => void,
    addToWishList: (prodcut: IProduct) => void,
    removeFromCart: (id: string) => void,
    removeFromWishList: (id: string) => void,
    decrementQty: (product: IProduct) => void
    incrementQty: (product: IProduct) => void
};

export const DEFAULT_CART_STATE = {
    cartItems: [],
    wishlistItems: [],
}

export const DEFAULT_CART_CONTEXT = {
    ...DEFAULT_CART_STATE,
    addToCart: () => null,
    addToWishList: () => null,
    removeFromCart: () => null,
    removeFromWishList: () => null,
    decrementQty: () => null,
    incrementQty: () => null
}

export type CartContextType = CartContextData & CartContextUpdate;
export const CartContext = createContext<CartContextType>(DEFAULT_CART_CONTEXT);

const useCart = () => useContext<CartContextType>(CartContext);

export default useCart;