import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import HighlightedProduct from "./HighlightedProduct.jsx";

const TopPick = () => {  
  const [allProducts, setAllProducts] = useState([]);
  const [PromotedProduct, setPromotedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestAPI = await axios.get(
          "https://fakestoreapi.in/api/products?limit=150"
        );
        setAllProducts(requestAPI.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
      setPromotedProduct(selected);
    }
  }, [allProducts]);

  return (
    <div className=" lg:w-[45%] max-h-full px-2 mt-7 rounded-xl text-white hidden lg:block ">
      <div className="grid grid-cols-2 gap-2 h-full">
        {loading
          ? Array(4)
              .fill()
              .map((_, i) => <HighlightedProduct key={i} loading={true} />)
          : PromotedProduct.map((product, index) => (
              <HighlightedProduct specialProduct={product} key={index} />
            ))}
      </div>
    </div>
  );
};

export default React.memo(TopPick);
