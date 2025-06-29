import CategoryList from "../ProductsCategory/CategoryList";
import "../ProductGallery/HotSaleProducts";
import HotSaleProducts from "../ProductGallery/HotSaleProducts";

const PrimaryLayout = () => {
  return (
    <>
      <CategoryList />
      <HotSaleProducts />
    </>
  );
};

export default PrimaryLayout;
