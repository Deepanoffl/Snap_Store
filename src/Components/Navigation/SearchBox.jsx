import React from "react";
import { useState, useEffect, useContext } from "react";
import SearchControls from "./SearchControls";
import { SearchContext } from "../../Context/SearchProvider";
import axios from "axios";

const SearchBox = () => {
  const { setQuickSearch, setGetProductList, getProductList } = useContext(SearchContext);

  const [search, setSearch] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const searchProducts = (evt) => {
    const searchTerm = evt.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      setQuickSearch([]);
      return;
    }

    const newUpdatedSearchData = getProductList.filter((product) =>
      product.title.toLowerCase().trim().includes(searchTerm)
    );
    setQuickSearch(newUpdatedSearchData);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestAPI = await axios.get(
          "https://fakestoreapi.in/api/products?limit=150"
        );
        setGetProductList(requestAPI.data.products);
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="w-[55%] max-[578px]:w-[35%] flex relative mx-4 ">
        <input
          className="pl-12 pr-10 w-full border rounded-xl dark:border-none outline-offset-1 dark:bg-gray-800"
          type="search"
          placeholder={isMobileView ? "" : "Search the product"}
          value={search}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setTimeout(() => setIsInputFocused(false), 300)}
          onChange={searchProducts}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 absolute left-2 top-[10px]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      {search && isInputFocused && <SearchControls />}
    </>
  );
};

export default React.memo(SearchBox);
