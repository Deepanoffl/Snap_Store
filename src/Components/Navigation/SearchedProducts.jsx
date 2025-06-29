import { useEffect, useState, useContext } from "react";
import { ModalContext } from "../../Context/ProductModalProvider";

const SearchedProducts = ({ productDetails, index }) => {
  const { setProductModal, setProductPreview } = useContext(ModalContext);
  const [show, setShow] = useState(false);

  const hasDiscount = !!productDetails?.discount;
  const price = productDetails?.price;
  const discount = productDetails?.discount;
  const discountedPrice = hasDiscount
    ? Math.ceil(price - (price * discount) / 100)
    : price;

  const viewProductDetails = () => {
    const detailSpot = {
      id: productDetails.id,
      image: productDetails.image,
      title: productDetails.title,
      discount,
      hasDiscount,
      price: price,
      discountedPrice,
      brand: productDetails.brand,
      model: productDetails.model,
      color: productDetails.color,
      about: productDetails.description,
    };
    setProductPreview(detailSpot);
    setProductModal(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 50);
    return () => clearTimeout(timer);
  }, []);

  return  (
    <div
      className={`w-full flex gap-2 items-center cursor-pointer group 
        transition-all duration-300 ease-out relative py-2 px-5 transform
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      onClick={viewProductDetails}
    >
      <img
        src={productDetails.image}
        alt="404"
        className="w-[10%] min-w-[80px] group-hover:scale-[1.05] transition-transform"
      />
      <div className="flex flex-col text-sm text-white">
        <span className="line-clamp-1">{productDetails.title}</span>
        <span className="text-xl">
          <span className="text-green-500">$</span>
          {productDetails.price}
        </span>
        <span className="absolute h-[1px] w-full bottom-0 left-0 from-transparent via-white/50 to-transparent bg-gradient-to-r"></span>
      </div>
    </div>
  );
};

export default SearchedProducts;
