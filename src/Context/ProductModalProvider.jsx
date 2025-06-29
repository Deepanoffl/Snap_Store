import { createContext, useState } from "react";

export const ModalContext = createContext();
const ProductModalProvider = ({ children }) => {
  const [productPreview, setProductPreview] = useState({});
  const [productModal, setProductModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        productPreview,
        setProductPreview,
        productModal,
        setProductModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ProductModalProvider;
