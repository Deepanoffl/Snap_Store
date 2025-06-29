import { ModalContext } from "../../Context/ProductModalProvider";
import { useEffect, useState, useContext } from "react";

const Product = ({ productDetails, loading, index }) => {
  const { setProductPreview, setProductModal } = useContext(ModalContext);
  
  const hasDiscount = !!productDetails?.discount;
  const price = productDetails?.price;
  const discount = productDetails?.discount;
  const discountedPrice = hasDiscount
    ? Math.ceil(price - (price * discount) / 100)
    : price;
  const discountInRupees= price-discountedPrice;  
  

  const [visible, setVisible] = useState(false);

  const viewProductDetails = () => {
    const detailSpot = {
      id: productDetails.id,
      image: productDetails.image,
      title: productDetails.title,
      discount,
      hasDiscount,
      price: price,
      discountedPrice,
      discountInRupees,
      brand: productDetails.brand,
      model: productDetails.model,
      color: productDetails.color,
      about: productDetails.description,
    };
    setProductPreview(detailSpot);
    setProductModal(true);
  };

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setVisible(true), index * 50);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const animationClass = visible
    ? "scale-100 opacity-100"
    : "scale-80 opacity-0";

  return loading ? (
    <div className="w-full rounded-xl relative overflow-hidden text-white pb-3 animate-pulse">
      <div className="bg-slate-200 dark:bg-slate-600 aspect-square w-full rounded-lg" />
      <div className="mt-3 px-2 space-y-2">
        <div className="h-4 bg-slate-300 dark:bg-slate-500 rounded w-3/4" />
        <div className="flex gap-2 items-center">
          <div className="h-4 w-1/4 bg-slate-300 dark:bg-slate-500 rounded" />
          <div className="h-4 w-1/3 bg-slate-300 dark:bg-slate-500 rounded" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <div
        className={`w-full rounded-xl relative overflow-hidden text-white pb-3 transform transition duration-500 ease-out ${animationClass}`}
      >
        <div className="overflow-hidden bg-white aspect-square">
          <img
            className="w-full h-full object-contain cursor-pointer hover:scale-105 transition duration-300"
            src={productDetails.image}
            alt={productDetails.title}
            loading="lazy"
            draggable="false"
            onClick={viewProductDetails}
          />
        </div>
        <div className="mt-3 px-2">
          <div className="w-full truncate text-sm font-medium">
            {productDetails.title}
          </div>
          <div className="w-[70%] h-5 rounded-xl flex gap-2 items-center">
            {hasDiscount ? (
              <>
                <span className="line-through text-sm text-zinc-400">
                  {price}
                </span>
                <span className="text-xl font-semibold">
                  <span className="text-green-500">$</span>
                  {discountedPrice}
                </span>
                <div className="flex items-center gap-[2px]">
                  <span className="bg-red-500 text-white text-[10px] h-6 w-6 rounded-full text-center flex justify-center items-center">
                    {discount}%
                  </span>
                  <span className="text-sm font-medium">off</span>
                </div>
              </>
            ) : (
              <span className="text-xl font-semibold">
                <span className="text-green-500">$</span>
                {price}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
