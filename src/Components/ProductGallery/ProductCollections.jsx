import React from "react";
import CategoryPill from "./CategoryPill";
import Product from "./Product";
import QuickSortTabs from "../Tabs/QuickSortTabs";
import PaginationControl from "./PaginationControl";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../Context/ProductDataProvider";
import { RefreshKeyContext } from "../../Context/RefreshKeyProvider";
import { CategoryContext } from "../../Context/CategoryProvider";

const ProductCollections = () => {
  const { smartFilter, setSmartFilter, setCopiedProducts, setProductsBackup } =
    useContext(ProductContext);
  const { refreshKey } = useContext(RefreshKeyContext);
  const { selectedCategory, categoryLoading } = useContext(CategoryContext);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;
  const totalPages = Math.ceil(smartFilter.length / productsPerPage);

  let start = (currentPage - 1) * productsPerPage;
  let end = currentPage * productsPerPage;
  const paginatedProducts = smartFilter.slice(start, end);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestAPI = await axios.get(
          "https://fakestoreapi.in/api/products?limit=150"
        );
        setSmartFilter(requestAPI.data.products);
        setCopiedProducts(requestAPI.data.products);
        setProductsBackup(requestAPI.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [smartFilter]);

  return (
    <>
      <QuickSortTabs />

      {selectedCategory && <CategoryPill />}

      <div className="pt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading || categoryLoading
          ? Array(15)
              .fill()
              .map((_, i) => <Product loading={true} key={i} />)
          : paginatedProducts.map((product, index) => (
              <Product
                productDetails={product}
                loading={false}
                index={index}
                key={`${product.id}-${refreshKey}`}
              />
            ))}
      </div>

      <PaginationControl
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default React.memo(ProductCollections);
