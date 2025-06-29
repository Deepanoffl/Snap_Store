import { useEffect, useState, useContext } from "react";
import { ModalContext } from "../../Context/ProductModalProvider";

const HighlightedProduct = ({ specialProduct, loading }) => {
  const { setProductPreview, setProductModal } = useContext(ModalContext);
  const [imageZoom, setImageZoom] = useState(false);

  const hasDiscount = !!specialProduct?.discount;
  const price = specialProduct?.price;
  const discount = specialProduct?.discount;
  const discountedPrice = hasDiscount
    ? Math.ceil(price - (price * discount) / 100)
    : price;
  const discountInRupees = price - discountedPrice;

  const viewProductDetails = () => {
    const detailSpot = {
      id: specialProduct.id,
      image: specialProduct.image,
      title: specialProduct.title,
      discount,
      hasDiscount,
      price: price,
      discountedPrice,
      discountInRupees,
      brand: specialProduct.brand,
      model: specialProduct.model,
      color: specialProduct.color,
      about: specialProduct.description,
    };
    setProductPreview(detailSpot);
    setProductModal(true);
  };

  useEffect(() => {
    if (!loading) {
      setImageZoom(true);
      const timeout = setTimeout(() => {
        setImageZoom(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return loading ? (
    <div className="flex gap-3 xl:flex-row items-center overflow-hidden animate-pulse">
      <div
        className="flex-grow bg-slate-200 dark:bg-slate-600 min-w-[110px] max-w-[110px] rounded-xl shadow-md"
        style={{ aspectRatio: "1 / 1" }}
      ></div>
      <div className="flex-grow space-y-2 w-full">
        <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-500 rounded"></div>
        <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-500 rounded"></div>
        <div className="h-3 w-1/4 bg-slate-300 dark:bg-slate-500 rounded"></div>
      </div>
    </div>
  ) : (
    <div className="flex gap-3 items-center overflow-hidden cursor-pointer group w-[95%]">
      <div
        className=" bg-white  min-w-[110px] max-w-[110px] rounded-xl shadow-md overflow-hidden relative"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          className={`w-full h-full object-contain transition-transform duration-300  ease-in-out ${
            imageZoom ? "scale-170 opacity-0" : "scale-100 opacity-100"
          } group-hover:scale-110`}
          src={specialProduct.image}
          alt={specialProduct.title}
          draggable="false"
          onClick={viewProductDetails}
        />
      </div>

      <div className="flex-grow">
        <div className="line-clamp-2 text-xs mb-1 font-bold">
          {specialProduct.title}
        </div>

        <div className="flex items-center xl:gap-0 gap-2">
          {hasDiscount && (
            <span className="text-xs line-through pr-2 text-zinc-400 dark:text-zinc-200">
              {price}
            </span>
          )}
          <span className="text-base font-semibold">
            <span className="text-green-500">$</span>
            {discountedPrice}
          </span>
        </div>

        {hasDiscount && (
          <div className="flex items-center gap-[2px] mt-1">
            <span className="bg-red-500 text-white text-[10px] h-6 w-6 rounded-full text-center flex items-center justify-center">
              {discount}%
            </span>
            <span className="text-xs font-semibold">off</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightedProduct;
