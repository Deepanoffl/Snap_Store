import { CartContext } from "../../Context/CartProvider";
import { useContext, useState, useEffect } from "react";
const CartProduct = ({ product, onCheckboxToggle, isChecked }) => {
  const {
    addedProductIds,
    setAddedProductIds,
    setCartCount,
    productsInCart,
    setProductsInCart,
  } = useContext(CartContext);

  const getQuantity = product.quantity;

  const [quantity, setQuantity] = useState(getQuantity);

  const updateQuantity = (type) => {
    let newQty;
    if (type === "inc") {
      newQty = quantity + 1;
      setQuantity(newQty);
    } else {
      if (quantity > 1) {
        newQty = quantity - 1;
        setQuantity(newQty);
      }
    }
  };

  const deleteProduct = (productId) => {
    setCartCount((prev) => prev - 1);

    const trashedProducts = productsInCart.filter(
      (product) => product.id != productId
    );
    setProductsInCart(trashedProducts);

    const trashedIds = addedProductIds.filter((id) => productId != id);
    setAddedProductIds(trashedIds);
  };

  useEffect(() => {
    const updateOrderSummary = productsInCart.map((cartProduct) =>
      cartProduct.id === product.id
        ? {
            ...cartProduct,
            quantity: quantity,
            copyPrice: quantity * product.price,
            copyDiscount: quantity * product.discount,
            copyDiscountInRupees: quantity * product.discountInRupees,
          }
        : cartProduct
    );

    setProductsInCart(updateOrderSummary);
  }, [quantity]);

  return (
    <div className="bg-white dark:bg-black/20 dark:text-white shadow-md mb-3 flex max-[1020px]:flex-col gap-3 py-3 px-5">
      <div className="min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px] cursor-pointer">
        <img
          src={product.image}
          draggable="false"
          loading="lazy"
          className="h-full w-full object-contain"
        ></img>
      </div>
      <div className="flex-grow py-2 flex flex-col justify-center">
        <h1 className="line-clamp-2 cursor-pointer">{product.title}</h1>
        <span className="text-sm text-zinc-400">Color : {product.color}</span>
        <span className="text-sm text-zinc-400">Price : ${product.price}</span>
        <span className="text-green-400 text-xs mb-1">In Stock</span>
        <div className="flex items-center gap-5">
          <span className="text-sm">Qty :</span>
          <div className="flex basis-[20%]">
            <button
              className={`flex-1 border border-zinc-300 grid place-content-center cursor-pointer 
               ${
                 quantity === 1
                   ? "text-zinc-600 cursor-not-allowed pointer-events-none"
                   : ""
               }`}
              disabled={quantity === 1}
              onClick={() => updateQuantity("dec")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <div className="text-center flex-1 min-w-[33.333%] border-t border-b border-zinc-300 grid place-content-center">
              <span>{quantity}</span>
            </div>
            <button
              className="flex-1 border border-zinc-300 grid place-content-center cursor-pointer"
              onClick={() => updateQuantity("inc")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className="flex items-center text-sm border-zinc-300 p-1 cursor-pointer"
            onClick={() => deleteProduct(product.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M19.643 9.488c0 .068-.533 6.81-.837 9.646-.19 1.741-1.313 2.797-2.997 2.827-1.293.029-2.56.039-3.805.039-1.323 0-2.616-.01-3.872-.039-1.627-.039-2.75-1.116-2.931-2.827-.313-2.847-.837-9.578-.846-9.646a.794.794 0 0 1 .19-.558.71.71 0 0 1 .524-.234h13.87c.2 0 .38.088.523.234.134.158.2.353.181.558Z"
                opacity=".4"
                className="color200E32 svgShape"
              ></path>
              <path
                fill="currentColor"
                d="M21 5.977a.722.722 0 0 0-.713-.733h-2.916a1.281 1.281 0 0 1-1.24-1.017l-.164-.73C15.738 2.618 14.95 2 14.065 2H9.936c-.895 0-1.675.617-1.913 1.546l-.152.682A1.283 1.283 0 0 1 6.63 5.244H3.714A.722.722 0 0 0 3 5.977v.38c0 .4.324.733.714.733h16.573A.729.729 0 0 0 21 6.357v-.38Z"
                className="color200E32 svgShape"
              ></path>
            </svg>
          </button>
        </div>
        <div className="text-right">
          <input
            type="checkbox"
            className="mr-8 cursor-pointer"
            checked={isChecked}
            onChange={() => onCheckboxToggle(product.id)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
