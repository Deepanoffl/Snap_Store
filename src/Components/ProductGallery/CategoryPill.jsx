import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import { TabContext } from "../../Context/TabActiveProvider";
import { ProductContext } from "../../Context/ProductDataProvider";

const CategoryPill = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { setTabActive, setActiveCategory } = useContext(TabContext);
  const { setSmartFilter, productsBackup, setCopiedProducts } = useContext(ProductContext);
  
  const removeCategory = () => {
    setSelectedCategory("");
    setTabActive("All");
    setActiveCategory("");
    setSmartFilter(productsBackup);
    setCopiedProducts(productsBackup);
  };
  return (
    <div
      className={`text-sm  rounded-full mt-5 text-white font-bold px-2 shadow-md dark:bg-gray-600 transition-colors w-fit cursor-pointer flex items-center gap-[1px] group`}
      onClick={removeCategory}
    >
      {selectedCategory}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 group-hover:text-red-500 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

export default CategoryPill;
