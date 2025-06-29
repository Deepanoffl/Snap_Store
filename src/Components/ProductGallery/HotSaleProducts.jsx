import ImageCarousel from "../HotSale/ImageCarousel";
import TopPick from "../HotSale/TopPick";
import BestSellers from "../HotSale/BestSellers";
import ProductCollections from "./ProductCollections";

const HotSaleProducts = () => {
  return (
    <>
      <div className="dark:bg-gray-700 min-h-screen ml-40 mt-16 px-8 pt-5 pb-10 max-[578px]:ml-0">
        <div className="flex md:flex-nowrap flex-wrap gap-4">
          <ImageCarousel />
          <TopPick />
          <BestSellers />
        </div>
        <ProductCollections />
      </div>
    </>
  );
};

export default HotSaleProducts;
