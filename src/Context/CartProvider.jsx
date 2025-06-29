import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <CartContext.Provider
      value={{
        addedProductIds,
        setAddedProductIds,
        cartCount,
        setCartCount,
        productsInCart,
        setProductsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
