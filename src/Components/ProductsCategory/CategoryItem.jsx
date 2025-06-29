import { useContext } from "react";
import { RefreshKeyContext } from "../../Context/RefreshKeyProvider";
import { ProductContext } from "../../Context/ProductDataProvider";
import { TabContext } from "../../Context/TabActiveProvider";
import { CategoryContext } from "../../Context/CategoryProvider";
import axios from "axios";

const CategoryItem = ({ category }) => {
  const { setRefreshKey } = useContext(RefreshKeyContext);
  const { setSmartFilter, setCopiedProducts } = useContext(ProductContext);
  const { setTabActive, activeCategory, setActiveCategory } =
    useContext(TabContext);
  const { setCategoryLoading, setSelectedCategory } =
    useContext(CategoryContext);

  const filterCategory = async (selectedCategory) => {
    window.scrollTo({ top: 300, behavior: "smooth" });

    setTabActive("All");
    setSelectedCategory(selectedCategory);
    setActiveCategory(selectedCategory);
    setCategoryLoading(true);

    try {
      const requestAPI = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${selectedCategory.toLowerCase()}`
      );
      setCategoryLoading(false);
      setSmartFilter(requestAPI.data.products);
      setCopiedProducts(requestAPI.data.products);
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to fetch category:", error);
    }
  };
  return (
    <li
      className={`text-sm font-bold mb-1 px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
        activeCategory === category ? `text-yellow-300` : ""
      }`}
      onClick={() => filterCategory(category)}
    >
      {category}
    </li>
  );
};

export default CategoryItem;
