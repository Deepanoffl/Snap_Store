import { ModalContext } from "../../Context/ProductModalProvider";
import { CartContext } from "../../Context/CartProvider";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductQuickView = () => {
  const { productPreview, setProductModal, productModal } =
    useContext(ModalContext);
    
  const navigate = useNavigate();
  const {
    addedProductIds,
    setAddedProductIds,
    setCartCount,
    setProductsInCart,
  } = useContext(CartContext);

  const [checkoutNow, setCheckoutNow] = useState("");

  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setProductModal(false);
  };

  const addToCart = () => {
    if (!addedProductIds.includes(productPreview.id)) {
      setCartCount((prev) => prev + 1);
      setAddedProductIds([...addedProductIds, productPreview.id]);
      setProductsInCart((prev) => [
        ...prev,
        {
          id: productPreview.id,
          quantity:1,
          image: productPreview.image,
          title: productPreview.title,
          color: productPreview.color,
          price: productPreview.price,
          copyPrice:productPreview.price,
          discount:productPreview.discountedPrice,
          copyDiscount:productPreview.discountedPrice,
          discountInRupees:productPreview.discountInRupees,
          copyDiscountInRupees:productPreview.discountInRupees
        },
      ]);
    } else {
      navigate("/cart");
      setProductModal(false);
    }
  };

  useEffect(() => {
    if (addedProductIds.includes(productPreview.id)) {
      setCheckoutNow("Go to Cart");
    } else {
      setCheckoutNow("Add to Cart");
    }
  }, [addedProductIds]);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    if (productModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [productModal]);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm max-[1300px]:bg-black/0">
      <div
        className={`fixed inset-40 max-[1300px]:inset-x-0 max-[1300px]:top-0 max-[1300px]:bottom-0 min-[1300px]:top-16 min-[1300px]:bottom-16 
    bg-white dark:bg-gray-700 dark:text-white shadow-md backdrop-blur-md rounded-2xl 
    max-[1300px]:rounded-none max-[1300px]:overflow-y-scroll
    transition-all duration-500 ease-out transform p-5
    ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}
  `}
      >
        <span
          className="absolute top-3 right-3 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white transition-colors rounded-sm px-1"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        <div className="flex h-full max-[1300px]:flex-col items-center min-[1300px]:justify-center">
          <img
            src={productPreview.image}
            alt="Product Image"
            draggable="false"
            className="w-1/2 max-h-full object-contain mr-auto flex-1 min-w-[50%] max-[1300px]:mx-auto"
          />
          <div className="flex flex-col gap-5 flex-1 p-5 pl-10 w-[80%]">
            <span className="text-xl font-semibold line-clamp-3">
              {productPreview.title}
            </span>
            <div className="flex gap-2 items-center">
              {productPreview.hasDiscount ? (
                <>
                  <div className="flex gap-2">
                    <div>
                      <span className="text-lg line-through pr-2 text-zinc-400">
                        {productPreview.price}
                      </span>
                      <span className="text-3xl font-medium">
                        <span className="text-green-500">$</span>
                        {productPreview.discountedPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <span className="flex justify-center items-center bg-red-500 text-white text-[12px] h-5 w-5 rounded-full p-[12px]">
                        {productPreview.discount}%
                      </span>
                      <span className="font-medium text-zinc-500">off</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-3xl font-medium">
                  <span className="text-green-500">$</span>
                  {productPreview.price}
                </div>
              )}
            </div>

            <div className="text-sm flex gap-5">
              <div className="flex flex-col font-semibold">
                <span>Brand:</span>
                <span>Model:</span>
                <span>Color:</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase">{productPreview.brand}</span>
                <span className="uppercase">{productPreview.model}</span>
                <span className="uppercase">{productPreview.color}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1 text-sm">
                About this product:
              </h3>
              <p className="whitespace-break-spaces line-clamp-5 text-sm">
                {productPreview.about}
              </p>
            </div>
            <div className="flex gap-3 w-[100%] xl:w-[60%]">
              <div className="w-full lg:w-[60%] max-1300:mx-auto relative h-8">
                <button
                  className={`p-1 flex items-center gap-1 text-white px-3 text-sm rounded-full shadow-md absolute inset-0 transform transition-all duration-200
                        ${
                          checkoutNow === "Go to Cart"
                            ? "bg-rose-500 hover:bg-rose-600"
                            : "dark:bg-blue-500 dark:hover:bg-blue-600"
                        }`}
                  onClick={addToCart}
                >
                  <div className="absolute inset-0 flex justify-center items-center gap-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      ></path>
                    </svg>
                    <span className="whitespace-nowrap">{checkoutNow}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
