import React from "react";
import { CartContext } from "../../Context/CartProvider";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartBtn = () => {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const [animateBadge, setAnimateBadge] = useState(false);

  const goToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateBadge(true);
      const timeout = setTimeout(() => setAnimateBadge(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);

  return (
    <button className="relative cursor-pointer" onClick={goToCart}>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92 92"
      >
        <path
          fill="currentColor"
          d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm35.9 0a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
        />
      </svg>
      <span
        className={`absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs text-white pointer-events-none
        ${cartCount === 0 ? "hidden" : ""}   ${
          animateBadge ? "pop-animate" : ""
        } `}
        style={{ aspectRatio: "1/1", transform: "none" }}
      >
        {cartCount}
      </span>
    </button>
  );
};

export default React.memo(CartBtn);
