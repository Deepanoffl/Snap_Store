import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [copiedProducts, setCopiedProducts] = useState([]);
  const [smartFilter, setSmartFilter] = useState([]);
  const [productsBackup, setProductsBackup] = useState([]);
  return (
    <ProductContext.Provider
      value={{ smartFilter, setSmartFilter, copiedProducts, setCopiedProducts, productsBackup, setProductsBackup }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductDataProvider;
