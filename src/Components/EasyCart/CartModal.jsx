import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct";
import { CartContext } from "../../Context/CartProvider";
import { useContext, useState } from "react";

const CartModal = () => {
  const { productsInCart } = useContext(CartContext);
  const [checkedIds, setCheckedIds] = useState(productsInCart.map((p) => p.id));

  const checkedProducts = productsInCart.filter((p) =>
    checkedIds.includes(p.id)
  );
  const productsTotal = checkedProducts.reduce(
    (acc, p) => acc + p.copyPrice,
    0
  );
  const discountAmount = checkedProducts.reduce(
    (acc, p) => acc + p.copyDiscountInRupees,
    0
  );
  const totalProductsDiscount = checkedProducts.reduce(
    (acc, p) => acc + p.copyDiscount,
    0
  );

  const handleCheckboxToggle = (productId) => {
    setCheckedIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="dark:bg-gray-700">
        <div className="w-[min(100%-4rem,1152px)] mx-auto min-h-screen">
          <div className="p-8 mb-21 sticky top-16 shadow-sm backdrop-blur-md bg-[#dddddd2f] dark:bg-black/40 dark:text-white">
            <h1 className="flex sm:items-end items-start gap-1 sm:flex-row flex-col text-3xl font-medium">
              Your Cart
            </h1>
            <button
              className="flex items-center gap-1 self-start ml-5 mt-5 border px-2 py-1 text-sm text-slate-600 font-medium hover:border-black/30 rounded-md group transition-colors absolute right-5 bottom-2 dark:text-white dark:border-white/20 dark:hover:border-white/40 cursor-pointer"
              onClick={backHome}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:-translate-x-[2px] transition-transform mt-[3px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                ></path>
              </svg>
              <span className="max-[578px]:hidden">continue shopping</span>
            </button>
          </div>

          <div
            className={`flex gap-5 min-[768px]:px-10 min-h-[50vh] max-[920px]:flex-col ${
              productsInCart.length > 0
                ? ""
                : "justify-center items-center min-h-[70vh]"
            }`}
          >
            {productsInCart.length > 0 ? (
              <>
                <div className="flex-1 min-w-[65%]">
                  {productsInCart.map((product) => (
                    <CartProduct
                      product={product}
                      key={product.id}
                      onCheckboxToggle={handleCheckboxToggle}
                      isChecked={checkedIds.includes(product.id)}
                    />
                  ))}
                </div>

                <div className="flex-1 flex-grow h-fit bg-[#dddddd2f] dark:bg-black/20 dark:text-white shadow-md sticky top-[185px] p-5 max-[920px]:mb-10">
                  <div className="text-center font-semibold text-xl pb-3 border-b dark:border-white/30">
                    <span>Order Summary</span>
                  </div>
                  <div className="flex mt-3 text-sm">
                    <div className="flex-1 flex flex-col">
                      <span>Price :</span>
                      <span>Delivery :</span>
                      <span>Discount :</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span>${productsTotal}</span>
                      <span className="text-green-500">Free</span>
                      <span className="text-red-500">-${discountAmount}</span>
                    </div>
                  </div>
                  <div className="flex my-2 py-1 relative">
                    <div className="absolute h-[1px] w-full top-0 left-0 from-transparent via-black/20 dark:via-white/30 to-transparent bg-gradient-to-r"></div>
                    <span className="flex-1 text-xl font-medium">
                      Subtotal :{" "}
                    </span>
                    <span className="flex-1 text-xl font-medium">
                      ${totalProductsDiscount}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="text-2xl font-bold -mt-5 dark:text-white">
                {" "}
                Cart is Empty !
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
