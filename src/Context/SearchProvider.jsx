import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [quickSearch, setQuickSearch] = useState([]);
  const [getProductList, setGetProductList] = useState([]);
  
  return (
    <SearchContext.Provider
      value={{ quickSearch, setQuickSearch, getProductList, setGetProductList }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
