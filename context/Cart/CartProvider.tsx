import { useMemo, useState } from "react";
import { CartContextData, CartContext, DEFAULT_CART_STATE } from "./CartContext";
import { IProduct } from "../../types/product";

interface ProviderProps {
  children: string | JSX.Element | JSX.Element[];
}

const CartProvider = ({ children }: ProviderProps) => {

  const [state, setState] = useState<CartContextData>(DEFAULT_CART_STATE);

  const addToCart = (product: IProduct) => {
    const updatedItems = [...state.cartItems].find((item) => item.id === product.id)
      ? state.cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      )
      : [...state.cartItems, { ...product, qty: 1 }];

    setState({
      ...state,
      cartItems: [...updatedItems],
    });
  }
  const addToWishList = (product: IProduct) => {
    const updatedItems = [...state.wishlistItems, { ...product, count: 1 }];
    setState({
      ...state,
      wishlistItems: [...updatedItems],
    });
  };

  const removeProduct = (id: string, type: keyof CartContextData) => {
    const updatedItems = state[type].filter((cartItem) => cartItem.id !== id);
    setState({
      ...state,
      [type]: [...updatedItems],
    });
  };

  const removeFromCart = (id: string) => {
    removeProduct(id, 'cartItems');
  };
  
  const removeFromWishList = (id: string) => {
    removeProduct(id, 'wishlistItems')
  };
  const incrementQty = (product:IProduct)=>{
    addToCart(product)
  }
  const decrementQty = (product:IProduct)=>{
    const updatedItems = [...state.cartItems].find((item) => item.id === product.id)
    ? state.cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, qty: cartItem.qty - 1 }
        : cartItem
    )
    : [...state.cartItems, { ...product, qty: 1 }];

  setState({
    ...state,
    cartItems: [...updatedItems],
  });
  }
  const ctx = useMemo(
    () => ({
      ...state,
      addToCart,
      addToWishList,
      removeFromCart,
      removeFromWishList,
      decrementQty,
      incrementQty
    }),
    [addToCart, addToWishList, removeFromCart, removeFromWishList,decrementQty,incrementQty]
  );
  return (
    <CartContext.Provider value={ctx}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider